import React, { useEffect, useState, useRef } from 'react';

interface Milestone {
  id: string;
  title: string;
  role: string;
  posPercent: number;
}

const MILESTONES: Milestone[] = [
  { id: '01', title: 'Hoopit AI', role: 'Senior Product Designer', posPercent: 12 },
  { id: '02', title: 'Sena Studio', role: 'Design Systems Lead', posPercent: 28 },
  { id: '04', title: 'FourTwoThree', role: 'Product Designer', posPercent: 46 },
  { id: '05', title: 'Otee Systems', role: 'Design Architect', posPercent: 64 },
  { id: '07', title: 'Nacew AI', role: 'Product Designer', posPercent: 82 },
];

export const CommuterTrack: React.FC = () => {
  const [characterX, setCharacterX] = useState<number>(12); // percentage
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [walkPhase, setWalkPhase] = useState<number>(0);
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    let currentX = 12;
    let stepCount = 0;

    const animate = () => {
      // Commuter walks slowly from left to right across the skyline
      currentX += 0.055;
      if (currentX > 94) {
        currentX = 4;
      }
      setCharacterX(currentX);

      // Walking leg cycle (phase alternates)
      stepCount += 0.12;
      setWalkPhase(stepCount);

      // Find closest milestone
      let closest = 0;
      let minDiff = 999;
      MILESTONES.forEach((m, idx) => {
        const diff = Math.abs(m.posPercent - currentX);
        if (diff < minDiff) {
          minDiff = diff;
          closest = idx;
        }
      });
      setActiveIdx(closest);

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  const activeMilestone = MILESTONES[activeIdx];
  const legSwing1 = Math.sin(walkPhase) * 14;
  const legSwing2 = -Math.sin(walkPhase) * 14;
  const bodyBob = Math.abs(Math.sin(walkPhase * 2)) * 2.5;

  return (
    <div className="commuter-section">
      <div className="site-shell">
        <div className="commuter-header-line mono">
          <div className="commuter-label-active">
            <span className="commuter-num">{activeMilestone.id}</span>
            <span className="commuter-title">{activeMilestone.title}</span>
            <span className="commuter-role">{activeMilestone.role}</span>
          </div>
          <div className="commuter-next">
            <span>NEXT PROJECTS</span>
            <span style={{ color: 'var(--accent-amber)' }}>📍</span>
          </div>
        </div>

        <div className="commuter-canvas-container">
          <svg
            viewBox="0 0 1200 90"
            preserveAspectRatio="none"
            style={{ width: '100%', height: '100%', display: 'block' }}
          >
            {/* Ground / street line */}
            <line
              x1="0"
              y1="75"
              x2="1200"
              y2="75"
              stroke="var(--border-line)"
              strokeWidth="1.5"
            />

            {/* City Skyline Buildings */}
            <g stroke="var(--ink-muted)" strokeWidth="1" fill="none" opacity="0.6">
              {/* Building 1 */}
              <rect x="40" y="30" width="40" height="45" />
              <rect x="50" y="38" width="8" height="10" />
              <rect x="62" y="38" width="8" height="10" />
              <rect x="50" y="54" width="8" height="10" />
              <rect x="62" y="54" width="8" height="10" />

              {/* Tree & Lamp */}
              <circle cx="110" cy="55" r="9" />
              <line x1="110" y1="64" x2="110" y2="75" />
              <line x1="135" y1="45" x2="135" y2="75" />
              <circle cx="135" cy="45" r="2.5" fill="var(--accent-amber)" />

              {/* Building 2 - High Rise */}
              <rect x="180" y="15" width="45" height="60" />
              {Array.from({ length: 4 }).map((_, r) => (
                <React.Fragment key={r}>
                  <rect x="190" y={22 + r * 12} width="8" height="7" />
                  <rect x="206" y={22 + r * 12} width="8" height="7" />
                </React.Fragment>
              ))}

              {/* Bicycle */}
              <circle cx="260" cy="71" r="4" />
              <circle cx="274" cy="71" r="4" />
              <line x1="260" y1="71" x2="267" y2="66" />
              <line x1="267" y1="66" x2="274" y2="71" />
              <line x1="267" y1="66" x2="267" y2="62" />

              {/* Building 3 */}
              <rect x="330" y="24" width="55" height="51" />
              <rect x="342" y="32" width="10" height="12" />
              <rect x="362" y="32" width="10" height="12" />
              <rect x="342" y="50" width="10" height="12" />
              <rect x="362" y="50" width="10" height="12" />

              {/* Building 4 */}
              <rect x="440" y="38" width="48" height="37" />
              <circle cx="510" cy="52" r="10" />
              <line x1="510" y1="62" x2="510" y2="75" />

              {/* High rise 5 */}
              <rect x="570" y="18" width="42" height="57" />
              {Array.from({ length: 3 }).map((_, r) => (
                <rect key={r} x="582" y={26 + r * 14} width="18" height="8" />
              ))}

              {/* House 6 */}
              <polygon points="660,40 685,22 710,40" />
              <rect x="665" y="40" width="40" height="35" />
              <rect x="680" y="52" width="10" height="23" />

              {/* Building 7 */}
              <rect x="760" y="20" width="40" height="55" />
              <line x1="825" y1="42" x2="825" y2="75" />
              <circle cx="825" cy="42" r="2.5" fill="var(--accent-amber)" />

              {/* Tall Tower 8 */}
              <rect x="880" y="12" width="50" height="63" />
              {Array.from({ length: 4 }).map((_, r) => (
                <React.Fragment key={r}>
                  <rect x="890" y={20 + r * 12} width="10" height="7" />
                  <rect x="910" y={20 + r * 12} width="10" height="7" />
                </React.Fragment>
              ))}

              {/* Suburban houses */}
              <rect x="980" y="42" width="55" height="33" />
              <circle cx="1060" cy="56" r="8" />
              <line x1="1060" y1="64" x2="1060" y2="75" />
              <rect x="1100" y="30" width="45" height="45" />
            </g>

            {/* Milestone pins */}
            {MILESTONES.map((m) => {
              const xPos = (m.posPercent / 100) * 1200;
              return (
                <g key={m.id} transform={`translate(${xPos}, 60)`}>
                  <circle
                    cx="0"
                    cy="0"
                    r="4"
                    fill="var(--accent-amber)"
                    opacity="0.85"
                  />
                  <line
                    x1="0"
                    y1="4"
                    x2="0"
                    y2="15"
                    stroke="var(--accent-amber)"
                    strokeWidth="1.5"
                  />
                </g>
              );
            })}

            {/* Procedural Animated Walking Commuter */}
            <g
              transform={`translate(${(characterX / 100) * 1200}, ${64 - bodyBob})`}
            >
              {/* Shadow */}
              <ellipse
                cx="0"
                cy={12 + bodyBob}
                rx="7"
                ry="1.8"
                fill="rgba(0, 0, 0, 0.2)"
              />

              {/* Legs with swinging stride */}
              <line
                x1="0"
                y1="3"
                x2={legSwing1 * 0.4}
                y2="11"
                stroke="#16140E"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="0"
                y1="3"
                x2={legSwing2 * 0.4}
                y2="11"
                stroke="#16140E"
                strokeWidth="2"
                strokeLinecap="round"
              />

              {/* Torso / Jacket */}
              <path
                d="M -3 -6 L 3 -6 L 2 3 L -2 3 Z"
                fill="#4E6857"
              />

              {/* Backpack */}
              <rect
                x="-6.5"
                y="-5"
                width="3.5"
                height="7"
                rx="1"
                fill="#B86E3C"
              />

              {/* Head */}
              <circle
                cx="0.5"
                cy="-10"
                r="3"
                fill="#D89D78"
              />
              {/* Hair */}
              <path
                d="M -2.5 -11 Q 0 -14 3.5 -11 Q 1 -12 -2.5 -11 Z"
                fill="#3A281E"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};
