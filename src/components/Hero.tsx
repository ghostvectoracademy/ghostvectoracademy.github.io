import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './Hero.css';

const keywords = [
    { text: 'Learn', active: false },
    { text: 'Practice', active: false },
    { text: 'Compete', active: true },
    { text: 'Prove', active: false },
    { text: 'Defend', active: false },
];

const skills = [
    { name: 'Network Recon', level: 82 },
    { name: 'Web Exploitation', level: 65 },
    { name: 'Privilege Escalation', level: 48 },
    { name: 'Incident Response', level: 71 },
];

const Hero = () => {
    const [animatedSkills, setAnimatedSkills] = useState(skills.map(s => ({ ...s, level: 0 })));
    const [labStatus, setLabStatus] = useState<'generating' | 'live'>('generating');
    const [activeUsers, setActiveUsers] = useState(0);

    useEffect(() => {
        // Reset state on mount
        setAnimatedSkills(skills.map(s => ({ ...s, level: 0 })));
        setLabStatus('generating');
        setActiveUsers(0);

        // Animate skill bars
        const skillTimer = window.setTimeout(() => {
            setAnimatedSkills(skills);
        }, 800);

        // Lab generation simulation
        const labTimer = window.setTimeout(() => {
            setLabStatus('live');
        }, 2200);

        // Active users counter
        let count = 0;
        const target = 347;
        const counterInterval = window.setInterval(() => {
            count += Math.ceil(target / 30);
            if (count >= target) {
                count = target;
                clearInterval(counterInterval);
            }
            setActiveUsers(count);
        }, 60);

        return () => {
            clearTimeout(skillTimer);
            clearTimeout(labTimer);
            clearInterval(counterInterval);
        };
    }, []);

    return (
        <section className="hero" id="hero">
            <div className="hero__grid container">
                {/* Left Column — Title */}
                <motion.div
                    className="hero__left"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                >
                    <h1 className="hero__title">
                        Adaptive
                        <br />
                        Dynamic
                        <br />
                        Labs
                    </h1>
                </motion.div>

                {/* Center Column — Platform Preview */}
                <motion.div
                    className="hero__center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                >
                    <div className="hero__preview">
                        {/* Lab Status Header */}
                        <div className="hero__preview-header">
                            <div className="hero__preview-dots">
                                <span className="hero__preview-dot hero__preview-dot--red" />
                                <span className="hero__preview-dot hero__preview-dot--yellow" />
                                <span className="hero__preview-dot hero__preview-dot--green" />
                            </div>
                            <span className="hero__preview-title">GhostVector Lab Environment</span>
                        </div>

                        {/* Active Lab Card */}
                        <div className="hero__lab">
                            <div className="hero__lab-top">
                                <div className="hero__lab-status">
                                    <span className={`hero__lab-dot ${labStatus === 'live' ? 'hero__lab-dot--live' : ''}`} />
                                    <span className="hero__lab-status-text">
                                        {labStatus === 'generating' ? 'Generating unique lab...' : 'Lab is live — unique instance'}
                                    </span>
                                </div>
                                <span className="hero__lab-id">
                                    {labStatus === 'live' ? '#GV-7X92K' : '...'}
                                </span>
                            </div>
                            <div className="hero__lab-name">
                                {labStatus === 'live' ? 'Apache Path Traversal → RCE' : 'Configuring vulnerabilities...'}
                            </div>
                            <div className="hero__lab-tags">
                                <span className="hero__lab-tag">Web Exploitation</span>
                                <span className="hero__lab-tag">Linux</span>
                                <span className="hero__lab-tag hero__lab-tag--difficulty">Medium</span>
                            </div>
                        </div>

                        {/* Skill Progression */}
                        <div className="hero__skills">
                            <div className="hero__skills-header">
                                <span className="hero__skills-label">SKILL PROGRESSION</span>
                                <span className="hero__skills-live">{activeUsers} learners online</span>
                            </div>
                            {animatedSkills.map((skill) => (
                                <div key={skill.name} className="hero__skill">
                                    <div className="hero__skill-info">
                                        <span className="hero__skill-name">{skill.name}</span>
                                        <span className="hero__skill-pct">{skill.level}%</span>
                                    </div>
                                    <div className="hero__skill-bar">
                                        <div
                                            className="hero__skill-fill"
                                            style={{ width: `${skill.level}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Overlay message */}
                        <div className="hero__preview-overlay">
                            <span>every lab is</span>
                            <span>different</span>
                        </div>
                    </div>

                    <a href="#waitlist" className="btn btn-primary hero__cta">
                        Get started
                    </a>
                </motion.div>

                {/* Right Column — Keywords */}
                <motion.div
                    className="hero__right"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    <div className="hero__keywords">
                        {keywords.map((kw) => (
                            <span
                                key={kw.text}
                                className={`hero__keyword ${kw.active ? 'hero__keyword--active' : ''}`}
                            >
                                {kw.text}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Bottom Stats Row */}
            <motion.div
                className="hero__bottom container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <div className="hero__bottom-left">
                    <div className="hero__avatars">
                        <div className="hero__avatar">JD</div>
                        <div className="hero__avatar">AK</div>
                    </div>
                    <p className="hero__bottom-text">
                        EVERY LAB IS PROCEDURALLY GENERATED. NO WRITEUPS CAN SAVE YOU.
                    </p>
                </div>

                <div className="hero__bottom-center">
                    <span className="section__label">OUR VISION</span>
                    <div className="hero__bottom-icon">✦</div>
                    <p className="hero__bottom-heading">
                        Forge real skills<br />
                        through adaptive<br />
                        challenges
                    </p>
                </div>

                <div className="hero__bottom-right">
                    <div className="hero__tech-card">
                        <span className="hero__tech-label">HOW IT WORKS</span>
                        <span className="hero__tech-arrow">↗</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
