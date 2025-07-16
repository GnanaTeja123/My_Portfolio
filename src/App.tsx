import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900">
      <Header />
      <Hero />
      <About />
      <Education />
      <Certifications />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;