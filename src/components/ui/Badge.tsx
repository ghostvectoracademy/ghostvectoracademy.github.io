import './Badge.css';

export type BadgeVariant = 'default' | 'accent' | 'success' | 'warning' | 'danger' | 'ghost';
export type BadgeSize = 'sm' | 'md';

// Difficulty tiers
export type DifficultyTier = 'Ghost' | 'Shadow' | 'Phantom' | 'Specter' | 'Vector';

const difficultyColors: Record<DifficultyTier, string> = {
    Ghost: '#22c55e',
    Shadow: '#3b82f6',
    Phantom: '#a855f7',
    Specter: '#f97316',
    Vector: '#ef4444',
};

interface BadgeProps {
    children: React.ReactNode;
    variant?: BadgeVariant;
    size?: BadgeSize;
    difficulty?: DifficultyTier;
    dot?: boolean;
    dotColor?: string;
}

const Badge = ({ children, variant = 'default', size = 'sm', difficulty, dot, dotColor }: BadgeProps) => {
    const style = difficulty
        ? { borderColor: `${difficultyColors[difficulty]}40`, color: difficultyColors[difficulty] }
        : undefined;

    return (
        <span className={`badge badge--${variant} badge--${size}`} style={style}>
            {dot && <span className="badge__dot" style={dotColor ? { background: dotColor } : undefined} />}
            {children}
        </span>
    );
};

export default Badge;
