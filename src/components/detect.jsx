import React, { useState } from 'react';
import axios from "axios";
import './detect.css';

const Detect = () => {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

const handleDetect = async () => {
  if (!inputText.trim()) return;

  setLoading(true);
  setResult(null);

  try {
    //https://fake-news-detection-backend-fece.onrender.com/predict
    const response = await axios.post("https://fake-news-detection-backend-fece.onrender.com/predict", {
      text: inputText,
    });
    console.log(response);
    // Assuming the backend returns: { prediction: "Fake News", confidence: 92.3 }
    setResult({
   
      label: response.data.prediction,
      confidence: `${response.data.confidence}`, // Fallback if not provided
    });
  } catch (error) {
    console.error("Error making request:", error);
    setResult({
      label: "Error ❌",
      confidence: "Could not fetch prediction",
    });
  }

  setLoading(false);
};


  return (
    <div className="detect-container">
      <h2>Fake News Detector</h2>
      <p>Paste a news headline or article below to check its authenticity.</p>

      <textarea
        className="detect-textarea"
        placeholder="Enter news headline or article..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <button className="detect-button" onClick={handleDetect} disabled={loading}>
        {loading ? 'Checking...' : 'Analyze'}
      </button>

      {loading && <div className="loader"></div>}

      {result && (
        <div className="result-box">
          <h3>{result.label}</h3>
          <p>Confidence: <strong>{result.confidence}</strong></p>
        </div>
      )}
    </div>
  );
};

export default Detect;
