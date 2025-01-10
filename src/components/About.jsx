import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/About.css';
import { personalInfo } from '../data';

const About = () => {
  const { darkMode } = useTheme();
  const { name, title, description, profileImage } = personalInfo;

  return (
    <section id="about" className={`about-section ${darkMode ? 'dark' : ''}`}>
      <div className="about-content">
        <div className="about-text">
          <h1>{name}</h1>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="about-image">
          <img src="test.jpg" alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default About;