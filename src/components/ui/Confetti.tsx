import { useEffect, useState } from 'react';
import './Confetti.css';

interface ConfettiProps {
    trigger: boolean;
    onComplete?: () => void;
}

const pieces = Array.from({ length: 18 }, (_, i) => {
    const shapes = ['rect', 'circle', 'strip'];
    return { id: i, shape: shapes[i % 3] };
});

const Confetti = ({ trigger, onComplete }: ConfettiProps) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (trigger) {
            setShow(true);
            const timer = setTimeout(() => {
                setShow(false);
                onComplete?.();
            }, 1800);
            return () => clearTimeout(timer);
        }
    }, [trigger, onComplete]);

    if (!show) return null;

    return (
        <div className="gv-confetti" aria-hidden="true">
            {pieces.map((piece) => (
                <div
                    key={piece.id}
                    className={`gv-confetti__piece gv-confetti__piece--${piece.shape}`}
                />
            ))}
        </div>
    );
};

export default Confetti;
