import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { experiences } from '../data';
import '../styles/ExperienceTimeline.css';

const TimelineItem = ({ data }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-50px'
      }
    );

    const currentRef = itemRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="timeline-item" ref={itemRef}>
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <div className="timeline-header">
          <div className="company-logo">
            <img src={data.logo} alt={data.company} />
          </div>
          <div className="company-info">
            <h3>{data.position}</h3>
            <h4>{data.company}</h4>
            <p className="timeline-date">{data.startDate} - {data.endDate}</p>
          </div>
        </div>
        <p className="timeline-description">{data.description}</p>
        <div className="tech-stack">
          {data.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const { darkMode } = useTheme();

  return (
    <section id="experience" className={`experience-section ${darkMode ? 'dark' : ''}`}>
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map((exp) => (
          <TimelineItem key={exp.id} data={exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;