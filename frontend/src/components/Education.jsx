import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
    const educationData = [
        {
            year: '2019 - 2023',
            degree: 'B.S. in Computer Science',
            institution: 'Tech University',
            desc: 'Graduated with Honors. Specialized in Software Engineering and Artificial Intelligence.'
        },
        {
            year: '2017 - 2019',
            degree: 'High School Diploma',
            institution: 'Global Science Academy',
            desc: 'Focus on Mathematics and Physics. Valedictorian.'
        }
    ];

    const certifications = [
        { name: 'AWS Certified Developer', issuer: 'Amazon Web Services', date: 'Oct 2023' },
        { name: 'Full-Stack Web Development', issuer: 'Coursera (Meta)', date: 'Jan 2023' },
        { name: 'Advanced React Patterns', issuer: 'Frontend Masters', date: 'Aug 2022' }
    ];

    return (
        <section className="education section" id="education">
            <div className="container" style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>

                {/* Education Timeline */}
                <div style={{ flex: '1 1 500px' }}>
                    <motion.h2
                        className="section-title gradient-text"
                        style={{ textAlign: 'left' }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Education
                    </motion.h2>

                    <div className="timeline">
                        {educationData.map((edu, index) => (
                            <motion.div
                                className="timeline-item"
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <div className="timeline-dot"></div>
                                <div className="timeline-content glass">
                                    <span className="timeline-year gradient-text">{edu.year}</span>
                                    <h3 className="timeline-degree">{edu.degree}</h3>
                                    <h4 className="timeline-institution">{edu.institution}</h4>
                                    <p className="timeline-desc">{edu.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Certifications Cards */}
                <div style={{ flex: '1 1 400px' }}>
                    <motion.h2
                        className="section-title gradient-text"
                        style={{ textAlign: 'left' }}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Certifications
                    </motion.h2>

                    <div className="cert-grid">
                        {certifications.map((cert, index) => (
                            <motion.div
                                className="cert-card glass"
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <div className="cert-info">
                                    <h3 className="cert-name">{cert.name}</h3>
                                    <p className="cert-issuer">{cert.issuer}</p>
                                </div>
                                <div className="cert-date gradient-text">{cert.date}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Education;
