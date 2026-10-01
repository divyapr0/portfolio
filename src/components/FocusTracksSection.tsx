import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TrackItem {
  id: string;
  title: string;
  badge: string;
  desc: string;
}

const TRACKS_DATA: TrackItem[] = [
  {
    id: '01',
    title: 'Product Design',
    badge: '10+ YEARS',
    desc: 'Most aspects of design and business, end-to-end, while shipping a product.',
  },
  {
    id: '02',
    title: 'Design Systems',
    badge: '8+ YEARS',
    desc: 'Scalable token architectures, accessible component libraries, and cross-platform design cohesion.',
  },
  {
    id: '03',
    title: 'AI Workflows',
    badge: '3+ YEARS',
    desc: 'Agentic workflows, prompt-to-UI pipelines, and AI-native digital experiences that empower humans.',
  },
];

export const FocusTracksSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  const prevTrack = () => {
    setCurrentIdx((prev) => (prev === 0 ? TRACKS_DATA.length - 1 : prev - 1));
  };

  const nextTrack = () => {
    setCurrentIdx((prev) => (prev === TRACKS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = TRACKS_DATA[currentIdx];

  return (
    <section className="fig-section">
      <div className="site-shell">
        <div className="fig-bracket-top-left" />
        <div className="fig-bracket-top-right" />

        <div className="fig-header-row mono">
          <span>FIG. 004 — FOUR TRACKS, ONE BENCH</span>
          <span>WORKSPACE, AI, SYSTEMS, PRODUCT — OPEN ONE ON THE LEFT</span>
        </div>

        <div className="section-tag-badge mono">TRACKS</div>

        <div className="tracks-grid">
          {/* Isometric 3D Architectural Platform Illustration */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <svg
              viewBox="0 0 460 320"
              style={{ width: '100%', maxWidth: '420px', height: 'auto' }}
            >
              <g transform="translate(230, 80)">
                {/* Lower base platform */}
                {/* Isometric top surface */}
                <polygon
                  points="0,30 180,120 0,210 -180,120"
                  fill="var(--bg-paper-2)"
                  stroke="var(--border-line)"
                  strokeWidth="1.5"
                />
                {/* Platform front left side */}
                <polygon
                  points="-180,120 0,210 0,230 -180,140"
                  fill="var(--bg-tile)"
                  stroke="var(--border-line)"
                  strokeWidth="1.5"
                />
                {/* Platform front right side */}
                <polygon
                  points="0,210 180,120 180,140 0,230"
                  fill="var(--bg-paper)"
                  stroke="var(--border-line)"
                  strokeWidth="1.5"
                />

                {/* Grid dots on top surface */}
                {Array.from({ length: 5 }).map((_, r) =>
                  Array.from({ length: 5 }).map((_, c) => {
                    const u = (r - 2) * 28;
                    const v = (c - 2) * 28;
                    const isoX = u - v;
                    const isoY = 120 + (u + v) * 0.5;
                    return (
                      <circle
                        key={`${r}-${c}`}
                        cx={isoX}
                        cy={isoY}
                        r="1.5"
                        fill="var(--ink-muted)"
                        opacity="0.4"
                      />
                    );
                  })
                )}

                {/* Elevated 3D Box 1 (Cube) */}
                <g transform="translate(0, 45)">
                  {/* Top */}
                  <polygon
                    points="0,-40 60,-10 0,20 -60,-10"
                    fill="var(--bg-card)"
                    stroke="var(--ink-primary)"
                    strokeWidth="1.5"
                  />
                  {/* Left */}
                  <polygon
                    points="-60,-10 0,20 0,70 -60,40"
                    fill="var(--bg-paper-2)"
                    stroke="var(--ink-primary)"
                    strokeWidth="1.5"
                  />
                  {/* Right */}
                  <polygon
                    points="0,20 60,-10 60,40 0,70"
                    fill="var(--bg-tile)"
                    stroke="var(--ink-primary)"
                    strokeWidth="1.5"
                  />
                </g>

                {/* Smaller adjacent block */}
                <g transform="translate(65, 95)">
                  <polygon
                    points="0,-20 35,-2 0,16 -35,-2"
                    fill="var(--bg-card)"
                    stroke="var(--border-line)"
                    strokeWidth="1.2"
                  />
                  <polygon
                    points="-35,-2 0,16 0,38 -35,20"
                    fill="var(--bg-paper)"
                    stroke="var(--border-line)"
                    strokeWidth="1.2"
                  />
                  <polygon
                    points="0,16 35,-2 35,20 0,38"
                    fill="var(--bg-tile)"
                    stroke="var(--border-line)"
                    strokeWidth="1.2"
                  />
                </g>

                {/* Technical blueprint annotations */}
                <text x="-40" y="30" className="mono" fill="var(--ink-muted)" fontSize="10">U1</text>
                <text x="110" y="170" className="mono" fill="var(--ink-muted)" fontSize="10">ART</text>
                <text x="-140" y="195" className="mono" fill="var(--ink-muted)" fontSize="10">1440 · 12 COL</text>
              </g>
            </svg>
          </div>

          {/* Right Content & Interactive Carousel */}
          <div className="tracks-content-side">
            <h2>
              Primarily <span className="hero-title-muted">focused on</span>
            </h2>
            <p className="lead">
              Ten years of shipping, settled into three tracks that sharpen each other every day.
            </p>

            <div className="tracks-card-interactive">
              <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.4rem' }}>
                {current.title}
              </h3>
              <div
                className="mono"
                style={{
                  fontSize: '0.78rem',
                  color: 'var(--accent-amber-deep)',
                  fontWeight: 600,
                  marginBottom: '1rem',
                  letterSpacing: '0.06em',
                }}
              >
                {current.badge}
              </div>
              <p style={{ fontSize: '1.05rem', color: 'var(--ink-secondary)', lineHeight: 1.5 }}>
                {current.desc}
              </p>

              <div className="tracks-carousel-nav">
                <button
                  className="nav-arrow-btn"
                  onClick={prevTrack}
                  aria-label="Previous track"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  className="nav-arrow-btn"
                  onClick={nextTrack}
                  aria-label="Next track"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
