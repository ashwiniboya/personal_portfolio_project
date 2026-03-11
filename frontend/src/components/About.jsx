import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <section className="about section" id="about">
            <div className="container">
                <motion.h2
                    className="section-title gradient-text"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    About Me
                </motion.h2>

                <div className="about-content glass">
                    <motion.div
                        className="about-image"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" alt="Workspace" />
                    </motion.div>

                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3>My Career Goals</h3>
                        <p>
                            I am a passionate Full Stack Developer focused on creating intuitive,
                            scalable, and visually stunning web applications. With a strong foundation in
                            frontend aesthetics and backend architecture, my goal is to bridge the gap
                            between design and engineering.
                        </p>
                        <p>
                            I thrive in environments where I can learn emerging technologies like WebGL,
                            Framer Motion, and AI integrations, pushing the boundaries of what is possible
                            in the browser. I aspire to be a Lead Engineer driving innovation in a dynamic team.
                        </p>

                        <div className="about-stats">
                            <div className="stat">
                                <span className="stat-number gradient-text">4+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number gradient-text">30+</span>
                                <span className="stat-label">Projects Completed</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number gradient-text">10+</span>
                                <span className="stat-label">Awards Won</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
