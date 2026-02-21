import { CircularProgress } from './ui/ProgressBar';
import Badge from './ui/Badge';
import './Dashboard.css';

const sidebarItems = [
    { icon: '📚', label: 'Learning Paths', active: false },
    { icon: '🧪', label: 'Labs', active: true },
    { icon: '⚔️', label: 'CTF Events', active: false },
    { icon: '👥', label: 'Community', active: false },
    { icon: '📊', label: 'Stats', active: false },
    { icon: '⚙️', label: 'Settings', active: false },
];

const stats = [
    { label: 'Total XP', value: '12,450', icon: '⚡' },
    { label: 'Level', value: '27', icon: '🎯' },
    { label: 'Streak', value: '14 days', icon: '🔥' },
    { label: 'Global Rank', value: '#342', icon: '🏆' },
];

const continueLearning = [
    { title: 'Web App Security Path', progress: 65, module: 'Module 4: SQL Injection' },
    { title: 'Active Directory Lab', progress: 30, module: 'Task 2: Enumeration' },
];

const recommended = [
    { title: 'Linux Privilege Escalation', difficulty: 'Shadow' as const, category: 'Linux' },
    { title: 'SSRF to Cloud Metadata', difficulty: 'Phantom' as const, category: 'Web' },
    { title: 'JWT Token Forgery', difficulty: 'Ghost' as const, category: 'Web' },
];

// Streak heatmap — last 7 weeks
const streakData = Array.from({ length: 49 }, (_, i) => {
    if (i > 40) return Math.random() > 0.3 ? Math.floor(Math.random() * 4) + 1 : 0;
    return Math.random() > 0.4 ? Math.floor(Math.random() * 4) + 1 : 0;
});

const heatColors = ['transparent', '#1a1a3e', '#2d2b6b', '#4F46E5', '#6366F1'];

const Dashboard = () => {
    return (
        <div className="dashboard">
            {/* Sidebar */}
            <aside className="dashboard__sidebar">
                <div className="dashboard__sidebar-logo">
                    <span className="dashboard__sidebar-icon">◈</span>
                    <span className="dashboard__sidebar-brand">GV Academy</span>
                </div>
                <nav className="dashboard__nav">
                    {sidebarItems.map((item) => (
                        <a
                            key={item.label}
                            href="#"
                            className={`dashboard__nav-item ${item.active ? 'dashboard__nav-item--active' : ''}`}
                        >
                            <span>{item.icon}</span>
                            <span>{item.label}</span>
                        </a>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <div className="dashboard__main">
                {/* Stats Cards */}
                <div className="dashboard__stats">
                    {stats.map((stat) => (
                        <div key={stat.label} className="dashboard__stat-card">
                            <span className="dashboard__stat-icon">{stat.icon}</span>
                            <div className="dashboard__stat-info">
                                <span className="dashboard__stat-value">{stat.value}</span>
                                <span className="dashboard__stat-label">{stat.label}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="dashboard__grid">
                    {/* Continue Learning */}
                    <div className="dashboard__section">
                        <h3 className="dashboard__section-title">Continue Learning</h3>
                        <div className="dashboard__continue">
                            {continueLearning.map((item) => (
                                <div key={item.title} className="dashboard__continue-item">
                                    <CircularProgress value={item.progress} size={48} strokeWidth={3} />
                                    <div className="dashboard__continue-info">
                                        <span className="dashboard__continue-title">{item.title}</span>
                                        <span className="dashboard__continue-module">{item.module}</span>
                                    </div>
                                    <button className="btn btn-secondary dashboard__continue-btn">Resume</button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Streak Heatmap */}
                    <div className="dashboard__section">
                        <h3 className="dashboard__section-title">Activity Streak</h3>
                        <div className="dashboard__streak">
                            <div className="dashboard__heatmap">
                                {streakData.map((val, i) => (
                                    <div
                                        key={i}
                                        className="dashboard__heatmap-cell"
                                        style={{ background: heatColors[val] || heatColors[0] }}
                                    />
                                ))}
                            </div>
                            <div className="dashboard__streak-legend">
                                <span>Less</span>
                                {heatColors.slice(1).map((color, i) => (
                                    <div key={i} className="dashboard__heatmap-cell" style={{ background: color }} />
                                ))}
                                <span>More</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recommended Labs */}
                <div className="dashboard__section">
                    <h3 className="dashboard__section-title">Recommended for You</h3>
                    <div className="dashboard__recommended">
                        {recommended.map((lab) => (
                            <div key={lab.title} className="dashboard__rec-item">
                                <div className="dashboard__rec-info">
                                    <span className="dashboard__rec-category">{lab.category}</span>
                                    <span className="dashboard__rec-title">{lab.title}</span>
                                </div>
                                <Badge difficulty={lab.difficulty} size="sm">{lab.difficulty}</Badge>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
