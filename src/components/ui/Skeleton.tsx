import './Skeleton.css';

interface SkeletonProps {
    variant?: 'text' | 'circular' | 'rectangular' | 'card';
    width?: string | number;
    height?: string | number;
    lines?: number;
}

const Skeleton = ({ variant = 'text', width, height, lines = 1 }: SkeletonProps) => {
    if (variant === 'card') {
        return (
            <div className="skeleton skeleton--card" style={{ width, height }}>
                <div className="skeleton skeleton--rectangular" style={{ height: '120px' }} />
                <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div className="skeleton skeleton--text" style={{ width: '60%' }} />
                    <div className="skeleton skeleton--text" style={{ width: '100%' }} />
                    <div className="skeleton skeleton--text" style={{ width: '80%' }} />
                </div>
            </div>
        );
    }

    if (variant === 'circular') {
        return (
            <div
                className="skeleton skeleton--circular"
                style={{ width: width || 40, height: height || 40 }}
            />
        );
    }

    if (variant === 'rectangular') {
        return (
            <div
                className="skeleton skeleton--rectangular"
                style={{ width: width || '100%', height: height || 80 }}
            />
        );
    }

    // Text variant — supports multiple lines
    return (
        <div className="skeleton-group" style={{ width }}>
            {Array.from({ length: lines }).map((_, i) => (
                <div
                    key={i}
                    className="skeleton skeleton--text"
                    style={{
                        width: i === lines - 1 && lines > 1 ? '70%' : '100%',
                    }}
                />
            ))}
        </div>
    );
};

export default Skeleton;
