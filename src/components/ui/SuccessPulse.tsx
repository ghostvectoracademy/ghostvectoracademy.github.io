import { useEffect, useState } from 'react';
import './SuccessPulse.css';

interface SuccessPulseProps {
    trigger: boolean;
    size?: 'sm' | 'md';
    onComplete?: () => void;
}

const SuccessPulse = ({ trigger, size = 'md', onComplete }: SuccessPulseProps) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (trigger) {
            setShow(true);
            const timer = setTimeout(() => {
                setShow(false);
                onComplete?.();
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [trigger, onComplete]);

    if (!show) return null;

    return (
        <div className={`gv-success-pulse ${size !== 'md' ? `gv-success-pulse--${size}` : ''}`} aria-live="polite">
            <div className="gv-success-pulse__ring" />
            <div className="gv-success-pulse__ring gv-success-pulse__ring--second" />
            <div className="gv-success-pulse__circle">
                <svg className="gv-success-pulse__check" viewBox="0 0 24 24">
                    <polyline className="gv-success-pulse__check-path" points="6 12 10 16 18 8" />
                </svg>
            </div>
        </div>
    );
};

export default SuccessPulse;
