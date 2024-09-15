from flask import Flask, request, jsonify
from googleapiclient.discovery import build

app = Flask(__name__)

# Google Jobs API configuration
google_jobs_api_key = 'YOUR_GOOGLE_API_KEY'
service = build('jobs', 'v3', developerKey=google_jobs_api_key)

@app.route('/get_roadmap', methods=['POST'])
def get_roadmap():
    data = request.json
    skills = data.get('skills', '')
    # Call the Google Jobs API to fetch related jobs
    response = service.projects().jobs().search(
        parent='projects/YOUR_PROJECT_ID',
        body={
            'jobQuery': {
                'query': skills
            }
        }
    ).execute()

    return jsonify(response.get('jobs', []))

if __name__ == "__main__":
    app.run(debug=True)
