import React from 'react';
import { motion } from 'framer-motion';
import { SiFigma } from 'react-icons/si';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './Figma.css';

const designs = [
    {
        title: 'Portfolio UI Design',
        preview: 'https://res.cloudinary.com/dphtrtpjx/image/upload/v1770114279/Screenshot_2026-02-03_154955_fg1sqo.png',
        figmaLink: 'https://www.figma.com',
        description: 'Personal portfolio design system with dark mode components.',
    },
    {
        title: 'E-Commerce Dashboard',
        preview: 'https://res.cloudinary.com/dphtrtpjx/image/upload/v1770114269/Screenshot_2026-02-03_155233_p4mons.png',
        figmaLink: 'https://www.figma.com',
        description: 'Admin dashboard with analytics charts and order management.',
    },
    {
        title: 'Mobile App — Task Manager',
        preview: 'https://res.cloudinary.com/dphtrtpjx/image/upload/v1770114269/Screenshot_2026-02-03_155159_x7ixos.png',
        figmaLink: 'https://www.figma.com',
        description: 'Clean mobile UI for a productivity task management app.',
    },
    {
        title: 'Landing Page — SaaS',
        preview: 'https://res.cloudinary.com/dphtrtpjx/image/upload/v1770114269/Screenshot_2026-02-03_155103_gfgvxu.png',
        figmaLink: 'https://www.figma.com',
        description: 'Modern SaaS landing page with hero, features, and CTAs.',
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.12, duration: 0.5 },
    }),
};

const Figma = () => (
    <motion.section
        id="figma"
        className="figma-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
    >
        <div className="section-header">
            <h2 className="section-title">
                Figma <span className="apple-gradient-text">Designs</span>
            </h2>
            <p className="section-description">
                UI/UX design work crafted in Figma — from wireframes to polished interfaces
            </p>
        </div>

        <div className="figma-grid">
            {designs.map((d, i) => (
                <motion.div
                    key={i}
                    className="figma-card"
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                >
                    <div className="figma-preview-wrapper">
                        <img src={d.preview} alt={d.title} className="figma-preview-img" />
                        <div className="figma-overlay">
                            <a
                                href={d.figmaLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="figma-link-btn"
                            >
                                <SiFigma size={16} /> View in Figma
                            </a>
                        </div>
                    </div>
                    <div className="figma-card-body">
                        <h3 className="figma-card-title">{d.title}</h3>
                        <p className="figma-card-desc">{d.description}</p>
                        <a
                            href={d.figmaLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="figma-external-link"
                        >
                            <FaExternalLinkAlt size={12} /> Open Design
                        </a>
                    </div>
                </motion.div>
            ))}
        </div>
    </motion.section>
);

export default Figma;
