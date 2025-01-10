import React from "react";
import { useTheme } from "../context/ThemeContext";
import "../styles/Contact.css";
import { social } from "../data";

const Contact = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="contact"
      className={`contact-section ${darkMode ? "dark" : ""}`}
    >
      <h2>Let's Connect</h2>
      <p>Feel free to reach out for collaborations or just a friendly hello</p>
      <div className="social-links">
        <a
          href={social.github.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href={social.linkedin.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a href={`mailto:${social.contact.email}`}>
          <i className="fas fa-envelope"></i>
        </a>
        <a
          href={social.twitter.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
