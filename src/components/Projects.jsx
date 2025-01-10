// components/Projects.js
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/Projects.css';

const ProjectCard = ({ project }) => {
  const { darkMode } = useTheme();

  return (
    <div className={`project-card ${darkMode ? 'dark' : ''}`}>
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tech-stack">
        {project.technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      )}
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1",
      image: "/path-to-project1-image.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://project1.com"
    },
    // Add more projects...
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;