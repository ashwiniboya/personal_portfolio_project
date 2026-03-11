import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ['About', 'Skills', 'Projects', 'Education', 'Contact'];

    return (
        <header className={`navbar ${scrolled ? 'nav-scrolled glass' : ''}`}>
            <div className="nav-container container">
                <a href="#" className="nav-logo gradient-text">John.Dev</a>

                <div className="nav-links desktop">
                    {navLinks.map((link) => (
                        <a key={link} href={`#${link.toLowerCase()}`} className="nav-link">
                            {link}
                        </a>
                    ))}
                    <button onClick={toggleTheme} className="theme-toggle">
                        {theme === 'dark' ? <FiSun /> : <FiMoon />}
                    </button>
                </div>

                <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </div>
            </div>

            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mobile-menu glass"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="mobile-link"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link}
                        </a>
                    ))}
                    <button onClick={toggleTheme} className="theme-toggle mt">
                        {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />} Theme
                    </button>
                </motion.div>
            )}
        </header>
    );
};

export default Navbar;
