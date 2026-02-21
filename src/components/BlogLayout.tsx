import Badge from './ui/Badge';
import './BlogLayout.css';

const tocItems = [
    { id: 'intro', label: 'Introduction', active: true },
    { id: 'recon', label: 'Reconnaissance', active: false },
    { id: 'exploit', label: 'Exploitation', active: false },
    { id: 'privesc', label: 'Privilege Escalation', active: false },
    { id: 'conclusion', label: 'Conclusion', active: false },
];

const BlogLayout = () => {
    return (
        <div className="blog-layout">
            {/* Sticky TOC */}
            <aside className="blog-layout__toc">
                <span className="blog-layout__toc-title">ON THIS PAGE</span>
                <nav className="blog-layout__toc-nav">
                    {tocItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`blog-layout__toc-item ${item.active ? 'blog-layout__toc-item--active' : ''}`}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
                <div className="blog-layout__toc-meta">
                    <span>⏱ 12 min read · 8 min practice</span>
                </div>
            </aside>

            {/* Main Content */}
            <article className="blog-layout__content">
                {/* Blog Header */}
                <div className="blog-layout__header">
                    <div className="blog-layout__tags">
                        <Badge variant="accent" size="sm">Web Security</Badge>
                        <Badge difficulty="Shadow" size="sm">Shadow</Badge>
                    </div>
                    <h1 className="blog-layout__title">Understanding Path Traversal Vulnerabilities in Apache</h1>
                    <p className="blog-layout__meta">
                        By <span className="text-accent">ghostwriter</span> · Feb 21, 2026 · Updated 2 days ago
                    </p>
                </div>

                {/* Content Sections */}
                <div className="blog-layout__body">
                    <p className="blog-layout__text">
                        Path traversal vulnerabilities allow attackers to access files and directories outside the intended
                        web root. In this interactive blog, we'll explore CVE-2021-41773, a critical vulnerability in
                        Apache HTTP Server 2.4.49 that allows remote code execution.
                    </p>

                    {/* Callout — Info */}
                    <div className="blog-layout__callout blog-layout__callout--info">
                        <span className="blog-layout__callout-icon">ℹ️</span>
                        <div>
                            <strong>Prerequisites:</strong> Basic understanding of HTTP, Linux file system, and command line.
                        </div>
                    </div>

                    <h2 className="blog-layout__heading" id="recon">Reconnaissance</h2>
                    <p className="blog-layout__text">
                        First, let's identify the target. Run an Nmap scan to discover open ports and services.
                        Pay close attention to the Apache version — it's the key to this exploit.
                    </p>

                    {/* Terminal Embed */}
                    <div className="blog-layout__terminal">
                        <div className="blog-layout__terminal-header">
                            <div className="blog-layout__terminal-dots">
                                <span style={{ background: '#ef4444' }} />
                                <span style={{ background: '#eab308' }} />
                                <span style={{ background: '#22c55e' }} />
                            </div>
                            <span className="blog-layout__terminal-title">Interactive Terminal</span>
                            <Badge variant="success" size="sm" dot dotColor="#22c55e">Connected</Badge>
                        </div>
                        <div className="blog-layout__terminal-body">
                            <div className="blog-layout__terminal-line blog-layout__terminal-line--cmd">$ nmap -sV -sC 10.10.1.42</div>
                            <div className="blog-layout__terminal-line">PORT   STATE SERVICE VERSION</div>
                            <div className="blog-layout__terminal-line">22/tcp open  ssh     OpenSSH 8.2p1</div>
                            <div className="blog-layout__terminal-line">80/tcp open  http    Apache 2.4.49</div>
                            <span className="blog-layout__terminal-cursor">█</span>
                        </div>
                    </div>

                    {/* Challenge Box */}
                    <div className="blog-layout__challenge">
                        <div className="blog-layout__challenge-header">
                            <span className="blog-layout__challenge-icon">🎯</span>
                            <h4 className="blog-layout__challenge-title">Challenge: Identify the Vulnerability</h4>
                            <Badge variant="warning" size="sm">+25 XP</Badge>
                        </div>
                        <p className="blog-layout__challenge-text">
                            Based on the Nmap scan results, identify the CVE number associated with the Apache version found.
                            Research the vulnerability and enter the CVE ID below.
                        </p>
                        <div className="blog-layout__challenge-input-row">
                            <input
                                type="text"
                                className="blog-layout__challenge-input"
                                placeholder="CVE-XXXX-XXXXX"
                                readOnly
                            />
                            <button className="btn btn-primary blog-layout__challenge-btn">Submit</button>
                        </div>
                    </div>

                    {/* Callout — Warning */}
                    <div className="blog-layout__callout blog-layout__callout--warning">
                        <span className="blog-layout__callout-icon">⚠️</span>
                        <div>
                            <strong>Legal Notice:</strong> Only test these techniques on systems you own or have explicit
                            permission to test. Unauthorized access is a criminal offense.
                        </div>
                    </div>

                    {/* Callout — Tip */}
                    <div className="blog-layout__callout blog-layout__callout--tip">
                        <span className="blog-layout__callout-icon">💡</span>
                        <div>
                            <strong>Pro Tip:</strong> Always check the exact patch version. Minor version differences can
                            determine whether a vulnerability exists.
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default BlogLayout;
