import React from 'react';
import BentoItem from './ui/BentoItem';
import './Skills.css';
import './About.css';
import { motion } from 'framer-motion';

import {
    SiReact, SiJavascript, SiTypescript, SiTailwindcss,
    SiNodedotjs, SiPython, SiMongodb,
    SiGit, SiDocker, SiFigma, SiNextdotjs, SiSolidity
} from 'react-icons/si';

import { FaAws, FaJava } from 'react-icons/fa';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            skills: [
                { title: 'React', icon: <SiReact />, color: '#61DAFB', size: 'wide' },
                { title: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff', size: 'tall' },
                { title: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4', size: 'sm' },
                { title: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E', size: 'sm' },
                { title: 'TypeScript', icon: <SiTypescript />, color: '#3178C6', size: 'wide' },
            ]
        },
        {
            title: "Backend",
            skills: [
                { title: 'Node.js', icon: <SiNodedotjs />, color: '#339933', size: 'wide' },
                { title: 'MongoDB', icon: <SiMongodb />, color: '#47A248', size: 'tall' },
                { title: 'Python', icon: <SiPython />, color: '#3776AB', size: 'sm' },
                { title: 'Java', icon: <FaJava />, color: '#007396', size: 'sm' },
                { title: 'Solidity', icon: <SiSolidity />, color: '#627EEA', size: 'wide' }, // Ethereum Blue/Purple
            ]
        },
        {
            title: "Tools & DevOps",
            skills: [
                { title: 'AWS', icon: <FaAws />, color: '#FF9900', size: 'wide' },
                { title: 'Git', icon: <SiGit />, color: '#F05032', size: 'tall' },
                { title: 'Docker', icon: <SiDocker />, color: '#2496ED', size: 'tall' },
                { title: 'Figma', icon: <SiFigma />, color: '#F24E1E', size: 'wide' },
            ]
        }
    ];

    return (
        <section id="skills" className="skills-section-bento">
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="section-title">
                    Tech <span className="apple-gradient-text">Arsenel</span>
                </h2>
                <p className="section-description">
                    My command center for building digital experiences
                </p>
            </motion.div>

            <div className="skills-horizontal-container">
                {skillCategories.map((category, catIndex) => (
                    <div key={catIndex} className="skill-category-group">
                        <motion.h3
                            className="category-subtitle"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <span className="category-subtitle-text">{category.title}</span>
                        </motion.h3>
                        <div className="bento-grid-container">
                            {category.skills.map((skill, index) => (
                                <BentoItem
                                    key={index}
                                    {...skill}
                                    delay={index}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="skills-bg-glow" />
        </section>
    );
};

export default Skills;
