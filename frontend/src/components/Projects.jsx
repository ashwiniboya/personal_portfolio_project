import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState('All');

    const fallbackProjects = [
        {
            _id: '1',
            title: 'Awwwards E-Commerce Site',
            description: 'A full-stack, highly interactive e-commerce platform built with modern web technologies. Focuses on cinematic animations and immersive user experience.',
            techStack: ['React', 'Node.js', 'MongoDB', 'Framer Motion'],
            githubLink: 'https://github.com/example/ecommerce',
            liveDemo: 'https://example.com/ecommerce',
            imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop'
        },
        {
            _id: '2',
            title: 'Finance Dashboard',
            description: 'Real-time financial dashboard with data visualization, analytics, and a state-of-the-art dark mode UI for modern businesses.',
            techStack: ['React', 'Express', 'Chart.js'],
            githubLink: 'https://github.com/example/finance',
            liveDemo: 'https://example.com/finance',
            imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
        },
        {
            _id: '3',
            title: 'AI Companion App',
            description: 'An AI-powered creative companion that assists in brainstorming and design with seamless animations and real-time generation.',
            techStack: ['React', 'Python', 'OpenAI'],
            githubLink: 'https://github.com/example/ai-app',
            liveDemo: 'https://example.com/ai-app',
            imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop'
        }
    ];

    useEffect(() => {
        fetch('http://localhost:5000/api/projects')
            .then(res => res.json())
            .then(data => {
                if (data && data.length > 0) {
                    setProjects(data);
                } else {
                    setProjects(fallbackProjects);
                }
            })
            .catch((err) => {
                console.error("API error, using fallback data", err);
                setProjects(fallbackProjects);
            });
    }, []);

    const filters = ['All', 'React', 'Node.js', 'Python'];

    const filteredProjects = projects.filter(project => {
        if (filter === 'All') return true;
        return project.techStack.includes(filter);
    });

    return (
        <section className="projects section" id="projects">
            <div className="container">
                <motion.h2
                    className="section-title gradient-text"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Selected Works
                </motion.h2>

                <div className="filter-container">
                    {filters.map(f => (
                        <button
                            key={f}
                            className={`filter-btn ${filter === f ? 'active' : ''}`}
                            onClick={() => setFilter(f)}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                <motion.div layout className="projects-grid">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project._id}
                                className="project-card glass"
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="project-image">
                                    <img src={project.imageUrl} alt={project.title} />
                                    <div className="project-overlay">
                                        <a href={project.githubLink} target="_blank" rel="noreferrer" className="icon-link"><FiGithub /></a>
                                        <a href={project.liveDemo} target="_blank" rel="noreferrer" className="icon-link"><FiExternalLink /></a>
                                    </div>
                                </div>
                                <div className="project-info">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="tech-stack">
                                        {project.techStack.map(tech => (
                                            <span key={tech} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
