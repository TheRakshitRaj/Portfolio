import React from 'react';
import { motion } from 'framer-motion';
import { SiLeetcode, SiGithub } from 'react-icons/si';
import { FaTrophy, FaCode, FaStar, FaAward } from 'react-icons/fa';
import './Achievements.css';

const achievements = [
    {
        icon: <SiLeetcode size={32} />,
        title: 'LeetCode',
        value: '100+',
        label: 'Problems Solved',
        color: '#FFA116',
        link: 'https://leetcode.com/u/The_RakshitRaj/',
    },
    {
        icon: <SiGithub size={32} />,
        title: 'GitHub',
        value: '20+',
        label: 'Repositories',
        color: '#ffffff',
        link: 'https://github.com/TheRakshitRaj',
    },
    {
        icon: <FaTrophy size={32} />,
        title: 'Hackathons',
        value: '5+',
        label: 'Participated',
        color: '#FFD700',
        link: '#hackathons',
    },
    {
        icon: <FaCode size={32} />,
        title: 'Projects',
        value: '15+',
        label: 'Built & Deployed',
        color: '#00bfff',
        link: '#projects',
    },
    {
        icon: <FaStar size={32} />,
        title: 'Open Source',
        value: '3+',
        label: 'Contributions',
        color: '#a78bfa',
        link: 'https://github.com/TheRakshitRaj',
    },
    {
        icon: <FaAward size={32} />,
        title: 'Certifications',
        value: '10+',
        label: 'Earned',
        color: '#34d399',
        link: '#certificates',
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
    }),
};

const Achievements = () => (
    <motion.section
        id="achievements"
        className="achievements-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
    >
        <div className="section-header">
            <h2 className="section-title">
                My <span className="apple-gradient-text">Achievements</span>
            </h2>
            <p className="section-description">
                Milestones, rankings, and recognitions along the journey
            </p>
        </div>

        <div className="achievements-grid">
            {achievements.map((item, i) => (
                <motion.a
                    key={i}
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="achievement-card"
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ y: -6, scale: 1.03 }}
                    style={{ '--accent': item.color }}
                >
                    <div className="achievement-icon" style={{ color: item.color }}>
                        {item.icon}
                    </div>
                    <div className="achievement-value">{item.value}</div>
                    <div className="achievement-label">{item.label}</div>
                    <div className="achievement-title">{item.title}</div>
                </motion.a>
            ))}
        </div>
    </motion.section>
);

export default Achievements;
