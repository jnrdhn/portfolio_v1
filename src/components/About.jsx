// components/About.js
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/About.css';

const About = () => {
  const { darkMode } = useTheme();

  return (
    <section id="about" className={`about-section ${darkMode ? 'dark' : ''}`}>
      <div className="about-content">
        <div className="about-text">
          <h1>John Doe</h1>
          <h2>Full Stack Developer</h2>
          <p>
            A passionate developer with expertise in building modern web applications.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="about-image">
          <img src="/path-to-your-image.jpg" alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default About;