import React, { useState } from "react";
import axios from "axios";
import "./MainPage.css"; // Import CSS styles

const MainPage = () => {
  const [text, setText] = useState("");
  const [prediction, setPrediction] = useState("");

  const Submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://fake-news-detection-backend-fece.onrender.com/predict", {
        text,
      });
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("Error making request:", error);
      setPrediction("Error fetching prediction");
    }
  };

  return (
    <div className="main-container">
      <h2 className="title">News Prediction</h2>
      <form onSubmit={Submit} className="form">
        <textarea
          className="input-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter news text"
          rows={6}
          required
        />

        <button type="submit" className="submit-btn">
          Check News
        </button>
      </form>

      {prediction && (
        <div className="prediction-result">
          <strong>Prediction:</strong> {prediction}
        </div>
      )}
    </div>
  );
};

export default MainPage;
