import React from 'react';

interface Tool {
  name: string;
  icon: React.ReactNode;
}

export const AiToolsSection: React.FC = () => {
  const tools: Tool[] = [
    {
      name: 'CLAUDE',
      icon: (
        <svg width="42" height="42" viewBox="0 0 24 24" fill="none">
          {/* Anthropic / Claude sunburst icon */}
          <path
            d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93"
            stroke="#D97706"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="3" fill="#D97706" />
        </svg>
      ),
    },
    {
      name: 'FIGMA',
      icon: (
        <svg width="34" height="42" viewBox="0 0 38 57" fill="none">
          <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
          <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
          <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
          <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
          <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
        </svg>
      ),
    },
    {
      name: 'CURSOR',
      icon: (
        <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
          <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" fill="#222" stroke="var(--ink-primary)" strokeWidth="1.5" />
          <polygon points="12,2 22,8.5 12,15 2,8.5" fill="#333" />
          <polygon points="12,15 22,8.5 22,15.5 12,22" fill="#1A1A1A" />
        </svg>
      ),
    },
    {
      name: 'SUPABASE',
      icon: (
        <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
          <path
            d="M13.2 2.5L2.8 14.8C2.3 15.4 2.8 16.3 3.6 16.3H11.5L9.8 21.8C9.5 22.8 10.9 23.3 11.4 22.4L21.2 10.7C21.7 10.1 21.2 9.2 20.4 9.2H12.8L14.3 3.4C14.6 2.4 13.5 1.8 13.2 2.5Z"
            fill="#3ECF8E"
          />
        </svg>
      ),
    },
    {
      name: 'VERCEL',
      icon: (
        <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
          <polygon points="12,3 22,21 2,21" fill="var(--ink-primary)" />
        </svg>
      ),
    },
  ];

  return (
    <section className="fig-section">
      <div className="site-shell">
        <div className="fig-bracket-top-left" />
        <div className="fig-bracket-top-right" />

        <div className="section-tag-badge mono">AI TOOLS</div>

        <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '1rem' }}>
          AI is part of how I <span className="hero-title-muted">design & build, every day.</span>
        </h2>
        <p style={{ fontSize: '1.15rem', color: 'var(--ink-secondary)', maxWidth: '680px', lineHeight: 1.5 }}>
          Not a novelty — a daily practice. These are the tools I reach for to move from a rough idea to a shipped, working product.
        </p>

        <div className="tools-grid">
          {tools.map((t, idx) => (
            <div key={idx} className="tool-card">
              <div className="tool-icon-box">{t.icon}</div>
              <div className="tool-name mono">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
