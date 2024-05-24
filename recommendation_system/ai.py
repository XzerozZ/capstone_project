import os
import numpy as np
import pandas as pd
from fastapi import FastAPI, HTTPException
from sentence_transformers import SentenceTransformer, util
from dotenv import load_dotenv
from scipy.spatial.distance import pdist
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.cluster import KMeans
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.decomposition import PCA
import psycopg2
from psycopg2.extras import RealDictCursor

app = FastAPI()
load_dotenv()

# Database connection
conn = psycopg2.connect(
    database=os.getenv("DB_NAME", "Capstone"),
    host=os.getenv("DB_HOST", "localhost"),
    user=os.getenv("DB_USER", "admin"),
    password=os.getenv("DB_PASSWORD", "admin123"),
    port=os.getenv("DB_PORT", "5432")
)

@app.post('/api/processdata')
async def process_data(data: dict):
    cursor = conn.cursor(cursor_factory=RealDictCursor)
    model_name = 'distilbert-base-nli-mean-tokens'
    model = SentenceTransformer(model_name)

    print('Processing data...')
    try:
        if not data:
            raise HTTPException(status_code=400, detail='No JSON data provided')

        user_id = data.get('user_id')
        if user_id is None:
            raise HTTPException(status_code=400, detail='Input data not found or not valid')

        user_id = int(user_id)

        # Fetch user data and experience categories
        cursor.execute("""
            SELECT u.*, c.name AS category_name
            FROM "user" u
            LEFT JOIN experience e ON u.user_id = e.user_id
            LEFT JOIN category c ON e.category_id = c.category_id
            WHERE u.user_id = %s;
        """, (user_id,))
        user_data = cursor.fetchall()

        if not user_data:
            raise HTTPException(status_code=404, detail='User not found')

        user_exp = [record['category_name'].strip() for record in user_data if record['category_name']]
        print("User Experience Categories:", user_exp)
        cursor.execute("""
            SELECT j.*, c.name AS category_name
            FROM job j
            LEFT JOIN job_exp je ON j.job_id = je.job_id
            LEFT JOIN category c ON je.category_id = c.category_id
            WHERE j.status = 'Open';
        """)
        jobs = cursor.fetchall()
        if not jobs:
            raise HTTPException(status_code=404, detail='No open jobs found')

        filtered_jobs = [job for job in jobs if job['description']]
        job_descriptions = [job['description'] if job['description'] else "No description available" for job in filtered_jobs]
        encoded_user_exp = model.encode(user_exp, show_progress_bar=True)
        encoded_job_descriptions = model.encode(job_descriptions, show_progress_bar=True)
        
        result = np.concatenate((encoded_user_exp, encoded_job_descriptions), axis=0)
        exp_size = len(user_exp)
        X = np.array(result)
        cos_sim_data = pd.DataFrame(util.cos_sim(X, X).numpy())
        
        recommendations_dict = {}
        for i in range(exp_size):
            index_recomm = cos_sim_data.loc[i][exp_size:].sort_values(ascending=False).index.tolist()[:3]
            recomm = [x - exp_size for x in index_recomm]
            exp_data = [filtered_jobs[idx] for idx in recomm]
            
            recommendations = []
            for job in exp_data:
                categories = [record['category_name'] for record in jobs if record['job_id'] == job['job_id']]
                recommendation = {
                    "job_id": job['job_id'],
                    "title": job['title'],
                    "image": job.get('image'),
                    "budget": job.get('budget'),
                    "posted_date": job.get('posted_date'),
                    "categories": job.get('category_name')
                }
                recommendations.append(recommendation)
            
            watched_company = user_exp[i]
            recommendations_dict[watched_company] = recommendations

        return {"recommend": recommendations_dict}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        cursor.close()

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host='localhost', port=4000)
