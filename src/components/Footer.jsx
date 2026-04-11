import React from 'react';
import './Footer.css';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <motion.footer
            className="footer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="footer-content">
                {/* Social Links */}
                <motion.div
                    className="footer-socials"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <motion.a whileHover={{ y: -5, scale: 1.1 }} href="https://github.com/TheRakshitRaj" className="footer-social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={20} />
                    </motion.a>
                    <motion.a whileHover={{ y: -5, scale: 1.1 }} href="https://www.linkedin.com/in/rakshit-raj-34a47739a/" className="footer-social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn size={20} />
                    </motion.a>
                    <motion.a whileHover={{ y: -5, scale: 1.1 }} href="https://leetcode.com/u/TheRakshitRaj/" className="footer-social-link" aria-label="LeetCode" target="_blank" rel="noopener noreferrer">
                        <SiLeetcode size={20} />
                    </motion.a>
                    <motion.a whileHover={{ y: -5, scale: 1.1 }} href="https://x.com/TheRakshitRaj" className="footer-social-link" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
                        <FaXTwitter size={20} />
                    </motion.a>
                    <motion.a whileHover={{ y: -5, scale: 1.1 }} href="https://youtube.com/@TheRakshitRaj" className="footer-social-link" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                        <FaYoutube size={20} />
                    </motion.a>
                </motion.div>

                <motion.div
                    className="footer-copyright"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <p>© {currentYear} Rakshit Raj. Designed in California.</p>
                </motion.div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToTop}
                    className="back-to-top"
                >
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                    </svg>
                    Back to Top
                </motion.button>
            </div>
        </motion.footer>
    );
};

export default Footer;
