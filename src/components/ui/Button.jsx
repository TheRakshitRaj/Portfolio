import React from 'react';
import './Button.css';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', icon = null, href = null, onClick = null, className = '' }) => {
    const variantClass = `btn-${variant}`;
    const combinedClasses = `btn ${variantClass} ${className}`;

    const buttonVariants = {
        hover: {
            scale: 1.05,
            transition: { type: "spring", stiffness: 400, damping: 10 }
        },
        tap: { scale: 0.95 }
    };

    if (href) {
        return (
            <motion.a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={combinedClasses}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
            >
                {icon && <span className="btn-icon">{icon}</span>}
                {children}
            </motion.a>
        );
    }

    return (
        <motion.button
            onClick={onClick}
            className={combinedClasses}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
        >
            {icon && <span className="btn-icon">{icon}</span>}
            {children}
        </motion.button>
    );
};

export default Button;
