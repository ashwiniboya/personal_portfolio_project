import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
    const [skills, setSkills] = useState([]);

    // Dummy data if API is not running
    const fallbackSkills = [
        { category: 'Frontend', name: 'React', level: 90 },
        { category: 'Frontend', name: 'HTML & CSS', level: 95 },
        { category: 'Frontend', name: 'JavaScript', level: 85 },
        { category: 'Backend', name: 'Node.js', level: 80 },
        { category: 'Backend', name: 'Express', level: 75 },
        { category: 'Databases', name: 'MongoDB', level: 85 },
        { category: 'Tools', name: 'Git & GitHub', level: 90 },
        { category: 'Tools', name: 'VS Code', level: 95 }
    ];

    useEffect(() => {
        fetch('http://localhost:5000/api/skills')
            .then(res => res.json())
            .then(data => {
                if (data && data.length > 0) {
                    setSkills(data);
                } else {
                    setSkills(fallbackSkills);
                }
            })
            .catch((err) => {
                console.error("API Error, using fallback data", err);
                setSkills(fallbackSkills);
            });
    }, []);

    const categories = [...new Set(skills.map(skill => skill.category))];

    return (
        <section className="skills section" id="skills">
            <div className="container">
                <motion.h2
                    className="section-title gradient-text"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    My Skills
                </motion.h2>

                <div className="skills-grid">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category}
                            className="skill-category glass"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h3>{category}</h3>
                            <div className="skill-list">
                                {skills.filter(s => s.category === category).map((skill) => (
                                    <div className="skill-item" key={skill.name}>
                                        <div className="skill-info">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-percent">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <motion.div
                                                className="skill-progress"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.3 }}
                                            ></motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
