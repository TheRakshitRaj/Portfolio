import React from 'react';
import BentoItem from './ui/BentoItem';
import './Skills.css';
import './About.css';
import { motion } from 'framer-motion';

import {
    SiReact, SiJavascript, SiTypescript, SiTailwindcss, SiHtml5, SiCss3,
    SiNodedotjs, SiExpress, SiPython, SiMongodb, SiPostgresql,
    SiGit, SiDocker, SiFigma, SiFirebase, SiNextdotjs, SiGraphql, SiRedux
} from 'react-icons/si';

import { FaAws, FaJava } from 'react-icons/fa';

const Skills = () => {
    // Define skills with colors and sizes for the bento grid
    const skills = [
        { title: 'React', icon: <SiReact />, color: '#61DAFB', size: 'wide', category: 'Frontend' },
        { title: 'Node.js', icon: <SiNodedotjs />, color: '#339933', size: 'md', category: 'Backend' },
        { title: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E', size: 'sm', category: 'Language' },
        { title: 'TypeScript', icon: <SiTypescript />, color: '#3178C6', size: 'sm', category: 'Language' },
        { title: 'MongoDB', icon: <SiMongodb />, color: '#47A248', size: 'tall', category: 'Database' },
        { title: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff', size: 'wide', category: 'Frontend' },
        { title: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4', size: 'sm', category: 'Frontend' },
        { title: 'AWS', icon: <FaAws />, color: '#FF9900', size: 'md', category: 'Cloud' },
        { title: 'Git', icon: <SiGit />, color: '#F05032', size: 'sm', category: 'Tool' },
        { title: 'Docker', icon: <SiDocker />, color: '#2496ED', size: 'sm', category: 'Tool' },
        { title: 'Python', icon: <SiPython />, color: '#3776AB', size: 'md', category: 'Language' },
        { title: 'Figma', icon: <SiFigma />, color: '#F24E1E', size: 'sm', category: 'Design' },
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

            <div className="bento-grid-container">
                {skills.map((skill, index) => (
                    <BentoItem
                        key={index}
                        {...skill}
                        delay={index}
                    />
                ))}
            </div>

            <div className="skills-bg-glow" />
        </section>
    );
};

export default Skills;
