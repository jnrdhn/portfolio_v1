import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/Experience.css';
import {experiences} from '../data';

const Experience = () => {

  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-logo">
              <img src={exp.logo} alt={exp.company} />
            </div>
            <div className="timeline-content">
              <h3>{exp.company}</h3>
              <h4>{exp.position}</h4>
              <span>{exp.period}</span>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;