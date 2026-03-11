import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero section" id="home">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h4
                        className="hero-greeting"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Hi there, I am
                    </motion.h4>
                    <motion.h1
                        className="hero-name"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        John <span className="gradient-text">Doe.</span>
                    </motion.h1>
                    <motion.h2
                        className="hero-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        Full Stack Developer.
                    </motion.h2>
                    <motion.p
                        className="hero-desc"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        I build interactive, modern, and accessible web experiences.
                        Designing the web of tomorrow with cutting-edge technologies.
                    </motion.p>

                    <motion.div
                        className="hero-btns"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                    >
                        <a href="#projects" className="btn btn-primary">
                            View Work
                        </a>
                        <a href="/resume.pdf" className="btn btn-outline" download>
                            Resume <FiDownload />
                        </a>
                    </motion.div>

                    <motion.div
                        className="hero-socials"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        <a href="https://github.com" target="_blank" rel="noreferrer"><FiGithub /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FiLinkedin /></a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-visuals"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <div className="hero-shape shape-1"></div>
                    <div className="hero-shape shape-2"></div>
                    <div className="hero-image-wrapper glass">
                        <img src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop" alt="Developer" className="hero-image" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
