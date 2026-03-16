import React from 'react';
import GlassCard from './GlassCard';
import './SkillCard.css';

const SkillCard = ({ category, skills = [] }) => {
    return (
        <GlassCard hover={true}>
            <h3 className="skill-card-title">
                {category}
            </h3>

            <div className="skill-grid">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="skill-item"
                        style={{
                            animation: `fadeIn 0.6s ease-out ${index * 0.1}s forwards`,
                            opacity: 0
                        }}
                    >
                        <span className="skill-icon">{skill.icon || '⚡'}</span>
                        <span className="skill-name">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
        </GlassCard>
    );
};

export default SkillCard;
