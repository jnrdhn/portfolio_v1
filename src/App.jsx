// App.js
import React from 'react';
import { useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import './styles/App.css';

function App() {
  const { darkMode } = useTheme();

  return (
    <div className="app-container" data-theme={darkMode ? 'dark' : 'light'}>
      <Navbar />
      <main>
        <About />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App; 