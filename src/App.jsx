// App.js
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import './styles/App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
        <Navbar />
        <main>
          <About />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;