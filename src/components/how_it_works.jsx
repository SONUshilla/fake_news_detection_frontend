import React from 'react';
import './HowItWorks.css';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  return (
    <div className="howit-container">
      <h1>How Our Fake News Detection System Works</h1>
      <p className="intro">
        This page offers a comprehensive and in-depth explanation of how our fake news detection system is built — from data processing and model training to API deployment and frontend integration. It showcases the full machine learning pipeline behind the intelligent decision-making.
      </p>

      {/* Section 1: Overview */}
      <section className="section">
        <h2>📌 Overview</h2>
        <p>
          The primary objective of our system is to intelligently classify news articles or headlines as either <strong>Fake</strong> or <strong>Real</strong>. This classification is accomplished using advanced techniques in <strong>Natural Language Processing (NLP)</strong> and <strong>Machine Learning (ML)</strong>. Users simply input any news content into the system, and a backend-trained model analyzes the text to return both a classification and a confidence score that reflects the model’s certainty.
        </p>
      </section>

      {/* Section 2: Dataset */}
      <section className="section">
        <h2>📊 Dataset</h2>
        <p>
          To build a reliable and unbiased model, we utilized two publicly available datasets:
        </p>
        <ul>
          <li><code>Fake.csv</code> — Contains 21,417 samples of fake news articles.</li>
          <li><code>True.csv</code> — Contains 21,417 samples of verified, factual news articles.</li>
        </ul>
        <p>
          Both datasets were pre-labeled and combined into a single unified dataframe. We introduced a new column named <code>class</code>, assigning:
        </p>
        <ul>
          <li><code>0</code> for Fake news</li>
          <li><code>1</code> for Real news</li>
        </ul>
        <p>
          This balanced dataset forms the foundation of our model’s learning capabilities.
        </p>
      </section>

      {/* Section 3: Preprocessing */}
      <section className="section">
        <h2>🧹 Text Preprocessing</h2>
        <p>
          Raw text data is inherently noisy and unstructured. Therefore, we implemented the following preprocessing steps to clean and standardize the dataset:
        </p>
        <ul>
          <li>Removal of punctuation, symbols, and HTML tags using <code>re</code> and <code>string</code> libraries</li>
          <li>Lowercasing all text to ensure uniformity</li>
          <li>Tokenization: splitting text into meaningful units (words)</li>
          <li>Stop-word removal to eliminate common but irrelevant words (e.g., “and”, “the”, “of”)</li>
        </ul>
        <p>
          This process ensured that only the most relevant textual information was retained, improving the performance and generalization of the model.
        </p>
      </section>

      {/* Section 4: Feature Engineering */}
      <section className="section">
        <h2>🔠 Feature Extraction using TF-IDF</h2>
        <p>
          Since machine learning algorithms require numerical input, we transformed the cleaned text into a vector representation using <strong>TF-IDF (Term Frequency - Inverse Document Frequency)</strong>.
        </p>
        <p>
          TF-IDF highlights unique and meaningful words in each article while reducing the weight of common terms that appear in many documents. This approach captures the importance of words in context.
        </p>
        <p><strong>Key parameters used:</strong></p>
        <ul>
          <li><code>stop_words='english'</code> — removes common English stopwords</li>
          <li><code>max_df=0.7</code> — excludes words appearing in more than 70% of documents</li>
        </ul>
      </section>

      {/* Section 5: Model */}
      <section className="section">
        <h2>🧠 Model: Multinomial Naive Bayes</h2>
        <p>
          We selected the <strong>Multinomial Naive Bayes</strong> algorithm — a probabilistic classifier tailored for categorical features such as word frequencies. It operates under the assumption of feature independence and performs exceptionally well in text classification tasks.
        </p>
        <p>
          Its efficiency, simplicity, and accuracy make it a preferred baseline model for text-based applications.
        </p>
      </section>

      {/* Section 6: Training */}
      <section className="section">
        <h2>🎯 Model Training & Evaluation</h2>
        <ul>
          <li><strong>Training/Test Split:</strong> 80% of the data was used for training and 20% for evaluation.</li>
          <li><strong>Evaluation Metrics:</strong> We used <em>accuracy score</em>, <em>confusion matrix</em>, and <em>classification report</em> to assess performance.</li>
          <li><strong>Result:</strong> The model consistently achieved between <code>94%</code> and <code>96%</code> accuracy on test data.</li>
        </ul>
        <p>
          High precision and recall values confirmed that the model was robust and not overfitting.
        </p>
      </section>

      {/* Section 7: Saving the Model */}
      <section className="section">
        <h2>💾 Model Serialization & Deployment</h2>
        <p>
          Once trained, the model and vectorizer were serialized using Python’s <code>pickle</code> module:
        </p>
        <ul>
          <li><code>fake_news_model.pkl</code> — the saved Naive Bayes model</li>
          <li><code>tfidf_vectorizer.pkl</code> — the saved vectorizer used during both training and inference</li>
        </ul>
        <p>
          These components were integrated into a <strong>Flask-based REST API</strong>, which allows real-time predictions via HTTP requests.
        </p>
      </section>

      {/* Section 8: Backend Integration */}
      <section className="section">
        <h2>🔗 Frontend–Backend Communication</h2>
        <p>
          The frontend, built using <strong>React.js</strong>, interacts with the backend via an asynchronous POST request sent to the endpoint:
        </p>
        <p>
          <code>https://fake-news-detection-backend-fece.onrender.com/predict</code>
        </p>
        <ol>
          <li>User enters text in the frontend form</li>
          <li>Text is sent to the Flask backend</li>
          <li>The backend vectorizes the input and applies the model</li>
          <li>Returns the predicted label and confidence score as a JSON response</li>
          <li>The result is rendered dynamically on the frontend</li>
        </ol>
      </section>

      {/* Section 9: Tech Stack */}
      <section className="section tech-stack">
        <h2>🛠️ Full Technology Stack</h2>
        <ul>
          <li><strong>Frontend:</strong> React.js, Axios, and plain CSS for responsiveness and interactivity</li>
          <li><strong>Backend:</strong> Flask (Python-based micro web framework)</li>
          <li><strong>Machine Learning:</strong> Scikit-learn, Pandas, NumPy</li>
          <li><strong>Vectorization:</strong> TF-IDF using <code>TfidfVectorizer</code></li>
          <li><strong>Model:</strong> Multinomial Naive Bayes</li>
          <li><strong>Deployment:</strong> Render.com for both backend and frontend hosting</li>
        </ul>
      </section>

      {/* CTA */}
      <div className="cta-howit">
        <p>Ready to experience it in action?</p>
        <Link to="/detect" className="cta-btn">🔍 Try Fake News Detector</Link>
      </div>
    </div>
  );
};

export default HowItWorks;
