import React from "react";
import { useTheme } from "../context/ThemeContext";
import "../styles/Projects.css";
import { projects } from "../data";

const ProjectCard = ({ project }) => {
  const { darkMode } = useTheme();

  return (
    <div className={`project-card ${darkMode ? "dark" : ""}`}>
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-stack">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
      {project.links && (
        <div className="project-links">
          {Object.entries(project.links).map(([projectName, projectLink]) => (
            <a href={projectLink} target="_blank" rel="noopener noreferrer">
              {projectName}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const Projects = () => {
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
