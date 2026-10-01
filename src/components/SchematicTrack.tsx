import React, { useEffect, useState, useRef } from 'react';

interface SchematicChip {
  id: string;
  name: string;
  sub: string;
  xPercent: number;
}

const CHIPS: SchematicChip[] = [
  { id: '08', name: 'Grok', sub: 'Daily kit', xPercent: 18 },
  { id: '09', name: 'GitHub', sub: 'Version trunk', xPercent: 36 },
  { id: '10', name: 'Tailwind', sub: 'Utility core', xPercent: 54 },
  { id: '11', name: 'Claude', sub: 'Reasoning agent', xPercent: 72 },
  { id: '12', name: 'Figma', sub: 'Design source', xPercent: 90 },
];

interface SchematicTrackProps {
  onExplore?: () => void;
}

export const SchematicTrack: React.FC<SchematicTrackProps> = ({ onExplore }) => {
  const [walkerX, setWalkerX] = useState<number>(18);
  const [activeChipIdx, setActiveChipIdx] = useState<number>(0);
  const [phase, setPhase] = useState<number>(0);
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    let currentX = 18;
    let stepCount = 0;

    const animate = () => {
      currentX += 0.05;
      if (currentX > 94) currentX = 5;
      setWalkerX(currentX);

      stepCount += 0.12;
      setPhase(stepCount);

      let closest = 0;
      let minDiff = 999;
      CHIPS.forEach((c, idx) => {
        const diff = Math.abs(c.xPercent - currentX);
        if (diff < minDiff) {
          minDiff = diff;
          closest = idx;
        }
      });
      setActiveChipIdx(closest);

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  const activeChip = CHIPS[activeChipIdx];
  const legSwing1 = Math.sin(phase) * 12;
  const legSwing2 = -Math.sin(phase) * 12;
  const bodyBob = Math.abs(Math.sin(phase * 2)) * 2;

  return (
    <div style={{ padding: '4rem 0 2rem', textAlign: 'center' }}>
      <div className="site-shell">
        <button
          className="btn-primary"
          style={{ marginBottom: '2.5rem', padding: '0.9rem 2.2rem', fontSize: '1rem' }}
          onClick={onExplore}
        >
          Explore portfolio ↗
        </button>

        <div className="commuter-header-line mono" style={{ justifyContent: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <span className="commuter-num">{activeChip.id}</span>
          <span className="commuter-title">{activeChip.name}</span>
          <span className="commuter-role">{activeChip.sub}</span>
        </div>

        <div style={{ position: 'relative', width: '100%', height: '110px' }}>
          <svg
            viewBox="0 0 1200 110"
            preserveAspectRatio="none"
            style={{ width: '100%', height: '100%', display: 'block' }}
          >
            {/* PCB Circuit traces */}
            <g stroke="var(--border-line)" strokeWidth="1.2" fill="none">
              {/* Main bus line */}
              <line x1="0" y1="80" x2="1200" y2="80" strokeWidth="1.5" />

              {/* Upper circuit branches */}
              <polyline points="100,80 140,45 220,45" />
              <polyline points="380,80 420,35 500,35" />
              <polyline points="680,80 720,40 800,40" />
              <polyline points="940,80 970,50 1060,50" />

              {/* Electronic Components & Resistors */}
              {/* R12 */}
              <path d="M 120 76 L 123 72 L 127 80 L 131 72 L 135 80 L 138 76" strokeWidth="1.5" />
              {/* J1 Jumper coil */}
              <path d="M 520 76 Q 525 70 530 76 Q 535 82 540 76" strokeWidth="1.5" />
              {/* C9 Capacitor */}
              <line x1="440" y1="72" x2="440" y2="84" strokeWidth="2" stroke="var(--ink-primary)" />
              <line x1="446" y1="72" x2="446" y2="84" strokeWidth="2" stroke="var(--ink-primary)" />
            </g>

            {/* Test Points & Vias */}
            {[60, 160, 280, 480, 620, 760, 880, 1020, 1140].map((x, i) => (
              <circle
                key={i}
                cx={x}
                cy={80}
                r="3"
                fill="var(--bg-paper)"
                stroke="var(--ink-primary)"
                strokeWidth="1.2"
              />
            ))}

            {/* Component IC Chips */}
            {CHIPS.map((chip) => {
              const x = (chip.xPercent / 100) * 1200;
              const isHighlight = chip.id === activeChip.id;
              return (
                <g key={chip.id} transform={`translate(${x - 45}, 48)`}>
                  <rect
                    x="0"
                    y="0"
                    width="90"
                    height="32"
                    rx="3"
                    fill={isHighlight ? 'var(--accent-amber)' : 'var(--bg-card)'}
                    stroke="var(--ink-primary)"
                    strokeWidth="1.2"
                    style={{ transition: 'fill 0.3s ease' }}
                  />
                  {/* IC Pins */}
                  {Array.from({ length: 5 }).map((_, p) => (
                    <line
                      key={p}
                      x1={15 + p * 15}
                      y1="32"
                      x2={15 + p * 15}
                      y2="36"
                      stroke="var(--ink-primary)"
                      strokeWidth="1"
                    />
                  ))}
                  <text
                    x="45"
                    y="20"
                    textAnchor="middle"
                    fill="#16140E"
                    fontFamily="var(--font-mono)"
                    fontSize="11"
                    fontWeight="600"
                  >
                    {chip.name}
                  </text>
                </g>
              );
            })}

            {/* Circuit Commuter Walker */}
            <g transform={`translate(${(walkerX / 100) * 1200}, ${68 - bodyBob})`}>
              <ellipse cx="0" cy={12 + bodyBob} rx="6" ry="1.5" fill="rgba(0,0,0,0.18)" />
              <line x1="0" y1="3" x2={legSwing1 * 0.35} y2="11" stroke="var(--ink-primary)" strokeWidth="2" strokeLinecap="round" />
              <line x1="0" y1="3" x2={legSwing2 * 0.35} y2="11" stroke="var(--ink-primary)" strokeWidth="2" strokeLinecap="round" />
              <rect x="-3" y="-6" width="6" height="9" rx="1" fill="var(--accent-amber-deep)" />
              <rect x="-6" y="-5" width="3" height="7" rx="1" fill="#4B5563" />
              <circle cx="0" cy="-10" r="3" fill="#E5E7EB" stroke="var(--ink-primary)" strokeWidth="1" />
              <circle cx="1.5" cy="-10.5" r="0.8" fill="#16140E" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};
