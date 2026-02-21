import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Resources', href: '#how-it-works' },
    ];

    return (
        <motion.nav
            className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
            <div className="navbar__inner container">
                <a href="#" className="navbar__logo">
                    <Logo size={32} />
                    <span className="navbar__logo-text">
                        <span className="navbar__logo-ghost">Ghost</span>
                        <span className="navbar__logo-vector">Vector</span>
                    </span>
                </a>


                <div className="navbar__links">
                    {navLinks.map((link) => (
                        <a key={link.label} href={link.href} className="navbar__link">
                            {link.label}
                        </a>
                    ))}
                    <Link to="/components" className="navbar__link navbar__link--accent">
                        Components
                    </Link>
                </div>

                <div className="navbar__actions">
                    <button className="navbar__icon-btn" aria-label="Search">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                    </button>
                    <button
                        className={`navbar__hamburger ${isMobileOpen ? 'navbar__hamburger--open' : ''}`}
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        aria-label="Toggle navigation menu"
                    >
                        <span className="navbar__hamburger-line" />
                        <span className="navbar__hamburger-line" />
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        className="navbar__mobile"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="navbar__mobile-link"
                                onClick={() => setIsMobileOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#waitlist"
                            className="btn btn-primary navbar__mobile-cta"
                            onClick={() => setIsMobileOpen(false)}
                        >
                            Get Started
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
