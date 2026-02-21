import './Spinner.css';

interface SpinnerProps {
    size?: 'sm' | 'md' | 'lg';
    glow?: boolean;
    className?: string;
}

const Spinner = ({ size = 'md', glow = false, className = '' }: SpinnerProps) => {
    return (
        <div
            className={`gv-spinner gv-spinner--${size} ${glow ? 'gv-spinner--glow' : ''} ${className}`}
            role="status"
            aria-label="Loading"
        >
            <span className="sr-only">Loading...</span>
        </div>
    );
};

export default Spinner;
