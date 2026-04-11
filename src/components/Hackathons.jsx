import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaYoutube, FaTrophy } from 'react-icons/fa';
import './Hackathons.css';

const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!images || images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [images]);

    if (!images || images.length === 0) return null;

    return (
        <div className="hackathon-image-slider">
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`Slider image ${currentIndex + 1}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="slider-image"
                />
            </AnimatePresence>
            {images.length > 1 && (
                <div className="slider-dots">
                    {images.map((_, idx) => (
                        <div
                            key={idx}
                            className={`slider-dot ${idx === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(idx)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

const Hackathons = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [width, setWidth] = useState(0);
    const carouselRef = useRef();

    const tabs = [
        { id: 'all', label: 'All' },
        { id: 'online', label: 'Online' },
        { id: 'offline', label: 'Offline' },
    ];

    const hackathonsData = [
        {
            id: 1,
            title: "Doppleganger",
            type: "online",
            description: "Developed an innovative AI-powered solution for accessibility. We utilized modern web technologies and machine learning models to deliver a seamless experience.",
            certificate: "https://res.cloudinary.com/dphtrtpjx/image/upload/v1775907289/Screenshot_2026-04-11_170410_aw9bvq.png", // Placeholder
            images: [], // Online typically has only the certificate based on requirements
            links: {
                deploy: "https://example.com",
                github: "https://github.com/TheRakshitRaj/DeFi_Project",
                // youtube: "https://youtube.com"
            }
        },
        {
            id: 2,
            title: "Oddo x Indus Hackathon",
            type: "offline",
            description: "A 48-hour intense coding sprint focusing on smart city solutions. Collaborated with a team of 2 to build an Inventory Management System.",
            certificate: "https://res.cloudinary.com/dphtrtpjx/image/upload/v1775906108/odoo_x_indus_certificate_fhrthk.jpg",
            images: [
                "https://res.cloudinary.com/dphtrtpjx/image/upload/v1775907899/id-odoo_fnhd9d.jpg",


            ],
            links: {
                deploy: "https://inventra-liart.vercel.app/",
                github: "https://github.com/TheRakshitRaj/odooXIndus",
                youtube: "https://youtu.be/JHDEyyfzUTk?si=EAihsD2GG1OKk2HG"
            }
        },
        {
            id: 3,
            title: "Electrosphere 2K26",
            type: "offline",
            description: "Participated in the Electrosphere Competition, where we developed an AI-based software that detects objects in real time using a camera to assist visually impaired individuals. The system helps improve navigation and safety, and our project was awarded 1st Prize.",
            certificate: "https://res.cloudinary.com/dphtrtpjx/image/upload/v1770272796/ElectroSpehere-Certificate_snhsp2.png",
            images: [
                "https://res.cloudinary.com/dphtrtpjx/image/upload/v1775908375/Electrosphere_hzjdv2.jpg",


            ],
            links: {
                deploy: "https://inventra-liart.vercel.app/",
                github: "https://github.com/TheRakshitRaj/odooXIndus",
                youtube: "https://youtu.be/JHDEyyfzUTk?si=EAihsD2GG1OKk2HG"
            }
        },
        {
            id: 4,
            title: "DevHeat IIIT Surat",
            type: "offline",
            description: "Participated in DevHeat at IIIT Surat as a 4-member team, where we collaborated to build and present an innovative project under competitive conditions, enhancing our teamwork and problem-solving skills.",
            certificate: "https://res.cloudinary.com/dphtrtpjx/image/upload/v1775906134/DevHeat_xgsgxo.jpg",
            images: [



            ],
            links: {
                deploy: "https://inventra-liart.vercel.app/",
                github: "https://github.com/TheRakshitRaj/odooXIndus",
                youtube: "https://youtu.be/JHDEyyfzUTk?si=EAihsD2GG1OKk2HG"
            }
        }
    ];

    const filteredHackathons = hackathonsData.filter(h =>
        activeTab === 'all' ? true : h.type === activeTab
    );

    useEffect(() => {
        // Need a small timeout to let the DOM settle, especially when changing tabs
        const timeout = setTimeout(() => {
            if (carouselRef.current) {
                setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
            }
        }, 100);
        return () => clearTimeout(timeout);
    }, [filteredHackathons]);

    return (
        <section id="hackathons" className="hackathons-section">
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                style={{ marginBottom: '3rem' }}
            >
                <h2 className="section-title">
                    <FaTrophy className="title-icon" style={{ display: 'inline-block', marginRight: '10px', color: '#ffd700' }} />
                    <span className="apple-gradient-text">Hackathons</span>
                </h2>
                <p className="section-description">
                    Competitive programming & intense building experiences
                </p>
            </motion.div>

            <div className="hackathon-tabs">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {activeTab === tab.id && (
                            <motion.div
                                layoutId="active-hackathon-tab"
                                className="active-tab-bg"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className="tab-label">{tab.label}</span>
                    </button>
                ))}
            </div>

            <motion.div
                className="hackathons-carousel-container"
                ref={carouselRef}
                whileTap={{ cursor: "grabbing" }}
            >
                <motion.div
                    className="hackathons-carousel-inner"
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    animate={{ x: 0 }} // reset position on tab change
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    <AnimatePresence mode="popLayout">
                        {filteredHackathons.map((hackathon) => (
                            <motion.div
                                key={hackathon.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="hackathon-card-wrapper"
                            >
                                <div className="hackathon-card">
                                    <div className="hackathon-media">
                                        {hackathon.type === 'offline' && hackathon.images && hackathon.images.length > 0 ? (
                                            <ImageSlider images={[hackathon.certificate, ...hackathon.images]} />
                                        ) : (
                                            <img src={hackathon.certificate} alt={`${hackathon.title} certificate`} className="certificate-image" />
                                        )}
                                        <div className="hackathon-badge">
                                            {hackathon.type.charAt(0).toUpperCase() + hackathon.type.slice(1)}
                                        </div>
                                    </div>

                                    <div className="hackathon-content">
                                        <h3>{hackathon.title}</h3>
                                        <p>{hackathon.description}</p>

                                        <div className="hackathon-links">
                                            {hackathon.links.deploy && (
                                                <a href={hackathon.links.deploy} target="_blank" rel="noopener noreferrer" className="h-link h-deploy" title="Live Deploy">
                                                    <FaExternalLinkAlt />
                                                    <span>Deploy</span>
                                                </a>
                                            )}
                                            {hackathon.links.github && (
                                                <a href={hackathon.links.github} target="_blank" rel="noopener noreferrer" className="h-link h-github" title="GitHub Repo">
                                                    <FaGithub />
                                                    <span>GitHub</span>
                                                </a>
                                            )}
                                            {hackathon.links.youtube && (
                                                <a href={hackathon.links.youtube} target="_blank" rel="noopener noreferrer" className="h-link h-youtube" title="YouTube Video">
                                                    <FaYoutube />
                                                    <span>Video</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
                <div className="carousel-hint">
                    <span>Drag to explore</span>
                </div>
            </motion.div>
        </section>
    );
};

export default Hackathons;
