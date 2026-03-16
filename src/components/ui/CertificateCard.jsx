import React from 'react';
import GlassCard from './GlassCard';
import './CertificateCard.css';
import { motion } from 'framer-motion';

const CertificateCard = ({ title, issuer, date, image, description }) => {
    return (
        <GlassCard hover={false} className="certificate-glass-card">
            <div className="certificate-wrapper-new">
                {/* Image Section - Main Focus */}
                <div className="certificate-image-container">
                    {image ? (
                        <img src={image} alt={title} className="certificate-img" />
                    ) : (
                        <div className="certificate-placeholder">
                            <span>Image Unavailable</span>
                        </div>
                    )}
                    <div className="certificate-overlay">
                        <button className="view-btn">View Credential</button>
                    </div>
                </div>

                {/* Content Section */}
                <div className="certificate-content-new">
                    <div className="cert-header">
                        <h3 className="certificate-title-new">{title}</h3>
                        <span className="certificate-date-badge">{date}</span>
                    </div>
                    <p className="certificate-issuer-new">Issued by {issuer}</p>
                    {description && (
                        <p className="certificate-description">{description}</p>
                    )}
                </div>
            </div>
        </GlassCard>
    );
};

export default CertificateCard;
