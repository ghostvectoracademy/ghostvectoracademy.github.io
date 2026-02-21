import { motion } from 'framer-motion';
import './HowItWorks.css';

const steps = [
    {
        number: '01',
        icon: '📖',
        title: 'Learn',
        description: 'Read interactive blogs with embedded terminals and inline challenges. Concepts click when you can try them immediately.',
    },
    {
        number: '02',
        icon: '🎯',
        title: 'Practice',
        description: 'Tackle adaptive labs that are different every time. Build real muscle memory — no copy-paste solutions possible.',
    },
    {
        number: '03',
        icon: '⚔️',
        title: 'Compete',
        description: 'Join weekly CTFs, monthly tournaments, and quarterly championships. Sharpen your skills against real opponents.',
    },
    {
        number: '04',
        icon: '🏆',
        title: 'Prove',
        description: 'Generate verifiable proof-of-skill credentials. Build a portfolio that employers actually trust.',
    },
];

const HowItWorks = () => {
    return (
        <section className="how-it-works section" id="how-it-works">
            <div className="container">
                <div className="how-it-works__header">
                    <span className="section__label">HOW IT WORKS</span>
                    <h2 className="section__title">
                        Your path from<br />
                        <span className="text-accent">learner to practitioner</span>
                    </h2>
                </div>

                <div className="how-it-works__steps">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            className="how-it-works__step"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="how-it-works__step-number">{step.number}</div>
                            <div className="how-it-works__step-content">
                                <span className="how-it-works__step-icon">{step.icon}</span>
                                <h3 className="how-it-works__step-title">{step.title}</h3>
                                <p className="how-it-works__step-desc">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
