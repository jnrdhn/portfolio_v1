// components/Contact.js
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/Contact.css';

const Contact = () => {
  const { darkMode } = useTheme();

  return (
    <section id="contact" className={`contact-section ${darkMode ? 'dark' : ''}`}>
      <h2>Let's Connect</h2>
      <p>Feel free to reach out for collaborations or just a friendly hello</p>
      <div className="social-links">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="mailto:your.email@example.com">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;