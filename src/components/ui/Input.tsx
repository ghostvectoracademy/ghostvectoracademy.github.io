import './Input.css';

/* ── Text Input ── */
interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: React.ReactNode;
    inputSize?: 'sm' | 'md' | 'lg';
}

export const TextInput = ({ label, error, icon, inputSize = 'md', className = '', ...props }: TextInputProps) => {
    const sizeClass = inputSize !== 'md' ? `gv-input--${inputSize}` : '';
    const errorClass = error ? 'gv-input--error' : '';

    return (
        <div className="gv-input-group">
            {label && <label className="gv-input-label">{label}</label>}
            <div className={`gv-input-wrapper ${icon ? 'gv-input-wrapper--has-icon' : ''}`}>
                {icon && <span className="gv-input-icon">{icon}</span>}
                <input
                    className={`gv-input ${sizeClass} ${errorClass} ${className}`}
                    {...props}
                />
            </div>
            {error && <span className="gv-input-error">{error}</span>}
        </div>
    );
};

/* ── Search Input ── */
interface SearchInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    onClear?: () => void;
}

export const SearchInput = ({ onClear, value, ...props }: SearchInputProps) => {
    return (
        <div className="gv-search">
            <span className="gv-search__icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
            </span>
            <input
                type="search"
                className="gv-input"
                value={value}
                {...props}
            />
            {value && onClear && (
                <button className="gv-search__clear" onClick={onClear} aria-label="Clear search">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
            )}
        </div>
    );
};

/* ── Select Input ── */
interface SelectInputProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: string;
    options: { value: string; label: string }[];
}

export const SelectInput = ({ label, error, options, className = '', ...props }: SelectInputProps) => {
    return (
        <div className="gv-input-group">
            {label && <label className="gv-input-label">{label}</label>}
            <div className="gv-select-wrapper">
                <select className={`gv-select ${error ? 'gv-input--error' : ''} ${className}`} {...props}>
                    {options.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                </select>
                <span className="gv-select__chevron">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </span>
            </div>
            {error && <span className="gv-input-error">{error}</span>}
        </div>
    );
};

/* ── Textarea ── */
interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}

export const TextArea = ({ label, error, className = '', ...props }: TextAreaProps) => {
    return (
        <div className="gv-input-group">
            {label && <label className="gv-input-label">{label}</label>}
            <textarea
                className={`gv-textarea ${error ? 'gv-textarea--error' : ''} ${className}`}
                {...props}
            />
            {error && <span className="gv-input-error">{error}</span>}
        </div>
    );
};
