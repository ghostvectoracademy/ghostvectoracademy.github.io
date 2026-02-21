import './ProgressBar.css';

interface LinearProgressProps {
    value: number;
    max?: number;
    label?: string;
    showValue?: boolean;
    size?: 'sm' | 'md' | 'lg';
    color?: string;
}

interface CircularProgressProps {
    value: number;
    max?: number;
    size?: number;
    strokeWidth?: number;
    label?: string;
    showValue?: boolean;
}

export const LinearProgress = ({
    value,
    max = 100,
    label,
    showValue = true,
    size = 'md',
    color,
}: LinearProgressProps) => {
    const pct = Math.min((value / max) * 100, 100);

    return (
        <div className={`progress progress--${size}`}>
            {(label || showValue) && (
                <div className="progress__header">
                    {label && <span className="progress__label">{label}</span>}
                    {showValue && <span className="progress__value">{Math.round(pct)}%</span>}
                </div>
            )}
            <div className="progress__track">
                <div
                    className="progress__fill"
                    style={{ width: `${pct}%`, ...(color ? { background: color } : {}) }}
                />
            </div>
        </div>
    );
};

export const CircularProgress = ({
    value,
    max = 100,
    size = 64,
    strokeWidth = 4,
    label,
    showValue = true,
}: CircularProgressProps) => {
    const pct = Math.min((value / max) * 100, 100);
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (pct / 100) * circumference;

    return (
        <div className="circular-progress" style={{ width: size, height: size }}>
            <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
                <circle
                    className="circular-progress__track"
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                />
                <circle
                    className="circular-progress__fill"
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}
                />
            </svg>
            <div className="circular-progress__content">
                {showValue && <span className="circular-progress__value">{Math.round(pct)}%</span>}
                {label && <span className="circular-progress__label">{label}</span>}
            </div>
        </div>
    );
};
