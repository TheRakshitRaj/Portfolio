import React, { useState } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Figma from './components/Figma';
import Hackathons from './components/Hackathons';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThreeBackground from './components/ui/ThreeBackground';
import ScrollProgress from './components/ui/ScrollProgress';
import LoadingScreen from './components/ArchitectLoadingScreen';
import './index.css';

function App() {
    const [showApp, setShowApp] = useState(false);

    return (
        <HelmetProvider>
            <Helmet>
                <title>Rakshit Raj | Full-Stack Developer Portfolio</title>
                <meta name="description" content="Portfolio of Rakshit Raj — Full-Stack Developer skilled in React, Node.js, Web3, and more." />
                <meta name="keywords" content="Rakshit Raj, portfolio, React developer, full stack, web developer, JavaScript, Node.js, Web3" />
                <meta name="author" content="Rakshit Raj" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Rakshit Raj | Full-Stack Developer Portfolio" />
                <meta property="og:description" content="Explore projects, skills and achievements of Rakshit Raj — Full-Stack Developer." />
                <meta property="og:url" content="https://therakshitraj.netlify.app" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://res.cloudinary.com/dphtrtpjx/image/upload/v1773648035/IMG_20260305_145001_mzlw3o.png" />
                <link rel="canonical" href="https://therakshitraj.netlify.app" />
            </Helmet>

            <LoadingScreen onFinish={() => setShowApp(true)} />

            {showApp && (
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
                            <Figma />
                            <Hackathons />
                            <Certificates />
                            <Achievements />
                            <Contact />
                        </main>
                        <Footer />
                    </div>
                </div>
            )}
        </HelmetProvider>
    );
}

export default App;
