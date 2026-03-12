import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-left">
                    <h2 className="footer-logo gradient-text">Ashwini.Dev</h2>
                    <p className="footer-copyright">
                        &copy; {new Date().getFullYear()} AshwiniBoya. All rights reserved.
                    </p>
                </div>

                <div className="footer-socials">
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="social-link">
                        <FiGithub />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link">
                        <FiLinkedin />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-link">
                        <FiTwitter />
                    </a>
                </div>
            </div>
            <div className="footer-bottom-glow"></div>
        </footer>
    );
};

export default Footer;
