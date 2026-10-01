import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <main style={{ padding: '3.5rem 0 5rem' }}>
      <div className="site-shell">
        {/* Contact Header */}
        <section>
          <div className="mono" style={{ fontSize: '0.75rem', color: 'var(--accent-amber-deep)', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
            CONTACT — PRISTINA · CET EUROPE
          </div>
          <h1 className="hero-title" style={{ marginBottom: '1rem' }}>
            Let's talk
          </h1>
          <p className="hero-desc-text" style={{ maxWidth: '640px' }}>
            Product design, systems, brand & AI workflows — based in Pristina, working with teams everywhere.
          </p>
        </section>

        {/* 5 Action Cards */}
        <section className="contact-action-cards">
          <a
            href="mailto:hello@pleurat.com"
            className="contact-card email-card"
          >
            <div className="contact-card-label mono">EMAIL</div>
            <div className="contact-card-val">
              hello@pleurat.com
            </div>
          </a>

          <a
            href="https://www.awwwards.com/Pleurats/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-card-label mono">AWWWARDS</div>
            <div className="contact-card-val">
              /Pleurats <ArrowUpRight size={16} />
            </div>
          </a>

          <a
            href="https://dribbble.com/Pleurat"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-card-label mono">DRIBBBLE</div>
            <div className="contact-card-val">
              /Pleurat <ArrowUpRight size={16} />
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/pleuratshala/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-card-label mono">LINKEDIN</div>
            <div className="contact-card-val">
              /pleuratshala <ArrowUpRight size={16} />
            </div>
          </a>

          <a
            href="https://themeforest.net/user/pleuratt"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-card-label mono">THEMEFOREST</div>
            <div className="contact-card-val">
              /pleuratt <ArrowUpRight size={16} />
            </div>
          </a>
        </section>

        {/* Night Scene Architectural House Illustration */}
        <section style={{ marginTop: '4rem', width: '100%', overflow: 'hidden' }}>
          <svg
            viewBox="0 0 1100 360"
            style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#0B0D0C', borderRadius: '8px' }}
          >
            {/* Ground line */}
            <line x1="0" y1="300" x2="1100" y2="300" stroke="#333" strokeWidth="1.5" />

            {/* Stars / ambient dots */}
            <circle cx="120" cy="50" r="1.5" fill="#FFF" opacity="0.6" />
            <circle cx="340" cy="30" r="1.5" fill="#FFF" opacity="0.4" />
            <circle cx="780" cy="40" r="1.5" fill="#FFF" opacity="0.7" />
            <circle cx="950" cy="65" r="1.5" fill="#FFF" opacity="0.5" />

            {/* Background houses silhouette */}
            <polygon points="120,300 120,240 220,180 320,240 320,300" fill="#131618" />
            <polygon points="780,300 780,230 890,190 980,240 980,300" fill="#131618" />

            {/* Street Lamp 1 (Left) */}
            <g transform="translate(160, 160)">
              <line x1="20" y1="40" x2="20" y2="140" stroke="#555" strokeWidth="2" />
              <path d="M 20 40 Q 20 20 5 20" stroke="#555" strokeWidth="2" fill="none" />
              <polygon points="0,20 12,20 16,30 -4,30" fill="#FBBF24" />
              {/* Glowing warm cone of light */}
              <polygon points="6,30 -40,140 60,140" fill="#FDE047" opacity="0.12" />
            </g>

            {/* Bicycle parked on left */}
            <g transform="translate(100, 270)">
              <circle cx="15" cy="20" r="9" stroke="#666" strokeWidth="1.5" fill="none" />
              <circle cx="45" cy="20" r="9" stroke="#666" strokeWidth="1.5" fill="none" />
              <line x1="15" y1="20" x2="30" y2="10" stroke="#666" strokeWidth="1.5" />
              <line x1="45" y1="20" x2="30" y2="10" stroke="#666" strokeWidth="1.5" />
              <line x1="30" y1="10" x2="30" y2="4" stroke="#666" strokeWidth="1.5" />
            </g>

            {/* Red Fire Hydrant */}
            <g transform="translate(70, 275)">
              <rect x="0" y="8" width="10" height="17" fill="#EF4444" rx="1" />
              <circle cx="5" cy="8" r="5" fill="#DC2626" />
              <line x1="-2" y1="15" x2="12" y2="15" stroke="#991B1B" strokeWidth="2" />
            </g>

            {/* Wooden Fence */}
            {Array.from({ length: 18 }).map((_, i) => (
              <g key={i} transform={`translate(${240 + i * 36}, 265)`}>
                <line x1="0" y1="0" x2="0" y2="35" stroke="#444" strokeWidth="2" />
                <line x1="-18" y1="12" x2="18" y2="12" stroke="#444" strokeWidth="1" />
                <line x1="-18" y1="24" x2="18" y2="24" stroke="#444" strokeWidth="1" />
              </g>
            ))}

            {/* Central House */}
            <g transform="translate(370, 150)">
              {/* Roof */}
              <polygon points="0,50 180,5 360,50" fill="#3A3835" />
              <rect x="230" y="0" width="18" height="25" fill="#4B4845" />

              {/* Main Wall */}
              <rect x="20" y="50" width="320" height="100" fill="#242321" />

              {/* Left Window (warm lit interior) */}
              <rect x="55" y="70" width="55" height="45" fill="#FEF08A" opacity="0.3" stroke="#555" strokeWidth="1.5" />
              <line x1="82" y1="70" x2="82" y2="115" stroke="#555" />
              <line x1="55" y1="92" x2="110" y2="92" stroke="#555" />

              {/* Right Window (warm lit interior) */}
              <rect x="245" y="70" width="55" height="45" fill="#FEF08A" opacity="0.3" stroke="#555" strokeWidth="1.5" />
              <line x1="272" y1="70" x2="272" y2="115" stroke="#555" />
              <line x1="245" y1="92" x2="300" y2="92" stroke="#555" />

              {/* Porch light */}
              <circle cx="180" cy="58" r="4" fill="#F59E0B" />
              <polygon points="180,62 135,150 225,150" fill="#FDE047" opacity="0.25" />

              {/* Open Glowing Amber Doorway */}
              <rect x="155" y="65" width="50" height="85" fill="#E69D46" rx="2" />
              <rect x="158" y="68" width="44" height="79" fill="#F5A623" />
              <text x="215" y="80" fill="#FFF" fontSize="10" fontFamily="var(--font-mono)">1</text>

              {/* Father with backpack at door */}
              <g transform="translate(145, 100)">
                <circle cx="10" cy="5" r="4.5" fill="#D89D78" />
                <rect x="6" y="10" width="9" height="22" fill="#52796F" rx="1" />
                <rect x="2" y="12" width="4" height="12" fill="#935116" />
                <line x1="8" y1="32" x2="8" y2="50" stroke="#2B3A42" strokeWidth="2.5" />
                <line x1="13" y1="32" x2="13" y2="50" stroke="#2B3A42" strokeWidth="2.5" />
              </g>

              {/* Little Daughter waiting inside door */}
              <g transform="translate(175, 115)">
                <circle cx="6" cy="4" r="3.5" fill="#D89D78" />
                <polygon points="3,8 9,8 11,26 1,26" fill="#F472B6" />
                <line x1="4" y1="26" x2="4" y2="35" stroke="#D89D78" strokeWidth="1.8" />
                <line x1="8" y1="26" x2="8" y2="35" stroke="#D89D78" strokeWidth="1.8" />
              </g>
            </g>

            {/* Street Lamp 2 (Right) */}
            <g transform="translate(900, 160)">
              <line x1="20" y1="40" x2="20" y2="140" stroke="#555" strokeWidth="2" />
              <path d="M 20 40 Q 20 20 35 20" stroke="#555" strokeWidth="2" fill="none" />
              <polygon points="28,20 40,20 44,30 24,30" fill="#FBBF24" />
              <polygon points="34,30 -15,140 85,140" fill="#FDE047" opacity="0.12" />
            </g>
          </svg>
        </section>
      </div>
    </main>
  );
};
