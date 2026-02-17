import React, { useState } from 'react';
import LeftPane from './components/Layout/LeftPane';
import MainContent from './components/Layout/MainContent';
import Footer from './components/Footer';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Awards from './components/Awards';
import Publications from './components/Publications';
import Talks from './components/Talks';
import Pictures from './components/Pictures';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  
  const sections = {
    about: <About />,
    education: <Education />,
    experience: <Experience />,
    skills: <Skills />,
    awards: <Awards />,
    publications: <Publications />,
    talks: <Talks />,
    pictures: <Pictures />
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
    // Scroll to top when changing sections
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-wrapper">
      <div className="app-container">
        <LeftPane 
          activeSection={activeSection} 
          setActiveSection={handleSectionChange} 
        />
        <MainContent>
          {sections[activeSection]}
        </MainContent>
      </div>
      <Footer />
    </div>
  );
}

export default App;