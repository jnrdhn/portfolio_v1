// components/Education.js
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/Education.css';

const Education = () => {
  const { darkMode } = useTheme();
  
  const education = [
    {
      institution: "University Name",
      degree: "Bachelor of Science in Computer Science",
      period: "2016 - 2020",
      description: "Relevant coursework and achievements"
    },
    // Add more education entries...
  ];

  return (
    <section id="education" className={`education-section ${darkMode ? 'dark' : ''}`}>
      <h2>Education</h2>
      <div className="education-timeline">
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-content">
              <h3>{edu.institution}</h3>
              <h4>{edu.degree}</h4>
              <span>{edu.period}</span>
              <p>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;