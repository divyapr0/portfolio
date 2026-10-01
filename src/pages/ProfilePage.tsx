import React from 'react';

export const ProfilePage: React.FC = () => {
  return (
    <main style={{ padding: '3.5rem 0 5rem' }}>
      <div className="site-shell">
        {/* Profile Headline */}
        <section style={{ maxWidth: '880px', margin: '0 auto 4rem', textAlign: 'center' }}>
          <h1
            style={{
              fontSize: 'clamp(1.8rem, 3.2vw, 3rem)',
              fontWeight: 700,
              lineHeight: 1.25,
              letterSpacing: '-0.025em',
            }}
          >
            Over the last decade, I've worked across startups and global companies, designing everything from websites to large-scale digital products.{' '}
            <span style={{ color: 'var(--ink-muted)' }}>
              Along the way, I've built brands, design systems, and AI workflows that help teams move faster and deliver better experiences to millions of users.
            </span>
          </h1>
        </section>

        {/* Cozy Home Studio Vector Illustration */}
        <section className="profile-illustration-box">
          <svg
            viewBox="0 0 1100 420"
            style={{ width: '100%', maxWidth: '1000px', height: 'auto' }}
          >
            {/* Floor line */}
            <line x1="50" y1="360" x2="1050" y2="360" stroke="var(--border-line)" strokeWidth="1.5" />

            {/* Rug */}
            <rect x="320" y="358" width="520" height="6" rx="3" fill="#B35D43" opacity="0.7" />

            {/* Left Bookshelf */}
            <g transform="translate(60, 200)">
              <rect x="0" y="0" width="70" height="160" fill="none" stroke="var(--ink-secondary)" strokeWidth="1.5" />
              {/* Shelves */}
              <line x1="0" y1="50" x2="70" y2="50" stroke="var(--ink-secondary)" strokeWidth="1.5" />
              <line x1="0" y1="100" x2="70" y2="100" stroke="var(--ink-secondary)" strokeWidth="1.5" />
              {/* Books */}
              {Array.from({ length: 6 }).map((_, i) => (
                <rect key={i} x={6 + i * 10} y={15} width="8" height="35" fill={i % 2 === 0 ? '#4A7C59' : '#C77E0A'} />
              ))}
              {Array.from({ length: 7 }).map((_, i) => (
                <rect key={i} x={5 + i * 9} y={65} width="7" height="35" fill={i % 3 === 0 ? '#4682B4' : '#E69D46'} />
              ))}
              {/* Vintage camera on top */}
              <rect x="20" y="-18" width="30" height="18" rx="2" fill="#333" />
              <circle cx="35" cy="-9" r="5" fill="#666" />
            </g>

            {/* Acoustic Guitar */}
            <g transform="translate(135, 240)">
              <ellipse cx="20" cy="90" rx="18" ry="24" fill="#C08041" stroke="var(--ink-primary)" strokeWidth="1.2" />
              <ellipse cx="20" cy="55" rx="13" ry="16" fill="#C08041" stroke="var(--ink-primary)" strokeWidth="1.2" />
              <circle cx="20" cy="70" r="6" fill="#2E1C11" />
              <rect x="18" y="0" width="4" height="55" fill="#7C4825" stroke="var(--ink-primary)" strokeWidth="1" />
            </g>

            {/* Sleeping Dog */}
            <g transform="translate(170, 335)">
              <ellipse cx="30" cy="16" rx="28" ry="12" fill="#D29966" stroke="var(--ink-primary)" strokeWidth="1" />
              <circle cx="10" cy="12" r="10" fill="#B57B4A" />
              {/* Floppy ear */}
              <ellipse cx="12" cy="18" rx="4" ry="7" fill="#6E4424" />
            </g>

            {/* Window with sun and trees */}
            <g transform="translate(230, 190)">
              <rect x="0" y="0" width="120" height="110" fill="#E8F4F8" stroke="var(--ink-secondary)" strokeWidth="1.5" />
              <line x1="60" y1="0" x2="60" y2="110" stroke="var(--ink-secondary)" strokeWidth="1" />
              <line x1="0" y1="55" x2="120" y2="55" stroke="var(--ink-secondary)" strokeWidth="1" />
              {/* Sun */}
              <circle cx="95" cy="30" r="10" fill="#FDE047" opacity="0.8" />
              {/* Rolling hill & tree */}
              <path d="M 0 90 Q 60 70 120 90 L 120 110 L 0 110 Z" fill="#BBDEFB" />
              <circle cx="35" cy="80" r="16" fill="#A7D7C5" />
              <line x1="35" y1="96" x2="35" y2="110" stroke="#795548" strokeWidth="2" />
            </g>

            {/* Plant */}
            <g transform="translate(290, 310)">
              <polygon points="10,50 30,50 35,25 5,25" fill="#D97757" />
              <path d="M 20 25 Q 10 5 0 12 Q 15 15 20 25" fill="#52796F" />
              <path d="M 20 25 Q 30 0 38 10 Q 25 15 20 25" fill="#52796F" />
            </g>

            {/* Father with backpack kneeling down */}
            <g transform="translate(330, 240)">
              {/* Head */}
              <circle cx="35" cy="15" r="9" fill="#F3C6A5" />
              <path d="M 26 12 Q 35 5 44 12 Q 35 8 26 12 Z" fill="#3D291D" />
              {/* Torso with green jacket */}
              <path d="M 26 24 L 44 24 L 40 55 L 28 55 Z" fill="#52796F" />
              {/* Backpack */}
              <rect x="18" y="27" width="9" height="24" rx="2" fill="#935116" />
              {/* Arm reaching out offering coffee/toy */}
              <path d="M 38 32 L 60 48" stroke="#52796F" strokeWidth="4" strokeLinecap="round" />
              <rect x="58" y="44" width="7" height="9" rx="1" fill="#E69D46" />
              {/* Kneeling legs */}
              <path d="M 28 55 L 20 90 L 45 90" stroke="#2B3A42" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path d="M 38 55 L 45 75 L 60 75" stroke="#2B3A42" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </g>

            {/* Little Daughter in pink dress */}
            <g transform="translate(415, 260)">
              {/* Hair / Head */}
              <circle cx="20" cy="12" r="8" fill="#F3C6A5" />
              <circle cx="20" cy="8" r="9" fill="#D97706" />
              {/* Pink Dress */}
              <polygon points="12,24 28,24 34,60 6,60" fill="#FBCFE8" stroke="#F472B6" strokeWidth="1" />
              {/* Legs */}
              <line x1="16" y1="60" x2="16" y2="70" stroke="#F3C6A5" strokeWidth="3" />
              <line x1="24" y1="60" x2="24" y2="70" stroke="#F3C6A5" strokeWidth="3" />
              {/* Little arms */}
              <line x1="14" y1="28" x2="6" y2="38" stroke="#F3C6A5" strokeWidth="3" strokeLinecap="round" />
            </g>

            {/* Big Wooden Desk with Laptop */}
            <g transform="translate(480, 230)">
              {/* Desk Top */}
              <rect x="0" y="70" width="170" height="8" rx="2" fill="#8D5B4C" />
              {/* Desk Legs / Drawers */}
              <rect x="15" y="78" width="6" height="52" fill="#6E4438" />
              <rect x="130" y="78" width="35" height="52" fill="#7D4E41" />
              <line x1="130" y1="95" x2="165" y2="95" stroke="#5C372D" />
              <line x1="130" y1="112" x2="165" y2="112" stroke="#5C372D" />

              {/* Laptop Riser Stand */}
              <polygon points="50,70 65,52 95,52 110,70" fill="#A8A29E" />

              {/* Laptop Screen */}
              <rect x="42" y="10" width="76" height="46" rx="3" fill="#1E293B" stroke="#64748B" strokeWidth="1" />
              <rect x="46" y="14" width="68" height="38" fill="#0F172A" />
              <rect x="50" y="18" width="22" height="30" fill="#1E293B" />
              <rect x="76" y="18" width="34" height="18" fill="#E69D46" opacity="0.8" />

              {/* Desk Lamp */}
              <path d="M 15 70 L 15 25 L 35 25" stroke="#666" strokeWidth="2" fill="none" />
              <polygon points="30,22 45,15 45,35 30,28" fill="#F59E0B" />
              {/* Warm light cone */}
              <polygon points="45,18 100,70 20,70 45,32" fill="#FEF08A" opacity="0.15" />

              {/* Steaming Mug */}
              <rect x="25" y="58" width="8" height="12" rx="1" fill="#E5E7EB" />
              <path d="M 28 54 Q 30 50 28 46" stroke="#999" strokeWidth="1" fill="none" />
            </g>

            {/* Cozy Sofa with sleeping cat */}
            <g transform="translate(680, 240)">
              {/* Backrest */}
              <rect x="0" y="20" width="140" height="50" rx="4" fill="#7E9AA6" />
              {/* Seat cushion */}
              <rect x="-10" y="65" width="160" height="25" rx="3" fill="#6B8894" />
              {/* Armrests */}
              <rect x="-18" y="45" width="16" height="45" rx="3" fill="#587480" />
              <rect x="142" y="45" width="16" height="45" rx="3" fill="#587480" />

              {/* Sticky notes on sofa side */}
              <rect x="-12" y="55" width="8" height="8" fill="#FDE047" transform="rotate(5)" />

              {/* Sleeping Cat curled on sofa back */}
              <ellipse cx="110" cy="18" rx="14" ry="9" fill="#E08352" />
              <circle cx="98" cy="16" r="6" fill="#E08352" />
              <polygon points="94,11 97,6 99,11" fill="#B45309" />
              <polygon points="100,11 103,6 105,11" fill="#B45309" />
            </g>

            {/* Standing Floor Lamp */}
            <g transform="translate(860, 220)">
              <line x1="20" y1="20" x2="20" y2="140" stroke="#78716C" strokeWidth="2" />
              <polygon points="20,140 5,140 35,140" stroke="#78716C" strokeWidth="3" />
              <polygon points="5,20 35,20 28,0 12,0" fill="#FBBF24" />
            </g>
          </svg>
        </section>

        {/* Retrospective & Principles */}
        <section style={{ maxWidth: '820px', margin: '4rem auto 0' }}>
          <div className="section-tag-badge mono" style={{ marginBottom: '1.5rem' }}>
            PRINCIPLES
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-sheet)', border: '1px solid var(--border-line)', borderRadius: '4px' }}>
              <div className="mono" style={{ fontSize: '0.75rem', color: 'var(--accent-amber-deep)', marginBottom: '0.5rem' }}>
                01 · SYSTEM
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                Clarity before flair
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--ink-secondary)', lineHeight: 1.45 }}>
                A product that is intuitive to use will always outlast superficial visual novelties.
              </p>
            </div>

            <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-sheet)', border: '1px solid var(--border-line)', borderRadius: '4px' }}>
              <div className="mono" style={{ fontSize: '0.75rem', color: 'var(--accent-amber-deep)', marginBottom: '0.5rem' }}>
                02 · CODE
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                Code is design's surface
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--ink-secondary)', lineHeight: 1.45 }}>
                Designers who write code eliminate the translation gap between mockup and shipping product.
              </p>
            </div>

            <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-sheet)', border: '1px solid var(--border-line)', borderRadius: '4px' }}>
              <div className="mono" style={{ fontSize: '0.75rem', color: 'var(--accent-amber-deep)', marginBottom: '0.5rem' }}>
                03 · AI
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                Agents accelerate taste
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--ink-secondary)', lineHeight: 1.45 }}>
                AI does the heavy lifting of boilerplate, leaving more time to refine craft and user empathy.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
