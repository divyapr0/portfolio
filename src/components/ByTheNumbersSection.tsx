import React from 'react';

interface ByTheNumbersProps {
  onNavigateProfile?: () => void;
}

export const ByTheNumbersSection: React.FC<ByTheNumbersProps> = ({ onNavigateProfile }) => {
  const metrics = [
    {
      val: '10+',
      label: 'Years designing',
      heightPx: 120,
      isAmber: true,
    },
    {
      val: '150+',
      label: 'Websites designed',
      heightPx: 260,
      isAmber: false,
    },
    {
      val: '50+',
      label: 'Products shipped',
      heightPx: 140,
      isAmber: false,
    },
    {
      val: '10+',
      label: 'Industries worked',
      heightPx: 95,
      isAmber: false,
    },
  ];

  return (
    <section className="fig-section">
      <div className="site-shell">
        <div className="fig-bracket-top-left" />
        <div className="fig-bracket-top-right" />

        <div className="section-tag-badge mono">BY THE NUMBERS</div>

        <div className="numbers-header">
          <h2>
            Ten years, <span className="hero-title-muted">by the numbers.</span>
          </h2>
          <p>
            Products shipped, teams joined, systems maintained — the decade counted rather than described.
          </p>
          <a
            href="#profile"
            className="numbers-link mono"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigateProfile) onNavigateProfile();
            }}
          >
            Read the full profile →
          </a>
        </div>

        <div className="numbers-chart-grid">
          {metrics.map((m, idx) => (
            <div key={idx} className="number-col">
              <div className="number-val">{m.val}</div>
              <div
                className={`number-bar hatch-pattern ${m.isAmber ? 'bar-amber-fill' : ''}`}
                style={{ height: `${m.heightPx}px` }}
              />
              <div className="number-label">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
