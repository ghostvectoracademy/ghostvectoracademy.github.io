import { useState } from 'react';
import Badge from './ui/Badge';
import './LabEnvironment.css';

const objectives = [
    { id: 1, text: 'Identify open ports on the target machine', completed: true },
    { id: 2, text: 'Find the vulnerable web application', completed: true },
    { id: 3, text: 'Exploit the path traversal vulnerability', completed: false },
    { id: 4, text: 'Escalate privileges to root', completed: false },
    { id: 5, text: 'Capture the root flag', completed: false },
];

const hints = [
    { level: 'Nudge', cost: 5, text: 'Look at the Apache version carefully...', unlocked: true },
    { level: 'Direction', cost: 15, text: 'Try using ../../../ in the file parameter to read /etc/passwd', unlocked: false },
    { level: 'Walkthrough', cost: 30, text: null, unlocked: false },
];

const terminalLines = [
    { type: 'cmd', text: '$ nmap -sV -sC 10.10.1.42' },
    { type: 'output', text: 'PORT   STATE SERVICE VERSION' },
    { type: 'output', text: '22/tcp open  ssh     OpenSSH 8.2p1' },
    { type: 'output', text: '80/tcp open  http    Apache 2.4.49' },
    { type: 'cmd', text: '$ curl http://10.10.1.42/cgi-bin/.%2e/.%2e/etc/passwd' },
    { type: 'success', text: 'root:x:0:0:root:/root:/bin/bash' },
];

const LabEnvironment = () => {
    const [flagInput, setFlagInput] = useState('');
    const [flagStatus, setFlagStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleFlagSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (flagInput.toLowerCase().includes('gv{')) {
            setFlagStatus('success');
        } else {
            setFlagStatus('error');
            setTimeout(() => setFlagStatus('idle'), 2000);
        }
    };

    return (
        <div className="lab-env">
            {/* Info Panel */}
            <div className="lab-env__info">
                <div className="lab-env__info-header">
                    <div>
                        <Badge variant="warning" size="sm" dot dotColor="#eab308">In Progress</Badge>
                        <h3 className="lab-env__info-title">Apache Path Traversal → RCE</h3>
                    </div>
                    <div className="lab-env__timer">
                        <span className="lab-env__timer-icon">⏱</span>
                        <span className="lab-env__timer-value">01:23:45</span>
                    </div>
                </div>

                {/* Objectives */}
                <div className="lab-env__objectives">
                    <h4 className="lab-env__section-title">Objectives</h4>
                    <div className="lab-env__objective-list">
                        {objectives.map((obj) => (
                            <div key={obj.id} className={`lab-env__objective ${obj.completed ? 'lab-env__objective--done' : ''}`}>
                                <span className="lab-env__objective-check">
                                    {obj.completed ? '✓' : '○'}
                                </span>
                                <span>{obj.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Hints */}
                <div className="lab-env__hints">
                    <h4 className="lab-env__section-title">Hints</h4>
                    <div className="lab-env__hint-list">
                        {hints.map((hint) => (
                            <div key={hint.level} className={`lab-env__hint ${hint.unlocked ? 'lab-env__hint--unlocked' : ''}`}>
                                <div className="lab-env__hint-header">
                                    <span className="lab-env__hint-level">{hint.level}</span>
                                    <Badge variant={hint.unlocked ? 'success' : 'default'} size="sm">
                                        {hint.unlocked ? 'Unlocked' : `-${hint.cost} XP`}
                                    </Badge>
                                </div>
                                {hint.unlocked && hint.text && (
                                    <p className="lab-env__hint-text">{hint.text}</p>
                                )}
                                {!hint.unlocked && (
                                    <button className="btn btn-secondary lab-env__hint-btn">Unlock Hint</button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Flag Submit */}
                <div className="lab-env__flag">
                    <h4 className="lab-env__section-title">Submit Flag</h4>
                    <form className="lab-env__flag-form" onSubmit={handleFlagSubmit}>
                        <input
                            type="text"
                            className={`lab-env__flag-input ${flagStatus !== 'idle' ? `lab-env__flag-input--${flagStatus}` : ''}`}
                            placeholder="GV{your_flag_here}"
                            value={flagInput}
                            onChange={(e) => setFlagInput(e.target.value)}
                        />
                        <button type="submit" className="btn btn-primary lab-env__flag-btn">Submit</button>
                    </form>
                </div>
            </div>

            {/* Terminal Panel */}
            <div className="lab-env__terminal">
                <div className="lab-env__terminal-header">
                    <div className="lab-env__terminal-dots">
                        <span className="lab-env__terminal-dot" style={{ background: '#ef4444' }} />
                        <span className="lab-env__terminal-dot" style={{ background: '#eab308' }} />
                        <span className="lab-env__terminal-dot" style={{ background: '#22c55e' }} />
                    </div>
                    <span className="lab-env__terminal-title">Terminal — 10.10.1.42</span>
                </div>
                <div className="lab-env__terminal-body">
                    {terminalLines.map((line, i) => (
                        <div key={i} className={`lab-env__terminal-line lab-env__terminal-line--${line.type}`}>
                            {line.text}
                        </div>
                    ))}
                    <span className="lab-env__terminal-cursor">█</span>
                </div>
            </div>
        </div>
    );
};

export default LabEnvironment;
