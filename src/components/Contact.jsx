import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("https://fake-news-detection-backend-fece.onrender.com/contact", formData);
      console.log(response.data);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Error submitting contact form:", error);
    }
  };
  

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Have a question, suggestion, or feedback? We'd love to hear from you!</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
        </label>

        <label>
          Message:
          <textarea
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            rows="6"
          ></textarea>
        </label>

        <button type="submit">Send Message</button>
      </form>

      {submitted && <p className="success-message">✅ Message sent successfully!</p>}
    </div>
  );
};

export default Contact;
