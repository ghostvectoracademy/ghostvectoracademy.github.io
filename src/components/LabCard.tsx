import Badge, { type DifficultyTier } from './ui/Badge';
import { LinearProgress } from './ui/ProgressBar';
import './LabCard.css';

export interface LabCardProps {
    title: string;
    category: string;
    difficulty: DifficultyTier;
    status: 'available' | 'in-progress' | 'completed';
    progress?: number;
    time?: string;
    users?: number;
    rating?: number;
    tags?: string[];
}

const statusConfig = {
    'available': { label: 'Available', variant: 'default' as const, dot: '#22c55e' },
    'in-progress': { label: 'In Progress', variant: 'warning' as const, dot: '#eab308' },
    'completed': { label: 'Completed', variant: 'success' as const, dot: '#22c55e' },
};

const LabCard = ({
    title,
    category,
    difficulty,
    status,
    progress = 0,
    time = '45 min',
    users = 0,
    rating = 0,
    tags = [],
}: LabCardProps) => {
    const statusInfo = statusConfig[status];

    return (
        <div className={`lab-card ${status === 'completed' ? 'lab-card--completed' : ''}`}>
            <div className="lab-card__header">
                <Badge difficulty={difficulty} size="sm">{difficulty}</Badge>
                <Badge variant={statusInfo.variant} size="sm" dot dotColor={statusInfo.dot}>
                    {statusInfo.label}
                </Badge>
            </div>

            <div className="lab-card__body">
                <span className="lab-card__category">{category}</span>
                <h3 className="lab-card__title">{title}</h3>
                {tags.length > 0 && (
                    <div className="lab-card__tags">
                        {tags.map((tag) => (
                            <Badge key={tag} variant="ghost" size="sm">{tag}</Badge>
                        ))}
                    </div>
                )}
            </div>

            {status === 'in-progress' && (
                <div className="lab-card__progress">
                    <LinearProgress value={progress} size="sm" />
                </div>
            )}

            <div className="lab-card__footer">
                <div className="lab-card__stats">
                    <span className="lab-card__stat">⏱ {time}</span>
                    <span className="lab-card__stat">👥 {users}</span>
                    <span className="lab-card__stat">★ {rating.toFixed(1)}</span>
                </div>
                <button className="btn btn-primary lab-card__launch">
                    {status === 'completed' ? 'Redo' : status === 'in-progress' ? 'Resume' : 'Launch'}
                </button>
            </div>
        </div>
    );
};

export default LabCard;
