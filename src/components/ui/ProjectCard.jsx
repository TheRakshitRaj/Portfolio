import React from 'react';
import GlassCard from './GlassCard';
import Button from './Button';
import './ProjectCard.css';

const ProjectCard = ({ title, description, techStack = [], githubLink, liveLink, image }) => {
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
                    <Button variant="outline" href={githubLink} className="text-sm py-2">
                        GitHub →
                    </Button>
                )}
                {liveLink && (
                    <Button variant="primary" href={liveLink} className="text-sm py-2">
                        Live Demo →
                    </Button>
                )}
            </div>
        </GlassCard>
    );
};

export default ProjectCard;
