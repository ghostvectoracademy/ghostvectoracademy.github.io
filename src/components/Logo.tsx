import './Logo.css';

interface LogoProps {
    size?: number;
}

const Logo = ({ size = 36 }: LogoProps) => {
    return (
        <div className="logo-hex" style={{ width: size, height: size }}>
            <svg
                viewBox="0 0 100 100"
                width={size}
                height={size}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="hex-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6366F1" />
                        <stop offset="100%" stopColor="#4F46E5" />
                    </linearGradient>
                </defs>

                {/* Hexagon outline */}
                <polygon
                    points="50,3 93,28 93,72 50,97 7,72 7,28"
                    stroke="url(#hex-gradient)"
                    strokeWidth="3"
                    fill="rgba(79, 70, 229, 0.08)"
                />

                {/* Stylized G */}
                <text
                    x="50"
                    y="62"
                    textAnchor="middle"
                    fontFamily="'Orbitron', 'Space Grotesk', sans-serif"
                    fontSize="46"
                    fontWeight="800"
                    fill="url(#hex-gradient)"
                >
                    G
                </text>
            </svg>
        </div>
    );
};

export default Logo;
