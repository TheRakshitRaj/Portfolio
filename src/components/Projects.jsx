import React, { useState } from 'react';
import ProjectCard from './ui/ProjectCard';
import './Projects.css';
import './About.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaYoutube, FaGamepad, FaCopy, FaLayerGroup, FaDesktop, FaThLarge } from 'react-icons/fa';

/* ── Project data with categories ─────────────────────────────────────── */
const ALL_PROJECTS = [
    {
        id: 0,
        category: 'clones',
        title: 'Porsche Website Clone',
        description: 'A pixel-perfect clone of the Porsche website featuring immersive animations, 3D car showcase, and premium design.',
        techStack: ['React', 'GSAP', 'CSS3', 'HTML5'],
        githubLink: 'https://github.com/TheRakshitRaj/Porsche-clone',
        liveLink: 'https://symphonious-croissant-ee6dd4.netlify.app/',
        youtubeLink: 'https://youtu.be/JHDEyyfzUTk?si=EAihsD2GG1OKk2HG',
        image: 'https://res.cloudinary.com/dphtrtpjx/image/upload/v1770114279/Screenshot_2026-02-03_154955_fg1sqo.png',
    },
    {
        id: 1,
        category: 'clones',
        title: 'Blix Task Manager Clone',
        description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
        techStack: ['React', 'Firebase', 'MUI', 'Redux'],
        githubLink: 'https://github.com/TheRakshitRaj/Blix_clone',
        liveLink: 'https://blix-clone.netlify.app/',
        youtubeLink: 'https://youtu.be/JHDEyyfzUTk?si=EAihsD2GG1OKk2HG',
        image: 'https://res.cloudinary.com/dphtrtpjx/image/upload/v1770114269/Screenshot_2026-02-03_155233_p4mons.png',
    },
    {
        id: 2,
        category: 'clones',
        title: 'NZXT Gaming Website Clone',
        description: 'A fully responsive clone of the NZXT gaming hardware website with product pages, filtering, and smooth UX.',
        techStack: ['React', 'REST API', 'Chart.js', 'CSS3'],
        githubLink: 'https://github.com/TheRakshitRaj/NZXT_Clone',
        liveLink: 'https://nzxt-clone-rr.netlify.app/',
        youtubeLink: 'https://youtu.be/JHDEyyfzUTk?si=EAihsD2GG1OKk2HG',
        image: 'https://res.cloudinary.com/dphtrtpjx/image/upload/v1770114269/Screenshot_2026-02-03_155159_x7ixos.png',
    },
    {
        id: 3,
        category: 'fullstack',
        title: 'AcuityMD SaaS Platform',
        description: 'A full-stack SaaS platform clone with authentication, dashboard analytics, and real-time data management.',
        techStack: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind'],
        githubLink: 'https://github.com/TheRakshitRaj/AcuityMD',
        liveLink: 'https://acuitymd.netlify.app/',
        youtubeLink: 'https://youtu.be/JHDEyyfzUTk?si=EAihsD2GG1OKk2HG',
        postmanLink: '',
        image: 'https://res.cloudinary.com/dphtrtpjx/image/upload/v1770114269/Screenshot_2026-02-03_155103_gfgvxu.png',
    },
    {
        id: 4,
        category: 'fullstack',
        title: 'CoreInventory',
        description: 'A full-stack inventory management system with role-based access, stock tracking, and analytics dashboard.',
        techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
        githubLink: 'https://github.com/TheRakshitRaj',
        liveLink: '#',
        youtubeLink: 'https://youtu.be/JHDEyyfzUTk?si=EAihsD2GG1OKk2HG',
        postmanLink: '',
        image: 'https://res.cloudinary.com/dphtrtpjx/image/upload/v1770114269/Screenshot_2026-02-03_155103_gfgvxu.png',
    },
    {
        id: 5,
        category: 'frontend',
        title: 'Developer Portfolio v1',
        description: 'My first portfolio built with React and Framer Motion — clean, minimal, dark-mode first.',
        techStack: ['React', 'Framer Motion', 'CSS Modules'],
        githubLink: 'https://github.com/TheRakshitRaj',
        liveLink: '#',
        youtubeLink: 'https://youtu.be/JHDEyyfzUTk?si=EAihsD2GG1OKk2HG',
        image: 'https://res.cloudinary.com/dphtrtpjx/image/upload/v1770114279/Screenshot_2026-02-03_154955_fg1sqo.png',
    },
    {
        id: 6,
        category: 'games',
        title: '2D Platformer Game',
        description: 'A browser-based 2D platformer game built with vanilla JS and HTML5 Canvas — collectibles, enemies, and levels.',
        techStack: ['JavaScript', 'HTML5 Canvas', 'CSS3'],
        githubLink: 'https://github.com/TheRakshitRaj',
        liveLink: '#',
        youtubeLink: 'https://youtu.be/JHDEyyfzUTk?si=EAihsD2GG1OKk2HG',
        image: 'https://res.cloudinary.com/dphtrtpjx/image/upload/v1770114269/Screenshot_2026-02-03_155233_p4mons.png',
    },
];

const TABS = [
    { key: 'all',      label: 'All',        icon: <FaThLarge /> },
    { key: 'games',    label: 'Games',      icon: <FaGamepad /> },
    { key: 'clones',   label: 'Clones',     icon: <FaCopy /> },
    { key: 'fullstack',label: 'Full Stack', icon: <FaLayerGroup /> },
    { key: 'frontend', label: 'Frontend',   icon: <FaDesktop /> },
];

const Projects = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [activeId, setActiveId] = useState(0);

    const filtered = activeTab === 'all'
        ? ALL_PROJECTS
        : ALL_PROJECTS.filter((p) => p.category === activeTab);

    // Reset activeId when tab changes
    const handleTabChange = (key) => {
        setActiveTab(key);
        setActiveId(ALL_PROJECTS.findIndex((p) => key === 'all' || p.category === key));
    };

    const activeProject = ALL_PROJECTS.find((p) => p.id === activeId) || filtered[0];

    return (
        <section id="projects" className="projects-section-cinematic">
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                style={{ marginBottom: '2rem' }}
            >
                <h2 className="section-title">
                    Featured <span className="apple-gradient-text">Projects</span>
                </h2>
                <p className="section-description">A showcase of my recent work and personal projects</p>
            </motion.div>

            {/* ── Category Tabs ── */}
            <div className="projects-tabs">
                {TABS.map((tab) => (
                    <button
                        key={tab.key}
                        className={`projects-tab-btn ${activeTab === tab.key ? 'active' : ''}`}
                        onClick={() => handleTabChange(tab.key)}
                    >
                        {tab.icon} {tab.label}
                    </button>
                ))}
            </div>

            {/* ── Desktop Cinematic View ── */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    className="cinematic-container hidden-mobile"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="project-list-wrapper">
                        <div className="project-list">
                            {filtered.map((project) => (
                                <div
                                    key={project.id}
                                    className={`project-list-item ${activeProject?.id === project.id ? 'active' : ''}`}
                                    onMouseEnter={() => setActiveId(project.id)}
                                    onClick={() => setActiveId(project.id)}
                                >
                                    <span className="project-list-num">0{filtered.indexOf(project) + 1}</span>
                                    <div className="project-list-info">
                                        <h3 className="project-list-title">{project.title}</h3>
                                        <div className="project-list-tech">{project.techStack.slice(0, 3).join(' • ')}</div>
                                    </div>
                                    <div className={`project-list-indicator ${activeProject?.id === project.id ? 'active' : ''}`} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="project-preview-stage">
                        <AnimatePresence mode="wait">
                            {activeProject && (
                                <motion.div
                                    key={activeProject.id}
                                    className="preview-card"
                                    initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div className="preview-image-wrapper">
                                        <img src={activeProject.image} alt={activeProject.title} />
                                        <div className="preview-overlay" />
                                    </div>
                                    <div className="preview-content">
                                        <h3>{activeProject.title}</h3>
                                        <p>{activeProject.description}</p>
                                        <div className="preview-tech-badges">
                                            {activeProject.techStack.map((t) => (
                                                <span key={t} className="tech-badge">{t}</span>
                                            ))}
                                        </div>
                                        <div className="preview-actions">
                                            {activeProject.githubLink && (
                                                <a href={activeProject.githubLink} target="_blank" rel="noopener noreferrer" className="preview-btn">
                                                    <FaGithub /> <span>Source</span>
                                                </a>
                                            )}
                                            {activeProject.liveLink && activeProject.liveLink !== '#' && (
                                                <a href={activeProject.liveLink} target="_blank" rel="noopener noreferrer" className="preview-btn primary">
                                                    <FaExternalLinkAlt /> <span>Live Demo</span>
                                                </a>
                                            )}
                                            {activeProject.youtubeLink && (
                                                <a href={activeProject.youtubeLink} target="_blank" rel="noopener noreferrer" className="preview-btn youtube">
                                                    <FaYoutube /> <span>Video</span>
                                                </a>
                                            )}
                                            {activeProject.postmanLink && (
                                                <a href={activeProject.postmanLink} target="_blank" rel="noopener noreferrer" className="preview-btn">
                                                    📄 <span>API Docs</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* ── Mobile Fallback ── */}
            <div className="projects-grid visible-mobile">
                {filtered.map((project, index) => (
                    <div key={index} className="project-item-wrapper">
                        <ProjectCard {...project} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
