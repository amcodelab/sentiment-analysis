from flask import Flask, request, jsonify
from transformers import pipeline
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route('/api/predict_sentiment', methods=['POST'])
def predict_sentiment():
    data = request.get_json(force=True)
    text = data['text']
    classifier = pipeline('sentiment-analysis')
    result = classifier(text)[0]
    label = result['label']
    score = result['score']
    response = jsonify({'label': label, 'score': score})
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Methods', 'POST')
    return response

if __name__ == '__main__':
    app.run(debug=True)
