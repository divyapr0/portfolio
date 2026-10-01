import React from 'react';

interface TeamItem {
  id: string;
  name: string;
  role: string;
  desc: string;
}

export const TeamsSection: React.FC = () => {
  const teams: TeamItem[] = [
    {
      id: 'A6',
      name: 'ThemeForest',
      role: 'FRONTEND DEVELOPER & AUTHOR',
      desc: 'Built and sold website templates to 730+ happy clients worldwide.',
    },
    {
      id: 'A7',
      name: 'Nacew',
      role: 'PRODUCT DESIGNER',
      desc: 'Building and designing AI-powered products for millions of users.',
    },
    {
      id: 'A8',
      name: 'FourTwoThree',
      role: 'PRODUCT DESIGNER',
      desc: 'Designed an enterprise platform for measuring and reporting carbon footprints.',
    },
    {
      id: 'A9',
      name: 'Otee',
      role: 'PRODUCT DESIGNER',
      desc: 'An online laundry ecosystem — five surfaces unified on one design system.',
    },
    {
      id: 'A10',
      name: 'AI Journey',
      role: 'DESIGN & AI WORKFLOWS',
      desc: 'Ongoing experiments in designing, structuring and building alongside AI agents.',
    },
  ];

  return (
    <section className="fig-section" style={{ paddingBottom: '3rem' }}>
      <div className="site-shell">
        <div className="fig-bracket-top-left" />
        <div className="fig-bracket-top-right" />

        <div className="section-tag-badge mono">TEAMS</div>

        <div className="teams-grid">
          {teams.map((t) => (
            <div key={t.id} className="team-card">
              <div className="team-id mono">{t.id}</div>
              <div className="team-name">{t.name}</div>
              <div className="team-role mono">{t.role}</div>
              <p className="team-desc">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
