import React, { useState, useEffect } from 'react';
import Button from './ui/Button';
import './Hero.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaXTwitter, FaYoutube, FaXmark, FaDownload } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';

/* ── Typewriter hook ─────────────────────────────────────────────────── */
const ROLES = [
    'Full-Stack Developer',
    'UI/UX Designer',
    'Open Source Contributor',
    'Web3 Enthusiast',
    'Problem Solver',
];

function useTypewriter(words, typingSpeed = 80, deletingSpeed = 45, pauseMs = 1800) {
    const [display, setDisplay] = useState('');
    const [wordIdx, setWordIdx] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = words[wordIdx % words.length];
        let timeout;
        if (!isDeleting) {
            if (display.length < current.length) {
                timeout = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), typingSpeed);
            } else {
                timeout = setTimeout(() => setIsDeleting(true), pauseMs);
            }
        } else {
            if (display.length > 0) {
                timeout = setTimeout(() => setDisplay(current.slice(0, display.length - 1)), deletingSpeed);
            } else {
                setIsDeleting(false);
                setWordIdx((i) => i + 1);
            }
        }
        return () => clearTimeout(timeout);
    }, [display, isDeleting, wordIdx, words, typingSpeed, deletingSpeed, pauseMs]);

    return display;
}

/* ── Resume Modal ────────────────────────────────────────────────────── */
function ResumeModal({ onClose }) {
    // Trap focus and close on Escape
    useEffect(() => {
        const handler = (e) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [onClose]);

    return (
        <AnimatePresence>
            <motion.div
                className="resume-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className="resume-modal"
                    initial={{ opacity: 0, scale: 0.92, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92, y: 30 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="resume-modal-header">
                        <span className="resume-modal-title">Rakshit Raj — Resume</span>
                        <div className="resume-modal-actions">
                            <a
                                href="/Rakshit_Raj_Resume.pdf"
                                download="Rakshit_Raj_Resume.pdf"
                                className="resume-download-btn"
                                aria-label="Download resume"
                            >
                                <FaDownload size={14} /> Download
                            </a>
                            <button className="resume-close-btn" onClick={onClose} aria-label="Close">
                                <FaXmark size={18} />
                            </button>
                        </div>
                    </div>
                    <iframe
                        src="/Rakshit_Raj_Resume.pdf#toolbar=0"
                        title="Rakshit Raj Resume"
                        className="resume-iframe"
                    />
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

/* ── Hero ─────────────────────────────────────────────────────────────── */
const Hero = () => {
    const role = useTypewriter(ROLES);
    const [showResume, setShowResume] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
        },
    };
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 10 } },
    };
    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 30 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 60, damping: 20 } },
    };

    return (
        <>
            <section id="home" className="hero-section">
                <div className="hero-bg-blob blob-1" />
                <div className="hero-bg-blob blob-2" />

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

                        {/* Typewriter subtitle */}
                        <motion.div className="hero-typewriter" variants={itemVariants}>
                            <span className="hero-subtitle apple-blue-text">{role}</span>
                            <span className="typewriter-cursor" aria-hidden="true">|</span>
                        </motion.div>

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
                                <Button variant="secondary" onClick={() => setShowResume(true)}>
                                    View Resume
                                </Button>
                            </div>

                            <div className="hero-socials">
                                <a href="https://github.com/TheRakshitRaj" className="social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
                                <a href="https://www.linkedin.com/in/rakshit-raj-34a47739a/" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={24} /></a>
                                <a href="https://leetcode.com/u/The_RakshitRaj/" className="social-link" aria-label="LeetCode" target="_blank" rel="noopener noreferrer"><SiLeetcode size={24} /></a>
                                <a href="https://x.com/The_Rakshit_Raj" className="social-link" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer"><FaXTwitter size={24} /></a>
                                <a href="https://www.youtube.com/@The_RakshitRaj" className="social-link" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><FaYoutube size={24} /></a>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div className="hero-image-container" variants={imageVariants}>
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

            {/* Resume Modal — rendered at root level so it overlays everything */}
            {showResume && <ResumeModal onClose={() => setShowResume(false)} />}
        </>
    );
};

export default Hero;
