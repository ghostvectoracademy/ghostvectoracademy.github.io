import { useState } from 'react';
import { motion } from 'framer-motion';
import './Waitlist.css';

const Waitlist = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsSubmitted(true);
            setEmail('');
            setTimeout(() => setIsSubmitted(false), 4000);
        }
    };

    return (
        <section className="waitlist section" id="waitlist">
            <div className="container">
                <motion.div
                    className="waitlist__inner"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section__label">JOIN THE WAITLIST</span>
                    <h2 className="section__title">
                        Be first to <span className="text-accent">get access</span>
                    </h2>
                    <p className="section__subtitle" style={{ textAlign: 'center' }}>
                        Join 2,400+ security professionals already on the waitlist.
                    </p>

                    <form className="waitlist__form" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            className="waitlist__input"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit" className="btn btn-primary waitlist__btn">
                            {isSubmitted ? '✓ You\'re in!' : 'Get Early Access'}
                        </button>
                    </form>

                    <div className="waitlist__stats">
                        <div className="waitlist__stat">
                            <span className="waitlist__stat-number">2,400+</span>
                            <span className="waitlist__stat-label">ON THE WAITLIST</span>
                        </div>
                        <div className="waitlist__stat-divider" />
                        <div className="waitlist__stat">
                            <span className="waitlist__stat-number">50+</span>
                            <span className="waitlist__stat-label">LABS AT LAUNCH</span>
                        </div>
                        <div className="waitlist__stat-divider" />
                        <div className="waitlist__stat">
                            <span className="waitlist__stat-number">30+</span>
                            <span className="waitlist__stat-label">INTERACTIVE BLOGS</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Waitlist;
