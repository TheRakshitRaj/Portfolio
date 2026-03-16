import React from 'react';
import GlassCard from './ui/GlassCard';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.section
            id="about"
            className="section-container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="section-header">
                <h2 className="section-title">
                    About <span className="apple-gradient-text">Me</span>
                </h2>
                <p className="section-description">
                    Get to know more about who I am and what I do
                </p>
            </div>

            <GlassCard className="about-content">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
                >
                    <motion.p className="about-text" variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} initial="hidden" whileInView="visible">
                        Hello! I'm a passionate <span className="highlight">Full-Stack Developer</span> with
                        a love for creating beautiful and functional web experiences. With expertise in modern web technologies,
                        I specialize in building responsive, user-centric applications that solve real-world problems.
                    </motion.p>

                    <motion.p className="about-text" variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} initial="hidden" whileInView="visible">
                        My journey in web development started several years ago, and since then, I've worked on numerous projects
                        ranging from small business websites to large-scale enterprise applications. I'm constantly learning and
                        staying up-to-date with the latest trends and best practices in the industry.
                    </motion.p>

                    <motion.p className="about-text" variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} initial="hidden" whileInView="visible">
                        When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                        or sharing my knowledge through blog posts and tutorials. I believe in writing clean, maintainable code
                        and creating <span className="highlight">delightful user experiences</span> that
                        make a difference.
                    </motion.p>

                    <motion.p className="about-text" style={{ marginBottom: 0 }} variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} initial="hidden" whileInView="visible">
                        I'm currently <span className="highlight">open to new opportunities</span> and
                        collaborations. If you have an exciting project or just want to connect, feel free to reach out!
                    </motion.p>
                </motion.div>
            </GlassCard>
        </motion.section>
    );
};

export default About;
