import React from 'react';
import GlassCard from './GlassCard';
import Button from './Button';
import { FaGithub, FaExternalLinkAlt, FaYoutube } from 'react-icons/fa';
import './ProjectCard.css';

const ProjectCard = ({ title, description, techStack = [], githubLink, liveLink, youtubeLink, image }) => {
    return (
        <GlassCard hover={true} className="project-card-container">
            {/* Project Image */}
            {image && (
                <div className="project-image-wrapper">
                    <img
                        src={image}
                        alt={title}
                        className="project-image"
                    />
                    <div className="project-overlay"></div>
                </div>
            )}

            {/* Project Title */}
            <h3 className="project-title">
                {title}
            </h3>

            {/* Project Description */}
            <p className="project-description">
                {description}
            </p>

            {/* Tech Stack */}
            <div className="project-tech-stack">
                {techStack.map((tech, index) => (
                    <span
                        key={index}
                        className="tech-badge"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Links */}
            <div className="project-links">
                {githubLink && (
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="h-link h-github" title="GitHub Repo">
                        <FaGithub />
                        <span>GitHub</span>
                    </a>
                )}
                {liveLink && liveLink !== '#' && (
                    <a href={liveLink} target="_blank" rel="noopener noreferrer" className="h-link h-deploy" title="Live Deploy">
                        <FaExternalLinkAlt />
                        <span>Deploy</span>
                    </a>
                )}
                {youtubeLink && (
                    <a href={youtubeLink} target="_blank" rel="noopener noreferrer" className="h-link h-youtube" title="YouTube Video">
                        <FaYoutube />
                        <span>Video</span>
                    </a>
                )}
            </div>
        </GlassCard>
    );
};

export default ProjectCard;
