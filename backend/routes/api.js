import express from 'express';
import Project from '../models/Project.js';
import Skill from '../models/Skill.js';
import Message from '../models/Message.js';

const router = express.Router();

// GET all projects
router.get('/projects', async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET all skills
router.get('/skills', async (req, res) => {
    try {
        const skills = await Skill.find();
        res.json(skills);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST a contact message
router.post('/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ message: 'All fields are required.' });
        }
        const newMessage = new Message({ name, email, message });
        await newMessage.save();
        res.status(201).json({ message: 'Message sent successfully!' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// SEED DB route (for testing/demo)
router.post('/seed', async (req, res) => {
    try {
        await Project.deleteMany({});
        await Skill.deleteMany({});

        await Project.insertMany([
            {
                title: 'Awwwards E-Commerce Site',
                description: 'A full-stack, highly interactive e-commerce platform built with modern web technologies.',
                techStack: ['React', 'Node.js', 'MongoDB', 'Framer Motion'],
                githubLink: 'https://github.com/example/ecommerce',
                liveDemo: 'https://example.com/ecommerce',
                imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop'
            },
            {
                title: 'Finance Dashboard',
                description: 'Real-time financial dashboard with data visualization and dark mode UI.',
                techStack: ['React', 'Chart.js', 'Express', 'CSS Modules'],
                githubLink: 'https://github.com/example/finance',
                liveDemo: 'https://example.com/finance',
                imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
            }
        ]);

        await Skill.insertMany([
            { category: 'Frontend', name: 'React', level: 90 },
            { category: 'Frontend', name: 'CSS/HTML', level: 95 },
            { category: 'Backend', name: 'Node.js', level: 85 },
            { category: 'Databases', name: 'MongoDB', level: 80 }
        ]);
        res.status(200).json({ message: 'Database seeded for demo purposes.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
