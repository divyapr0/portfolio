import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

interface ProjectColumn {
  id: string;
  title: string;
  type: string;
  desc: string;
  stats: string;
  color: string;
}

const PROJECTS: ProjectColumn[] = [
  {
    id: 'mindpath',
    title: 'MindPath',
    type: 'Website and Web App',
    desc: 'A hybrid clinical diagnostic platform combining expert clinicians with AI assessment protocols.',
    stats: '120k+ assessments · HIPAA Compliant',
    color: '#E0F2FE',
  },
  {
    id: 'otee',
    title: 'Otee',
    type: 'Web and Mobile apps',
    desc: 'An end-to-end on-demand laundry and garment care ecosystem spanning 5 interconnected digital surfaces.',
    stats: '5 Surfaces · 1 Unified Design System',
    color: '#FEF3C7',
  },
  {
    id: 'appello',
    title: 'Appello',
    type: 'Mobile App',
    desc: 'High-velocity field dispatch, live equipment telemetry and team coordination for enterprise contractors.',
    stats: '4.9★ App Store · 35k Active Teams',
    color: '#FEE2E2',
  },
  {
    id: 'valuehut',
    title: 'ValueHut',
    type: 'Website',
    desc: 'Bespoke corporate presence and agile transformation portal for leading technology consultancies.',
    stats: 'Awwwards Site of the Day nominee',
    color: '#E0E7FF',
  },
  {
    id: 'codex',
    title: 'Codex',
    type: 'SaaS',
    desc: 'Developer documentation engine that automatically updates as codebases evolve and merge.',
    stats: 'Next.js · Tailwind · Monaco Editor',
    color: '#DCFCE7',
  },
  {
    id: 'ai-journey',
    title: 'AI Journey',
    type: 'AI SaaS',
    desc: 'An AI analyst for product teams — explains in plain language why visitors drop off and proposes one instant fix.',
    stats: 'Reasoning Agent · PostHog Sync',
    color: '#F3E8FF',
  },
];

interface ScreenshotItem {
  id: string;
  title: string;
  category: 'apps' | 'websites';
  gradient: string;
}

const SCREENSHOTS_DATA: ScreenshotItem[] = [
  { id: '1', title: 'Telemetry Live Dashboard', category: 'apps', gradient: 'linear-gradient(135deg, #1E293B, #0F172A)' },
  { id: '2', title: 'Clinical Assessment Flow', category: 'apps', gradient: 'linear-gradient(135deg, #F8FAFC, #E2E8F0)' },
  { id: '3', title: 'Workforce Dispatch Board', category: 'apps', gradient: 'linear-gradient(135deg, #F1F5F9, #CBD5E1)' },
  { id: '4', title: 'Agent Workspace Graph', category: 'apps', gradient: 'linear-gradient(135deg, #FEF3C7, #FDE68A)' },
  { id: '5', title: 'Mobile Telemetry Screen', category: 'apps', gradient: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)' },
  { id: '6', title: 'Design Token Registry', category: 'apps', gradient: 'linear-gradient(135deg, #F0FDF4, #DCFCE7)' },
  { id: '7', title: 'MindPath Portal Homepage', category: 'websites', gradient: 'linear-gradient(135deg, #FFF7ED, #FFEDD5)' },
  { id: '8', title: 'ValueHut Corporate Architecture', category: 'websites', gradient: 'linear-gradient(135deg, #FAF5FF, #F3E8FF)' },
  { id: '9', title: 'Otee Brand & Service Experience', category: 'websites', gradient: 'linear-gradient(135deg, #ECFEFF, #CFFAFE)' },
  { id: '10', title: 'Codex Documentation Explorer', category: 'websites', gradient: 'linear-gradient(135deg, #FDF4FF, #FAE8FF)' },
];

export const WorkPage: React.FC<{ onNavigateAI: () => void }> = ({ onNavigateAI }) => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [archiveTab, setArchiveTab] = useState<'apps' | 'websites'>('apps');
  const [lightboxImg, setLightboxImg] = useState<ScreenshotItem | null>(null);

  const filteredShots = SCREENSHOTS_DATA.filter((s) => s.category === archiveTab);

  return (
    <main style={{ padding: '3rem 0 5rem' }}>
      {/* Work Hero */}
      <section className="site-shell" style={{ marginBottom: '3.5rem' }}>
        <div className="hero-grid">
          <div>
            <h1 className="hero-title">
              Explore my work, <br />
              <span className="hero-title-muted">process and more.</span>
            </h1>
          </div>

          <div className="hero-desc-col">
            <p className="hero-desc-text">
              Case studies and side explorations across web, SaaS, and apps. Keep exploring, there's more than just UI design.
            </p>

            <div className="hero-ctas">
              <a
                href="#screenshots-archive"
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('screenshots-archive')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Screenshots Instead ↙
              </a>
              <button className="btn-secondary" onClick={onNavigateAI}>
                Explore AI Work ↙
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Columns */}
      <section className="site-shell" style={{ marginBottom: '4rem' }}>
        <div className="work-columns-container">
          {PROJECTS.map((project) => {
            const isHovered = hoveredProject === project.id;
            return (
              <div
                key={project.id}
                className="work-col"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="work-col-plus">
                  <Plus size={20} />
                </div>

                <div className="work-col-info">
                  <h3>{project.title}</h3>
                  <p>{project.type}</p>
                </div>

                {/* Floating Preview Card */}
                {isHovered && (
                  <div className="work-preview-floating">
                    <div
                      className="work-preview-thumb"
                      style={{ background: project.color }}
                    >
                      <div className="mono" style={{ fontSize: '0.8rem', color: '#16140E', fontWeight: 600 }}>
                        {project.title} PREVIEW
                      </div>
                    </div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                      {project.title}
                    </h4>
                    <p style={{ fontSize: '0.82rem', color: 'var(--ink-secondary)', lineHeight: 1.45, marginBottom: '0.65rem' }}>
                      {project.desc}
                    </p>
                    <div className="mono" style={{ fontSize: '0.72rem', color: 'var(--accent-amber-deep)', fontWeight: 600 }}>
                      {project.stats}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Non-disclosure & Client Logos Ticker */}
      <section className="site-shell">
        <div className="fig-section" style={{ padding: '3.5rem 0' }}>
          <div className="section-tag-badge mono" style={{ marginBottom: '1.25rem' }}>
            NON-DISCLOSURE
          </div>
          <p style={{ textAlign: 'center', fontSize: '1rem', color: 'var(--ink-secondary)', marginBottom: '2.5rem' }}>
            Plus many other projects I can't publicly share, but they're some of my favorite work.
          </p>

          <div className="client-logos-row">
            <span>FourTwoThree</span>
            <span className="client-dot">&middot;</span>
            <span>Toyota</span>
            <span className="client-dot">&middot;</span>
            <span>DHFPG</span>
            <span className="client-dot">&middot;</span>
            <span>Santander UK</span>
            <span className="client-dot">&middot;</span>
            <span>Hoopit AI</span>
          </div>
        </div>
      </section>

      {/* Screenshots Archive Section */}
      <section id="screenshots-archive" className="site-shell" style={{ marginTop: '5rem' }}>
        <div className="fig-section">
          <div className="fig-bracket-top-left" />
          <div className="fig-bracket-top-right" />

          <div className="section-tag-badge mono">SCREENSHOTS</div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 3rem)', fontWeight: 700, marginBottom: '0.5rem' }}>
                Archive of interfaces
              </h2>
              <p style={{ color: 'var(--ink-secondary)', fontSize: '1rem' }}>
                app interfaces on the other. Click any of them to open it full size.
              </p>
            </div>

            <div className="archive-tabs-row mono" style={{ marginBottom: 0 }}>
              <div
                className={`archive-tab ${archiveTab === 'apps' ? 'active' : ''}`}
                onClick={() => setArchiveTab('apps')}
              >
                APPS 33
              </div>
              <div
                className={`archive-tab ${archiveTab === 'websites' ? 'active' : ''}`}
                onClick={() => setArchiveTab('websites')}
              >
                WEBSITES 36
              </div>
            </div>
          </div>

          <div className="archive-grid">
            {filteredShots.map((shot) => (
              <div
                key={shot.id}
                className="archive-card"
                onClick={() => setLightboxImg(shot)}
              >
                <div
                  className="archive-card-thumb"
                  style={{ background: shot.gradient }}
                >
                  <div
                    style={{
                      width: '80%',
                      height: '70%',
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'rgba(255,255,255,0.7)',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    UI MOCKUP
                  </div>
                </div>
                <div style={{ padding: '0.85rem 1rem' }}>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600 }}>{shot.title}</div>
                  <div className="mono" style={{ fontSize: '0.72rem', color: 'var(--ink-muted)', marginTop: '2px' }}>
                    1440 · FIGMA · PRODUCTION
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.85)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
          }}
          onClick={() => setLightboxImg(null)}
        >
          <div
            style={{
              position: 'relative',
              width: '90%',
              maxWidth: '960px',
              backgroundColor: 'var(--bg-card)',
              borderRadius: '8px',
              padding: '1.5rem',
              boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                color: 'var(--ink-primary)',
              }}
              onClick={() => setLightboxImg(null)}
            >
              <X size={24} />
            </button>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.25rem' }}>
              {lightboxImg.title}
            </h3>
            <p className="mono" style={{ fontSize: '0.8rem', color: 'var(--ink-muted)', marginBottom: '1.5rem' }}>
              FIG. {lightboxImg.id} · FULL RESOLUTION RENDER
            </p>

            <div
              style={{
                width: '100%',
                height: '480px',
                background: lightboxImg.gradient,
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontFamily: 'var(--font-mono)',
                fontSize: '1.2rem',
              }}
            >
              {lightboxImg.title} — High Resolution Preview
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
