import numpy as np
from sentence_transformers import SentenceTransformer, util
import pandas as pd
from fastapi import FastAPI, HTTPException, Form
import asyncio
from prisma import Prisma
from dotenv import load_dotenv
import os
from scipy.spatial.distance import pdist
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.cluster import KMeans
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.decomposition import PCA

app = FastAPI()
load_dotenv()


@app.post('/api/processdata')
async def process_data(data: dict):
    prisma = Prisma()
    await prisma.connect()
    model_name = 'distilbert-base-nli-mean-tokens' 
    model = SentenceTransformer(model_name)

    print('Processing data...')
    try:
        if not data:
            raise HTTPException(status_code=400, detail='No JSON data provided')

        user = data.get('user_id')

        if user is None:
            raise HTTPException(status_code=400, detail='Input data not found or not valid')

        user_data = await prisma.user.find_unique(
            where={
                "user_id": int(user)
            },
            include={
                "experience": {
                    "include": {
                        "category": True
                    }
                }
            }
        )
        user_exp = [exp.category.name.strip() for exp in user_data.experience]
        print(user_exp)
        jobs = await prisma.job.find_many(
            where={
                "status": "Open"
            },
            include={
                'job_exp':  {
                    "include":{
                        "category": True
                    }
                },
                "post": {
                    "include":{
                        "user": True
                    }
                }
            }
        )
        
        filtered_jobs = [job for job in jobs if job.description]  
        job_descriptions = [job.description if job.description else "No description available" for job in
                            filtered_jobs]

        encoded_user_exp = model.encode(user_exp, show_progress_bar=True)
        encoded_job_descriptions = model.encode(job_descriptions, show_progress_bar=True)
        result =  np.concatenate((encoded_user_exp, encoded_job_descriptions), axis=0)
        exp_size = np.size(user_exp)
        X = np.array(result)
        cos_sim_data = pd.DataFrame(cosine_similarity(X))
        recommendations_dict = {}
        for i in range(exp_size):
            index_recomm = cos_sim_data.loc[i][exp_size:].sort_values(ascending=False).index.tolist()[0:3]
            recomm = [x - exp_size for x in index_recomm]
            exp_data = [filtered_jobs[i] for i in recomm]
            recommendations = []
            for job in exp_data:
                categories = [category.category.name for category in job.job_exp]
                recommendation = {
                    "job_id" : job.job_id,
                    "title"  : job.title,
                    "budget" : job.budget,
                    "posted_date" : job.posted_date,
                    "categories": categories
                }
                recommendations.append( recommendation )
            
            watched_company = user_exp[i]
            recommendations_dict[watched_company] = recommendations

        return {
            "recommend" : recommendations_dict
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host='localhost', port=4000)
