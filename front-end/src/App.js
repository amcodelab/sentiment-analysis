import './App.css';
import React, { useState } from "react";
import axios from "axios";
import { config } from './config';

function App() {
  const [text, setText] = useState("");
  const [label, setLabel] = useState("");
  const [score, setScore] = useState("");
  const [loading, setLoading] = useState(false);

  const predictSentiment = async () => {
    setLoading(true);
    const response = await axios.post(`${config.apiUrl}:${config.apiPort}/api/predict_sentiment`, { text });

    setLabel(response.data.label);
    setScore(response.data.score);
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h1>Sentiment Analysis</h1>
      <div className="text-area-container">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="text-area"
      ></textarea>
      {loading && <div className="loader"></div>}
      </div>
      <br />
      <button onClick={predictSentiment} disabled={loading}>
        {loading ? "Loading..." : "Predict"}
      </button>
      
      <p>
        Predicted sentiment:{" "}
        <span className={label.toLowerCase()}>{label}</span>
      </p>
      <p>
        Confidence score:{" "}
        <span className={label.toLowerCase()}>{score}</span>
      </p>
    </div>
  );
}

export default App;


//style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}