import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import './BentoItem.css';

const BentoItem = ({ title, icon, color, size, delay }) => {
    // Size can be 'sm', 'md', 'lg', 'xl' to determine span
    const getSizeClass = () => {
        switch (size) {
            case 'lg': return 'bento-lg';
            case 'md': return 'bento-md';
            case 'wide': return 'bento-wide';
            case 'tall': return 'bento-tall';
            default: return 'bento-sm';
        }
    };

    return (
        <motion.div
            className={`bento-item-wrapper ${getSizeClass()}`}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay * 0.1, type: "spring" }}
            viewport={{ once: true }}
        >
            <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.02}
                transitionSpeed={400}
                className="bento-glass-card"
                style={{ '--accent-color': color }}
            >
                <div className="bento-content">
                    <div className="bento-icon" style={{ color: color }}>
                        {icon}
                    </div>
                    <span className="bento-title">{title}</span>
                </div>
                <div className="bento-glow" />
            </Tilt>
        </motion.div>
    );
};

export default BentoItem;
