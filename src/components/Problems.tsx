import { motion } from 'framer-motion';
import './Problems.css';

const problems = [
    {
        number: '01',
        title: 'Static Labs',
        description: 'Every platform serves the same lab to every user. Once a writeup exists on Medium, the lab\'s learning value drops to zero.',
    },
    {
        number: '02',
        title: 'The Beginner Chasm',
        description: 'Nobody handles the messy middle — taking someone from "I completed a guided room" to "I can independently assess a real system."',
    },
    {
        number: '03',
        title: 'Passive Content',
        description: 'Blogs are read-and-forget. Videos are watch-and-forget. There\'s no spaced repetition or adaptive reinforcement.',
    },
    {
        number: '04',
        title: 'Learning is Lonely',
        description: 'Most platforms are single-player experiences. You learn alone, struggle alone, and quit alone.',
    },
    {
        number: '05',
        title: 'No Real Validation',
        description: 'Certificates from most platforms don\'t carry weight with employers. There\'s no portfolio of demonstrable hands-on ability.',
    },
    {
        number: '06',
        title: 'Content ≠ Curriculum',
        description: 'Most platforms are content libraries, not curricula. No learning objectives, no spiral curriculum, just a buffet.',
    },
];

const Problems = () => {
    return (
        <section className="problems section" id="problems">
            <div className="container">
                <div className="problems__header">
                    <span className="section__label">THE PROBLEM</span>
                    <h2 className="section__title">
                        Why current platforms<br />
                        <span className="text-accent">fall short</span>
                    </h2>
                </div>

                <div className="problems__grid">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={problem.number}
                            className="problems__item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                        >
                            <span className="problems__number">{problem.number}</span>
                            <div className="problems__content">
                                <h3 className="problems__title">{problem.title}</h3>
                                <p className="problems__desc">{problem.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Problems;
