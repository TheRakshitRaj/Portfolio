import React, { useRef, useEffect, useState } from 'react';
import CertificateCard from './ui/CertificateCard';
import './Certificates.css';
import './About.css';
import { motion } from 'framer-motion';

const Certificates = () => {
    const [width, setWidth] = useState(0);
    const carouselRef = useRef();

    useEffect(() => {
        if (carouselRef.current) {
            setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }
    }, [carouselRef]);

    const certificates = [
        {
            title: 'Doppleganger',
            issuer: 'Online Hackathon',
            date: '2026',
            image: "https://res.cloudinary.com/dphtrtpjx/image/upload/v1775907289/Screenshot_2026-04-11_170410_aw9bvq.png",
            description: 'Developed an innovative AI-powered solution for accessibility.'
        },
        {
            title: 'Oddo x Indus Hackathon',
            issuer: 'Indus University',
            date: '2026',
            image: "https://res.cloudinary.com/dphtrtpjx/image/upload/v1775906108/odoo_x_indus_certificate_fhrthk.jpg",
            description: 'Built an Inventory Management System in a 48-hour sprint.'
        },
        {
            title: 'ElectroSphere 2K26',
            issuer: 'Swaminarayan University',
            date: 'Jan 2026',
            image: "https://res.cloudinary.com/dphtrtpjx/image/upload/v1770272796/ElectroSpehere-Certificate_snhsp2.png",
            description: '1st Prize Winner. Developed AI-based object detection software.'
        },
        {
            title: 'DevHeat IIIT Surat',
            issuer: 'IIIT Surat',
            date: '2026',
            image: "https://res.cloudinary.com/dphtrtpjx/image/upload/v1775906134/DevHeat_xgsgxo.jpg",
            description: 'Collaborated to build an innovative project under competitive conditions.'
        },
        {
            title: 'C Programming Course – SoloLearn',
            issuer: 'SoloLearn',
            date: 'Dec 2023',
            image: "https://res.cloudinary.com/dphtrtpjx/image/upload/v1775910188/4b022cce-36d1-44e8-a83f-b6aa986fb433_mn4gzg.png",
            description: 'Successfully completed a C programming course on SoloLearn, gaining a strong understanding of core concepts such as variables, data types, control structures, functions, and basic problem-solving.'
        }
    ];

    return (
        <section id="certificates" className="certificates-section">
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="section-title">
                    Certificates & <span className="apple-gradient-text">Awards</span>
                </h2>
                <p className="section-description">
                    Continuous learning and professional development
                </p>
            </motion.div>

            <motion.div
                className="certificates-carousel-container"
                ref={carouselRef}
                whileTap={{ cursor: "grabbing" }}
            >
                <motion.div
                    className="certificates-carousel-inner"
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                >
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            className="certificate-card-wrapper"
                        >
                            <CertificateCard {...cert} />
                        </motion.div>
                    ))}
                </motion.div>
                <div className="carousel-hint">
                    <span>Drag to explore</span>
                </div>
            </motion.div>
        </section>
    );
};

export default Certificates;
