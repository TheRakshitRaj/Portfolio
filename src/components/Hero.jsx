import React from 'react';
import Button from './ui/Button';
import './Hero.css';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';

const Hero = () => {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Stagger effect for children
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 30 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 60,
                damping: 20,
                duration: 0.8
            }
        }
    };

    return (
        <section id="home" className="hero-section">
            {/* Background Elements */}
            <div className="hero-bg-blob blob-1"></div>
            <div className="hero-bg-blob blob-2"></div>

            <motion.div
                className="hero-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="hero-text">
                    <motion.h1 className="hero-title" variants={itemVariants}>
                        Hi, I'm <br /><span className="apple-gradient-text">Rakshit Raj</span>
                    </motion.h1>

                    <motion.span className="hero-subtitle apple-blue-text" variants={itemVariants}>
                        Full-Stack Developer
                    </motion.span>

                    <motion.p className="hero-description" variants={itemVariants}>
                        Crafting beautiful, performant web experiences with modern technologies.
                        Focused on simplicity and detail.
                    </motion.p>

                    <motion.div className="hero-action-group" variants={itemVariants}>
                        <div className="hero-buttons">
                            <Button
                                variant="primary"
                                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                            >
                                View My Work
                            </Button>
                            <Button
                                variant="secondary"
                                onClick={() => {
                                    const link = document.createElement('a');
                                    link.href = '/Rakshit_Raj_Resume.pdf';
                                    link.download = 'Rakshit_Raj_Resume.pdf';
                                    link.click();
                                }}
                            >
                                Download Resume
                            </Button>
                        </div>

                        <div className="hero-socials">
                            <a href="https://github.com/TheRakshitRaj" className="social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/rakshit-raj-34a47739a/" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn size={24} />
                            </a>
                            <a href="https://leetcode.com/u/The_RakshitRaj/" className="social-link" aria-label="LeetCode" target="_blank" rel="noopener noreferrer">
                                <SiLeetcode size={24} />
                            </a>
                            <a href="https://x.com/The_Rakshit_Raj" className="social-link" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
                                <FaXTwitter size={24} />
                            </a>
                            <a href="https://www.youtube.com/@The_RakshitRaj" className="social-link" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                                <FaYoutube size={24} />
                            </a>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="hero-image-container"
                    variants={imageVariants}
                >
                    <div className="hero-image-wrapper">
                        <img
                            src="https://res.cloudinary.com/dphtrtpjx/image/upload/v1773648035/IMG_20260305_145001_mzlw3o.png"
                            alt="Rakshit Raj"
                            className="hero-img"
                        />
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </motion.div>
        </section>
    );
};

export default Hero;
