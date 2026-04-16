import React, { useState, useRef } from 'react';
import GlassCard from './ui/GlassCard';
import Button from './ui/Button';
import './Contact.css';
import './About.css'; // Reusing section styles
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [formStatus, setFormStatus] = useState('');
    const formRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setFormStatus('error:Please fill in all fields');
            return;
        }

        setFormStatus('Sending...');

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

        emailjs.send(
            serviceId,
            templateId,
            {
                from_name: formData.name,
                to_name: 'Rakshit',
                from_email: formData.email,
                subject: formData.subject,
                to_email: 'rakshit.raj.cg@gmail.com',
                message: formData.message,
            },
            publicKey
        )
        .then(() => {
            setFormStatus('success:Message sent successfully!');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setFormStatus(''), 3000);
        })
        .catch((error) => {
            console.error('EmailJS Error:', error);
            setFormStatus('error:Failed to send message. Please try again.');
        });
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <motion.section
            id="contact"
            className="section-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <motion.div className="section-header" variants={itemVariants}>
                <h2 className="section-title">
                    Get In <span className="apple-gradient-text">Touch</span>
                </h2>
                <p className="section-description">
                    Have a project in mind or just want to chat?
                </p>
            </motion.div>

            <motion.div variants={itemVariants}>
                <GlassCard className="contact-form-container">
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <motion.div className="form-group" variants={itemVariants}>
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="Your name"
                            />
                        </motion.div>

                        <motion.div className="form-group" variants={itemVariants}>
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="name@example.com"
                            />
                        </motion.div>

                        <motion.div className="form-group" variants={itemVariants}>
                            <label htmlFor="subject" className="form-label">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="What's this about?"
                            />
                        </motion.div>

                        <motion.div className="form-group" variants={itemVariants}>
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="form-textarea"
                                placeholder="Your message..."
                            />
                        </motion.div>

                        <motion.div className="form-submit-wrapper" variants={itemVariants}>
                            <Button variant="primary" onClick={handleSubmit}>
                                Send Message
                            </Button>
                        </motion.div>

                        {formStatus && (
                            <motion.p
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className={`form-status ${formStatus.startsWith('success') ? 'status-success' : 'status-error'}`}
                            >
                                {formStatus.split(':')[1]}
                            </motion.p>
                        )}
                    </form>

                    <motion.div className="contact-direct" variants={itemVariants}>
                        <p className="form-label" style={{ marginBottom: 8 }}>Or email directly:</p>
                        <a href="mailto:rakshit.raj.cg@gmail.com" className="contact-email-link">
                            rakshit.raj.cg@gmail.com
                        </a>
                    </motion.div>
                </GlassCard>
            </motion.div>
        </motion.section>
    );
};

export default Contact;
