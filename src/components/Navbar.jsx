import React from "react";
import { useTheme } from "../context/ThemeContext";
import "../styles/Navbar.css";

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className="navbar-wrapper">
      <nav className={`navbar ${darkMode ? "dark" : ""}`}>
        <div className="navbar-container">
          <div className="navbar-buttons">
            <button
              onClick={() =>
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <i className="fas fa-user"></i>
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <i className="fas fa-code"></i>
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("experience")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <i className="fas fa-briefcase"></i>
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("education")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <i className="fas fa-graduation-cap"></i>
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <i className="fas fa-envelope"></i>
            </button>
            <button onClick={toggleTheme}>
              <i className={`fas ${darkMode ? "fa-sun" : "fa-moon"}`}></i>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;