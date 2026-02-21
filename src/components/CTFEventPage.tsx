import Badge from './ui/Badge';
import './CTFEventPage.css';

const challenges = [
    { name: 'Hidden in Plain Sight', category: 'Web', points: 100, solved: 42, status: 'solved' },
    { name: 'Packet Storm', category: 'Network', points: 200, solved: 28, status: 'solved' },
    { name: 'Kernel Panic', category: 'Pwn', points: 300, solved: 15, status: 'unsolved' },
    { name: 'Crypto Heist', category: 'Crypto', points: 250, solved: 19, status: 'unsolved' },
    { name: 'Ghost in the Shell', category: 'Forensics', points: 400, solved: 8, status: 'unsolved' },
    { name: 'Zero Day Dawn', category: 'Reverse', points: 500, solved: 3, status: 'unsolved' },
];

const scoreboard = [
    { rank: 1, team: 'NullSec', score: 1850, solves: 8 },
    { rank: 2, team: 'ByteForce', score: 1600, solves: 7 },
    { rank: 3, team: 'PacketStorm', score: 1350, solves: 6 },
    { rank: 4, team: 'GhostTeam', score: 1100, solves: 5, isUser: true },
    { rank: 5, team: 'CipherPunks', score: 900, solves: 4 },
];

const categories = ['All', 'Web', 'Network', 'Pwn', 'Crypto', 'Forensics', 'Reverse'];

const CTFEventPage = () => {
    return (
        <div className="ctf-event">
            {/* Header */}
            <div className="ctf-event__header">
                <div className="ctf-event__header-info">
                    <Badge variant="accent" size="md" dot dotColor="#22c55e">LIVE</Badge>
                    <h2 className="ctf-event__title">GhostVector Monthly CTF — February</h2>
                    <p className="ctf-event__subtitle">10 challenges · 48h window · Team-based</p>
                </div>
                <div className="ctf-event__countdown">
                    <div className="ctf-event__countdown-item">
                        <span className="ctf-event__countdown-value">01</span>
                        <span className="ctf-event__countdown-label">DAYS</span>
                    </div>
                    <span className="ctf-event__countdown-sep">:</span>
                    <div className="ctf-event__countdown-item">
                        <span className="ctf-event__countdown-value">14</span>
                        <span className="ctf-event__countdown-label">HRS</span>
                    </div>
                    <span className="ctf-event__countdown-sep">:</span>
                    <div className="ctf-event__countdown-item">
                        <span className="ctf-event__countdown-value">32</span>
                        <span className="ctf-event__countdown-label">MIN</span>
                    </div>
                    <span className="ctf-event__countdown-sep">:</span>
                    <div className="ctf-event__countdown-item">
                        <span className="ctf-event__countdown-value">08</span>
                        <span className="ctf-event__countdown-label">SEC</span>
                    </div>
                </div>
            </div>

            <div className="ctf-event__body">
                {/* Challenges */}
                <div className="ctf-event__challenges">
                    <div className="ctf-event__challenges-header">
                        <h3 className="ctf-event__section-title">Challenges</h3>
                        <div className="ctf-event__categories">
                            {categories.map((cat) => (
                                <button key={cat} className={`ctf-event__cat-btn ${cat === 'All' ? 'ctf-event__cat-btn--active' : ''}`}>
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="ctf-event__challenge-grid">
                        {challenges.map((ch) => (
                            <div key={ch.name} className={`ctf-event__challenge ${ch.status === 'solved' ? 'ctf-event__challenge--solved' : ''}`}>
                                <div className="ctf-event__challenge-top">
                                    <Badge variant={ch.status === 'solved' ? 'success' : 'default'} size="sm">
                                        {ch.category}
                                    </Badge>
                                    <span className="ctf-event__challenge-pts">{ch.points} pts</span>
                                </div>
                                <h4 className="ctf-event__challenge-name">{ch.name}</h4>
                                <span className="ctf-event__challenge-solves">{ch.solved} solves</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scoreboard Sidebar */}
                <div className="ctf-event__scoreboard">
                    <h3 className="ctf-event__section-title">Live Scoreboard</h3>
                    <div className="ctf-event__score-list">
                        {scoreboard.map((team) => (
                            <div
                                key={team.rank}
                                className={`ctf-event__score-item ${(team as { isUser?: boolean }).isUser ? 'ctf-event__score-item--user' : ''}`}
                            >
                                <span className="ctf-event__score-rank">#{team.rank}</span>
                                <div className="ctf-event__score-info">
                                    <span className="ctf-event__score-team">
                                        {team.team}
                                        {(team as { isUser?: boolean }).isUser && <Badge variant="accent" size="sm">You</Badge>}
                                    </span>
                                    <span className="ctf-event__score-meta">{team.solves} solves</span>
                                </div>
                                <span className="ctf-event__score-points">{team.score.toLocaleString()}</span>
                            </div>
                        ))}
                    </div>

                    {/* Progress */}
                    <div className="ctf-event__progress">
                        <h3 className="ctf-event__section-title" style={{ marginTop: '1.5rem' }}>Your Progress</h3>
                        <div className="ctf-event__progress-stats">
                            <div className="ctf-event__progress-stat">
                                <span className="ctf-event__progress-val">2/6</span>
                                <span className="ctf-event__progress-label">Solved</span>
                            </div>
                            <div className="ctf-event__progress-stat">
                                <span className="ctf-event__progress-val">300</span>
                                <span className="ctf-event__progress-label">Points</span>
                            </div>
                            <div className="ctf-event__progress-stat">
                                <span className="ctf-event__progress-val">#4</span>
                                <span className="ctf-event__progress-label">Rank</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTFEventPage;
