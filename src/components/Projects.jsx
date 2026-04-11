import React, { useState } from 'react';
import ProjectCard from './ui/ProjectCard'; // Fallback / Mobile
import './Projects.css';
import './About.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaYoutube } from 'react-icons/fa';

const Projects = () => {
    const [activeId, setActiveId] = useState(0);

    const projects = [
        {
            id: 0,
            title: 'Porsche Website',
            description: 'A full-stack e-commerce platform with payment integration, user authentication, and admin dashboard. Features include product catalog, shopping cart, and order management.',
            techStack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind'],
            githubLink: 'https://github.com/TheRakshitRaj/Porsche-clone',
            liveLink: 'https://symphonious-croissant-ee6dd4.netlify.app/',
            youtubeLink: 'https://youtube.com', // Placeholder
            image: 'https://res.cloudinary.com/dphtrtpjx/image/upload/v1770114279/Screenshot_2026-02-03_154955_fg1sqo.png'
        },
        {
            id: 1,
            title: 'Task Management App',
            description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features inspired by modern project management tools.',
            techStack: ['React', 'Firebase', 'MUI', 'Redux'],
            githubLink: 'https://github.com/TheRakshitRaj/Blix_clone',
            liveLink: 'https://blix-clone.netlify.app/',
            youtubeLink: '',
            image: 'https://res.cloudinary.com/dphtrtpjx/image/upload/v1770114269/Screenshot_2026-02-03_155233_p4mons.png'
        },
        {
            id: 2,
            title: 'NZXT Gaming Website',
            description: 'A full-stack e-commerce platform with payment integration, user authentication, and admin dashboard. Features include product catalog, shopping cart, and order management.',
            techStack: ['React', 'API', 'Chart.js'],
            githubLink: 'https://github.com/TheRakshitRaj/NZXT_Clone',
            liveLink: 'https://nzxt-clone-rr.netlify.app/',
            youtubeLink: '',
            image: 'https://res.cloudinary.com/dphtrtpjx/image/upload/v1770114269/Screenshot_2026-02-03_155159_x7ixos.png'
        },
        {
            id: 3,
            title: 'SAcuityMD Clone Website',
            description: 'A feature-rich social media platform with posts, comments, likes, user profiles, and real-time notifications. Built with modern web technologies.',
            techStack: ['Next.js', 'PostgreSQL', 'Prisma'],
            githubLink: 'https://github.com/TheRakshitRaj/AcuityMD',
            liveLink: 'https://acuitymd.netlify.app/',
            youtubeLink: '',
            image: 'https://res.cloudinary.com/dphtrtpjx/image/upload/v1770114269/Screenshot_2026-02-03_155103_gfgvxu.png'
        }
    ];

    return (
        <section id="projects" className="projects-section-cinematic">
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                style={{ marginBottom: '3rem' }}
            >
                <h2 className="section-title">
                    Featured <span className="apple-gradient-text">Projects</span>
                </h2>
                <p className="section-description">
                    A showcase of my recent work and personal projects
                </p>
            </motion.div>

            {/* Desktop Cinematic View */}
            <div className="cinematic-container hidden-mobile">
                <div className="project-list">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className={`project-list-item ${activeId === project.id ? 'active' : ''}`}
                            onMouseEnter={() => setActiveId(project.id)}
                            onClick={() => setActiveId(project.id)}
                        >
                            <span className="project-list-num">0{project.id + 1}</span>
                            <div className="project-list-info">
                                <h3 className="project-list-title">{project.title}</h3>
                                <div className="project-list-tech">
                                    {project.techStack.slice(0, 3).join(' • ')}
                                </div>
                            </div>
                            <div className={`project-list-indicator ${activeId === project.id ? 'active' : ''}`} />
                        </div>
                    ))}
                </div>

                <div className="project-preview-stage">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeId}
                            className="preview-card"
                            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="preview-image-wrapper">
                                <img src={projects[activeId].image} alt={projects[activeId].title} />
                                <div className="preview-overlay" />
                            </div>
                            <div className="preview-content">
                                <h3>{projects[activeId].title}</h3>
                                <p>{projects[activeId].description}</p>
                                <div className="preview-actions">
                                    {projects[activeId].githubLink && (
                                        <a href={projects[activeId].githubLink} target="_blank" rel="noopener noreferrer" className="preview-btn">
                                            <FaGithub /> Source
                                        </a>
                                    )}
                                    {projects[activeId].liveLink && (
                                        <a href={projects[activeId].liveLink} target="_blank" rel="noopener noreferrer" className="preview-btn primary">
                                            <FaExternalLinkAlt /> Live Demo
                                        </a>
                                    )}
                                    {projects[activeId].youtubeLink && (
                                        <a href={projects[activeId].youtubeLink} target="_blank" rel="noopener noreferrer" className="preview-btn youtube">
                                            <FaYoutube /> Video
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Mobile Fallback - Standard Grid */}
            <div className="projects-grid visible-mobile">
                {projects.map((project, index) => (
                    <div key={index} className="project-item-wrapper">
                        <ProjectCard {...project} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
