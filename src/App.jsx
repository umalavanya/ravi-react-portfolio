import { useState } from 'react';
import LeftPane from './components/Layout/LeftPane';
import MainContent from './components/Layout/MainContent';
import './App.css';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Awards from './components/Awards';
import Publications from './components/Publications';
import Footer from './components/Footer';
import Pictures from './components/Pictures';
import Talks from './components/Talks';
import Skills from './components/Skills'


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

  return (
    <>
    <div className="app-container">
      <LeftPane activeSection={activeSection} setActiveSection={setActiveSection} />
      <MainContent>
        {sections[activeSection]}
      </MainContent>
    </div>
    <Footer className="footer"></Footer>
    </>
  );
}

export default App;