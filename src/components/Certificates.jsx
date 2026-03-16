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
            title: 'ElectroSphere 2K26',
            issuer: 'Swaminarayan University',
            date: 'Jan 2026',
            image: "https://res.cloudinary.com/dphtrtpjx/image/upload/v1770272796/ElectroSpehere-Certificate_snhsp2.png",
            description: 'Comprehensive course covering React Hooks, Redux, Context API, and Next.js.'
        },
        {
            title: 'AWS Certified Developer',
            issuer: 'AWS',
            date: 'Dec 2023',
            image: null,
            description: 'Validated expertise in developing, deploying, and debugging cloud-based applications using AWS.'
        },
        {
            title: 'Full Stack Web Dev',
            issuer: 'Coursera',
            date: 'Nov 2023',
            image: null,
            description: 'Mastery of full-stack technologies including Node.js, Express, and SQL/NoSQL databases.'
        },
        {
            title: 'JS Algorithms',
            issuer: 'freeCodeCamp',
            date: 'Oct 2023',
            image: null,
            description: 'In-depth problem solving with JavaScript, data structures, and algorithmic thinking.'
        },
        {
            title: 'UI/UX Design',
            issuer: 'Google',
            date: 'Sep 2023',
            image: null,
            description: 'Learned the foundations of user experience design, including wireframing and prototyping.'
        },
        {
            title: 'Node.js Services',
            issuer: 'OpenJS',
            date: 'Aug 2023',
            image: null,
            description: 'Building scalable network applications and RESTful APIs using Node.js.'
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
