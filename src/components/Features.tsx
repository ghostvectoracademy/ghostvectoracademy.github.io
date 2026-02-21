import { motion } from 'framer-motion';
import './Features.css';

const features = [
    {
        icon: '◈',
        tag: 'CORE USP',
        title: 'Adaptive Dynamic Labs',
        description: 'Every lab is procedurally generated. Different vulnerabilities, different flags, different paths — every single time.',
    },
    {
        icon: '◎',
        tag: 'LIVING DOCS',
        title: 'Interactive Blogs',
        description: 'Blog posts with embedded terminals, inline challenges, and branching scenarios. Try the exploit right there in the paragraph.',
    },
    {
        icon: '⬡',
        tag: 'GUIDED PATHS',
        title: 'Cohort-Based Learning',
        description: 'Fixed start dates, live sessions, peer assignments, and dedicated mentors. Structure, accountability, and human connection.',
    },
    {
        icon: '⚔',
        tag: 'FULL SPECTRUM',
        title: 'Red + Blue Team',
        description: 'Attack and defend. Every lab has both perspectives. Learn to think like an attacker, respond like a defender.',
    },
    {
        icon: '◆',
        tag: 'CAREER READY',
        title: 'Proof-of-Skill Portfolio',
        description: 'Generate verifiable proof-of-skill credentials. Build a portfolio that employers actually trust.',
    },
    {
        icon: '✦',
        tag: 'BUILT-IN',
        title: 'Community First',
        description: 'Teams, pair hacking, leaderboards, and weekly CTF events. Learning is multiplayer.',
    },
];

const Features = () => {
    return (
        <section className="features section" id="features">
            <div className="container">
                <div className="features__header">
                    <span className="section__label">WHAT MAKES US DIFFERENT</span>
                    <h2 className="section__title">
                        Built for <span className="text-accent">Real Skills</span>
                    </h2>
                    <p className="section__subtitle">
                        Six core features that set GhostVector Academy apart from every other platform.
                    </p>
                </div>

                <div className="features__grid">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            className="features__card card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                        >
                            <div className="features__card-top">
                                <span className="features__icon">{feature.icon}</span>
                                <span className="features__tag">{feature.tag}</span>
                            </div>
                            <h3 className="features__card-title">{feature.title}</h3>
                            <p className="features__card-desc">{feature.description}</p>
                            <a href="#" className="features__link">
                                Learn more <span>→</span>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
