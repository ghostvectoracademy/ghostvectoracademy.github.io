import Logo from './Logo';
import './Footer.css';

const Footer = () => {
    const columns = [
        {
            title: 'Platform',
            links: [
                { label: 'Interactive Blogs', href: '#features' },
                { label: 'Dynamic Labs', href: '#features' },
                { label: 'Learning Paths', href: '#how-it-works' },
                { label: 'CTF Events', href: '#features' },
                { label: 'Pricing', href: '#pricing' },
            ],
        },
        {
            title: 'Resources',
            links: [
                { label: 'Documentation', href: '#' },
                { label: 'Blog', href: '#' },
                { label: 'Changelog', href: '#' },
                { label: 'Status', href: '#' },
            ],
        },
        {
            title: 'Community',
            links: [
                { label: 'Discord', href: '#' },
                { label: 'Twitter / X', href: '#' },
                { label: 'LinkedIn', href: '#' },
                { label: 'GitHub', href: '#' },
            ],
        },
        {
            title: 'Company',
            links: [
                { label: 'About', href: '#' },
                { label: 'Careers', href: '#' },
                { label: 'Privacy Policy', href: '#' },
                { label: 'Terms of Service', href: '#' },
            ],
        },
    ];

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top">
                    <div className="footer__brand">
                        <a href="#" className="footer__logo">
                            <Logo size={28} />
                            <span className="footer__logo-text">
                                <span className="footer__logo-ghost">Ghost</span>
                                <span className="footer__logo-vector">Vector</span>
                            </span>
                        </a>
                        <p className="footer__tagline">
                            Every lab is different. Every skill is real.
                        </p>
                    </div>

                    <div className="footer__columns">
                        {columns.map((col) => (
                            <div key={col.title} className="footer__column">
                                <h4 className="footer__column-title">{col.title}</h4>
                                <ul className="footer__column-links">
                                    {col.links.map((link) => (
                                        <li key={link.label}>
                                            <a href={link.href} className="footer__link">
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © {new Date().getFullYear()} GhostVector Academy. All rights reserved.
                    </p>
                    <p className="footer__made">
                        Forging cybersecurity skills, not certificates.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
