import numpy as np
from sentence_transformers import SentenceTransformer, util
import pandas as pd
from fastapi import FastAPI, HTTPException, Form
import asyncio
from prisma import Prisma
from dotenv import load_dotenv
import os
from scipy.spatial.distance import pdist

app = FastAPI()
load_dotenv()


@app.post('/api/process_data')
async def process_data(freelance_data: str = Form(...)):
    prisma = Prisma()
    await prisma.connect()
    model_name = 'distilbert-base-nli-mean-tokens' 
    model = SentenceTransformer(model_name)

    print('Processing data...')
    try:
        if not freelance_data:
            raise HTTPException(status_code=400, detail='No JSON data provided')

        user = freelance_data

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
        )
        
        filtered_jobs = [job for job in jobs if job.description]  # Filter out jobs without descriptions
        job_descriptions = [job.description if job.description else "No description available" for job in
                            filtered_jobs]

        # Encode text data
        encoded_user_exp = model.encode(user_exp, show_progress_bar=True)
        encoded_job_descriptions = model.encode(job_descriptions, show_progress_bar=True)

        # Calculate cosine similarity
        similarity_matrix = util.pytorch_cos_sim(encoded_user_exp, encoded_job_descriptions)

        # Initialize an empty list to store the recommendations
        recommendations = []

        for i, exp in enumerate(user_exp):
            # Check if similarity_matrix is properly computed and is not None
            if similarity_matrix is not None and isinstance(similarity_matrix, np.ndarray) and similarity_matrix.size > 0:
                top_similar_idx = np.argsort(similarity_matrix[i])[-3:][::-1]  # Get indices of top 3

                # Include description snippets in recommendation string
                job_details = [f"{job_descriptions[idx][:50]}..." for idx in top_similar_idx]  # Include snippet of the description

                recommendations.append(f"Recommended job for '{exp}': {', '.join(job_details)}")
            else:
                recommendations.append(f"No recommendations found for '{exp}'")

        return recommendations

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == '__main__':
    import uvicorn

    uvicorn.run(app, host='localhost', port=4000)
