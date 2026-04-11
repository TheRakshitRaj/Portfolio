import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThreeBackground from './components/ui/ThreeBackground';
import ScrollProgress from './components/ui/ScrollProgress';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <ThreeBackground />
      <ScrollProgress />
      <div className="app-content-layer" style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Hackathons />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
