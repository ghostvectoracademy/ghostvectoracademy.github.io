import Badge from './ui/Badge';
import './Leaderboard.css';

const leaderboardData = [
    { rank: 1, name: 'cyb3rph4nt0m', xp: 45_230, level: 52, streak: 89, avatar: 'CP' },
    { rank: 2, name: 'sh4d0wbyt3', xp: 42_100, level: 49, streak: 67, avatar: 'SB' },
    { rank: 3, name: 'n1ghtcr4wl3r', xp: 38_900, level: 46, streak: 45, avatar: 'NC' },
    { rank: 4, name: 'z3r0d4y_hunt3r', xp: 34_500, level: 42, streak: 32, avatar: 'ZH' },
    { rank: 5, name: 'p4ck3t_st0rm', xp: 31_200, level: 39, streak: 28, avatar: 'PS' },
    { rank: 6, name: 'r00tk1t_qu33n', xp: 28_750, level: 37, streak: 21, avatar: 'RQ' },
    { rank: 7, name: 'gh0st_v3ct0r', xp: 25_300, level: 34, streak: 14, avatar: 'GV', isCurrentUser: true },
    { rank: 8, name: 'h4x0r_n00b', xp: 22_100, level: 31, streak: 10, avatar: 'HN' },
];

const Leaderboard = () => {
    return (
        <div className="leaderboard">
            {/* Podium */}
            <div className="leaderboard__podium">
                {[leaderboardData[1], leaderboardData[0], leaderboardData[2]].map((user, i) => {
                    const positions = ['second', 'first', 'third'];
                    const medals = ['🥈', '🥇', '🥉'];
                    return (
                        <div key={user.name} className={`leaderboard__podium-item leaderboard__podium-item--${positions[i]}`}>
                            <div className="leaderboard__podium-avatar">{user.avatar}</div>
                            <span className="leaderboard__podium-medal">{medals[i]}</span>
                            <span className="leaderboard__podium-name">{user.name}</span>
                            <span className="leaderboard__podium-xp">{user.xp.toLocaleString()} XP</span>
                            <div className={`leaderboard__podium-bar leaderboard__podium-bar--${positions[i]}`} />
                        </div>
                    );
                })}
            </div>

            {/* Table */}
            <div className="leaderboard__table-wrap">
                <table className="leaderboard__table">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Player</th>
                            <th>XP</th>
                            <th>Level</th>
                            <th>Streak</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaderboardData.map((user) => (
                            <tr
                                key={user.rank}
                                className={`leaderboard__row ${(user as { isCurrentUser?: boolean }).isCurrentUser ? 'leaderboard__row--current' : ''}`}
                            >
                                <td className="leaderboard__rank">
                                    {user.rank <= 3 ? (
                                        <span className="leaderboard__rank-medal">{['🥇', '🥈', '🥉'][user.rank - 1]}</span>
                                    ) : (
                                        <span className="leaderboard__rank-num">{user.rank}</span>
                                    )}
                                </td>
                                <td>
                                    <div className="leaderboard__user">
                                        <div className="leaderboard__user-avatar">{user.avatar}</div>
                                        <span className="leaderboard__user-name">{user.name}</span>
                                        {(user as { isCurrentUser?: boolean }).isCurrentUser && (
                                            <Badge variant="accent" size="sm">You</Badge>
                                        )}
                                    </div>
                                </td>
                                <td className="leaderboard__xp">{user.xp.toLocaleString()}</td>
                                <td className="leaderboard__level">{user.level}</td>
                                <td className="leaderboard__streak">🔥 {user.streak}d</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Leaderboard;
