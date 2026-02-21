import { useState } from 'react';
import { Link } from 'react-router-dom';
import Badge from '../components/ui/Badge';
import { LinearProgress, CircularProgress } from '../components/ui/ProgressBar';
import Skeleton from '../components/ui/Skeleton';
import Modal from '../components/ui/Modal';
import Tooltip from '../components/ui/Tooltip';
import LabCard from '../components/LabCard';
import Dashboard from '../components/Dashboard';
import Leaderboard from '../components/Leaderboard';
import LabEnvironment from '../components/LabEnvironment';
import CTFEventPage from '../components/CTFEventPage';
import BlogLayout from '../components/BlogLayout';
import './ComponentShowcase.css';

const ComponentShowcase = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="showcase">
            {/* Header */}
            <header className="showcase__header">
                <div className="container">
                    <Link to="/" className="showcase__back">← Back to Landing</Link>
                    <h1 className="showcase__title">Component Library</h1>
                    <p className="showcase__subtitle">GhostVector Academy — Phase 2 Design System</p>
                </div>
            </header>

            <div className="container showcase__body">

                {/* ── UI Primitives ── */}
                <section className="showcase__section">
                    <h2 className="showcase__section-title">UI Primitives</h2>

                    {/* Badges */}
                    <div className="showcase__block">
                        <h3 className="showcase__block-title">Badges</h3>
                        <div className="showcase__row">
                            <Badge variant="default" size="sm">Default</Badge>
                            <Badge variant="accent" size="sm">Accent</Badge>
                            <Badge variant="success" size="sm" dot dotColor="#22c55e">Success</Badge>
                            <Badge variant="warning" size="sm">Warning</Badge>
                            <Badge variant="danger" size="sm">Danger</Badge>
                            <Badge variant="ghost" size="sm">Ghost</Badge>
                        </div>
                        <div className="showcase__row" style={{ marginTop: '0.6rem' }}>
                            <Badge difficulty="Ghost" size="sm">Ghost</Badge>
                            <Badge difficulty="Shadow" size="sm">Shadow</Badge>
                            <Badge difficulty="Phantom" size="sm">Phantom</Badge>
                            <Badge difficulty="Specter" size="sm">Specter</Badge>
                            <Badge difficulty="Vector" size="sm">Vector</Badge>
                        </div>
                    </div>

                    {/* Progress Bars */}
                    <div className="showcase__block">
                        <h3 className="showcase__block-title">Progress Bars</h3>
                        <div className="showcase__progress-grid">
                            <div>
                                <LinearProgress value={75} label="Network Recon" size="sm" />
                                <LinearProgress value={45} label="Web Exploitation" size="md" />
                                <LinearProgress value={90} label="Privilege Escalation" size="lg" color="#22c55e" />
                            </div>
                            <div className="showcase__row" style={{ gap: '1.5rem' }}>
                                <CircularProgress value={75} size={64} strokeWidth={4} label="XP" />
                                <CircularProgress value={45} size={80} strokeWidth={5} label="Level" />
                                <CircularProgress value={90} size={96} strokeWidth={6} />
                            </div>
                        </div>
                    </div>

                    {/* Skeletons */}
                    <div className="showcase__block">
                        <h3 className="showcase__block-title">Skeleton Loaders</h3>
                        <div className="showcase__skeleton-grid">
                            <div>
                                <div className="showcase__row" style={{ gap: '0.8rem', marginBottom: '1rem' }}>
                                    <Skeleton variant="circular" width={48} height={48} />
                                    <div style={{ flex: 1 }}>
                                        <Skeleton variant="text" lines={2} />
                                    </div>
                                </div>
                                <Skeleton variant="rectangular" height={100} />
                            </div>
                            <Skeleton variant="card" height={200} />
                        </div>
                    </div>

                    {/* Modal + Tooltip */}
                    <div className="showcase__block">
                        <h3 className="showcase__block-title">Modal &amp; Tooltip</h3>
                        <div className="showcase__row">
                            <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>Open Modal</button>
                            <Tooltip content="This is a tooltip!" position="top">
                                <button className="btn btn-secondary">Hover me (Top)</button>
                            </Tooltip>
                            <Tooltip content="Right tooltip" position="right">
                                <button className="btn btn-secondary">Hover me (Right)</button>
                            </Tooltip>
                        </div>
                        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Confirm Action" size="sm">
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.6' }}>
                                Are you sure you want to launch this lab? This will consume one of your concurrent lab slots.
                            </p>
                            <div className="showcase__row" style={{ marginTop: '1.5rem', justifyContent: 'flex-end' }}>
                                <button className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>Cancel</button>
                                <button className="btn btn-primary" onClick={() => setIsModalOpen(false)}>Launch Lab</button>
                            </div>
                        </Modal>
                    </div>
                </section>

                {/* ── Platform Components ── */}
                <section className="showcase__section">
                    <h2 className="showcase__section-title">Platform Components</h2>

                    {/* Lab Cards */}
                    <div className="showcase__block">
                        <h3 className="showcase__block-title">Lab Cards</h3>
                        <div className="showcase__lab-grid">
                            <LabCard
                                title="Apache Path Traversal → RCE"
                                category="Web Exploitation"
                                difficulty="Shadow"
                                status="in-progress"
                                progress={45}
                                time="45 min"
                                users={342}
                                rating={4.7}
                                tags={['Apache', 'Linux', 'CVE-2021-41773']}
                            />
                            <LabCard
                                title="Active Directory Kerberoasting"
                                category="Active Directory"
                                difficulty="Phantom"
                                status="available"
                                time="90 min"
                                users={218}
                                rating={4.9}
                                tags={['Windows', 'AD', 'Kerberos']}
                            />
                            <LabCard
                                title="Linux Kernel Exploit — DirtyPipe"
                                category="Privilege Escalation"
                                difficulty="Specter"
                                status="completed"
                                progress={100}
                                time="60 min"
                                users={156}
                                rating={4.8}
                                tags={['Linux', 'CVE-2022-0847']}
                            />
                        </div>
                    </div>

                    {/* Dashboard */}
                    <div className="showcase__block">
                        <h3 className="showcase__block-title">Dashboard</h3>
                        <Dashboard />
                    </div>

                    {/* Leaderboard */}
                    <div className="showcase__block">
                        <h3 className="showcase__block-title">Leaderboard</h3>
                        <Leaderboard />
                    </div>

                    {/* Lab Environment */}
                    <div className="showcase__block">
                        <h3 className="showcase__block-title">Lab Environment</h3>
                        <LabEnvironment />
                    </div>

                    {/* CTF Event Page */}
                    <div className="showcase__block">
                        <h3 className="showcase__block-title">CTF Event Page</h3>
                        <CTFEventPage />
                    </div>

                    {/* Blog Layout */}
                    <div className="showcase__block">
                        <h3 className="showcase__block-title">Interactive Blog Layout</h3>
                        <BlogLayout />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ComponentShowcase;
