import { motion } from 'framer-motion';
import './Pricing.css';

const tiers = [
    {
        name: 'Recon',
        subtitle: 'Free forever',
        price: '$0',
        period: '/month',
        description: 'Get started with the basics',
        features: [
            { text: '5 Interactive Blogs / month', included: true },
            { text: '2 Labs / month', included: true },
            { text: 'Weekly CTF participation', included: true },
            { text: 'Community access', included: true },
            { text: 'Limited learning paths', included: true },
            { text: 'Unlimited labs', included: false },
            { text: 'Skill assessments', included: false },
            { text: 'Pair hacking', included: false },
        ],
        cta: 'Get Started Free',
        featured: false,
    },
    {
        name: 'Operator',
        subtitle: 'Most popular',
        price: '$29',
        period: '/month',
        description: 'For serious learners and career builders',
        features: [
            { text: 'Unlimited Interactive Blogs', included: true },
            { text: 'Unlimited Labs (3 concurrent)', included: true },
            { text: 'All Learning Paths', included: true },
            { text: 'All CTF events', included: true },
            { text: 'Skill Assessments', included: true },
            { text: 'Pair Hacking', included: true },
            { text: 'Profile & Portfolio', included: true },
            { text: 'Priority lab spin-up', included: true },
        ],
        cta: 'Join Waitlist — Pro',
        featured: true,
    },
    {
        name: 'Vector',
        subtitle: 'Elite tier',
        price: '$79',
        period: '/month',
        description: 'Maximum power for dedicated practitioners',
        features: [
            { text: 'Everything in Pro', included: true },
            { text: 'Extended lab sessions (4h)', included: true },
            { text: 'Exclusive "Vector" labs', included: true },
            { text: 'Early access to new content', included: true },
            { text: 'Monthly 1:1 mentor session', included: true },
            { text: 'Custom lab requests', included: true },
            { text: 'Exclusive badge & flair', included: true },
            { text: 'Priority support', included: true },
        ],
        cta: 'Join Waitlist — Elite',
        featured: false,
    },
];

const Pricing = () => {
    return (
        <section className="pricing section" id="pricing">
            <div className="container">
                <div className="pricing__header">
                    <span className="section__label">EARLY ACCESS</span>
                    <h2 className="section__title">
                        Simple, transparent <span className="text-accent">pricing</span>
                    </h2>
                    <p className="section__subtitle">
                        Start free, upgrade when you're ready. No hidden fees.
                    </p>
                </div>

                <div className="pricing__grid">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={tier.name}
                            className={`pricing__card ${tier.featured ? 'pricing__card--featured' : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="pricing__card-header">
                                <div className="pricing__name-row">
                                    <h3 className="pricing__name">{tier.name}</h3>
                                    {tier.featured && (
                                        <span className="pricing__badge">Popular</span>
                                    )}
                                </div>
                                <p className="pricing__description">{tier.description}</p>
                                <div className="pricing__price">
                                    <span className="pricing__amount">{tier.price}</span>
                                    <span className="pricing__period">{tier.period}</span>
                                </div>
                            </div>

                            <ul className="pricing__features">
                                {tier.features.map((feature) => (
                                    <li
                                        key={feature.text}
                                        className={`pricing__feature ${!feature.included ? 'pricing__feature--disabled' : ''}`}
                                    >
                                        <span className="pricing__check">
                                            {feature.included ? '✓' : '—'}
                                        </span>
                                        {feature.text}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#waitlist"
                                className={`btn ${tier.featured ? 'btn-primary' : 'btn-secondary'} pricing__cta`}
                            >
                                {tier.cta}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
