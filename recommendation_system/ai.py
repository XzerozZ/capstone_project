import numpy as np
from sentence_transformers import SentenceTransformer
import pandas as pd
from flask import Flask, request, jsonify
from prisma import Prisma 
from scipy.spatial.distance import pdist

# Load your SentenceTransformer model
model = SentenceTransformer('distilbert-base-nli-mean-tokens')
app = Flask(__name__)

@app.route('/api/process_data', methods=['POST'])
def process_data():
    prisma = Prisma()
    prisma.connect()
    print('Processing data...')
    try:
        data = request.get_json()
        if not data:
            return jsonify({'error': 'No JSON data provided'}), 400

        user = data.get('freelance_data')

        if user is None:
            return jsonify({'error': 'Input data not found or not valid'}), 400
        user_data = prisma.user.find_unique(
            where = {
                "user_id": int(user)
            },
            include = {
                "experience": {
                    "include": {
                        "category": True
                    }
                }
            }
        )
        user_exp = [experience.category.name for experience in user_data.experience]
        jobs = prisma.job.find_many(
            where = {
                "status": "Open"
            }
        )
        job_descriptions = [jobs.description for job in jobs]
    
        embedded_data_jobs = model.encode(job_descriptions, show_progress_bar=True)
        embedded_data_freelance = model.encode(user_exp, show_progress_bar=True)

        # Combine embeddings
        result = np.concatenate((embedded_data_freelance, embedded_data_jobs), axis=0)
        result_array = np.array(result)
        cos_sim_data = pd.DataFrame(1 - pdist(result_array, 'cosine'))  # Calculate cosine similarity matrix

        # Initialize an empty dictionary to store the recommendations
        recommendations_dict = {}
        freelance_size = len(user_exp)

        for i in range(freelance_size):
            index_recomm = cos_sim_data.loc[i][freelance_size:].sort_values(ascending=False).index.tolist()[0:3]
            recomm = [x - freelance_size for x in index_recomm]
            exp_recom = [job_descriptions[idx] for idx in recomm]
            recommendations_dict[user_exp[i]] = exp_recom

        return jsonify(recommendations_dict), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=False, host='localhost', port=4000)