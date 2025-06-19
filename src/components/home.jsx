import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Navbar */}


      {/* Hero Section */}
      <section className="hero">
        <h1>Spot Fake News Instantly</h1>
        <p>Our AI-powered tool helps you separate facts from fiction in just seconds.</p>
        <Link to="/detect" className="hero-btn">🔍 Try Fake News Detector</Link>
      </section>

      {/* Info Cards */}
      <section className="info-section">
        <h2>Why Fake News Detection Matters</h2>
        <div className="cards">
          <div className="card">
            <h3>💡 Stay Informed</h3>
            <p>Ensure you’re consuming verified and accurate information.</p>
          </div>
          <div className="card">
            <h3>🔒 Trust AI</h3>
            <p>Our model is trained on real-world datasets to give you accurate results.</p>
          </div>
          <div className="card">
            <h3>🌐 Share Responsibly</h3>
            <p>Check before you spread — fight misinformation online.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Ready to Test a News Article?</h2>
        <p>Paste a news headline or story to verify its authenticity.</p>
        <Link to="/detect" className="cta-btn">🚀 Get Started</Link>
      </section>

      {/* Footer */}
      <footer className="footer">
        &copy; 2025 TruthCheck. Built for Final Year Project.
      </footer>
    </div>
  );
};

export default Home;
