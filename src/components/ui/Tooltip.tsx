import { useState, useRef } from 'react';
import './Tooltip.css';

interface TooltipProps {
    content: string;
    children: React.ReactNode;
    position?: 'top' | 'bottom' | 'left' | 'right';
}

const Tooltip = ({ content, children, position = 'top' }: TooltipProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const timeoutRef = useRef<number>(0);

    const show = () => {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = window.setTimeout(() => setIsVisible(true), 200);
    };

    const hide = () => {
        clearTimeout(timeoutRef.current);
        setIsVisible(false);
    };

    return (
        <div
            className="tooltip-wrapper"
            onMouseEnter={show}
            onMouseLeave={hide}
            onFocus={show}
            onBlur={hide}
        >
            {children}
            {isVisible && (
                <div className={`tooltip tooltip--${position}`} role="tooltip">
                    {content}
                    <div className="tooltip__arrow" />
                </div>
            )}
        </div>
    );
};

export default Tooltip;
