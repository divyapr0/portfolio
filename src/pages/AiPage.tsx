import React, { useState } from 'react';

interface WorkflowItem {
  id: string;
  tag: string;
  title: string;
  desc: string;
}

const WORKFLOWS: WorkflowItem[] = [
  {
    id: '01',
    tag: 'AUTOMATION',
    title: 'Task Automation',
    desc: 'Component generation, documentation, release notes, design tokens. The repetitive half of the job, off my plate.',
  },
  {
    id: '02',
    tag: 'RESEARCH',
    title: 'Research & Synthesis',
    desc: 'Clustering user feedback, extracting actionable product themes, and generating synthetic stress-test personas.',
  },
  {
    id: '03',
    tag: 'ANALYSIS',
    title: 'Design-to-Code Pipeline',
    desc: 'Translating Figma token variables into production React/TypeScript components with 100% token parity.',
  },
];

export const AiPage: React.FC = () => {
  const [activeWorkflow, setActiveWorkflow] = useState<string>('01');

  return (
    <main style={{ padding: '3rem 0 5rem' }}>
      <div className="site-shell">
        {/* AI Hero */}
        <section style={{ marginBottom: '4.5rem' }}>
          <h1 className="hero-title" style={{ maxWidth: '850px', marginBottom: '1.5rem' }}>
            AI as part of my <br />
            <span className="hero-title-muted">everyday workflow.</span>
          </h1>
          <p className="hero-desc-text" style={{ maxWidth: '640px' }}>
            I use AI throughout the product design process to move faster, think deeper, and deliver better products, without replacing design thinking or human judgment.
          </p>
        </section>

        {/* Workflow Items */}
        <section style={{ borderTop: '1px solid var(--border-line)', marginBottom: '5rem' }}>
          {WORKFLOWS.map((wf) => {
            const isActive = activeWorkflow === wf.id;
            return (
              <div
                key={wf.id}
                onClick={() => setActiveWorkflow(wf.id)}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '80px 220px 1fr',
                  padding: '2rem 1rem',
                  borderBottom: '1px solid var(--border-line-subtle)',
                  cursor: 'pointer',
                  backgroundColor: isActive ? 'var(--bg-paper)' : 'transparent',
                  transition: 'background-color 0.2s ease',
                }}
              >
                <div className="mono" style={{ color: 'var(--ink-muted)', fontSize: '0.85rem' }}>
                  {wf.id}
                </div>
                <div>
                  <div className="mono" style={{ fontSize: '0.72rem', letterSpacing: '0.08em', color: 'var(--ink-muted)', marginBottom: '0.35rem' }}>
                    {wf.tag}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--ink-primary)' }}>
                    {wf.title}
                  </h3>
                </div>
                <div style={{ color: 'var(--ink-secondary)', fontSize: '0.95rem', lineHeight: 1.5, alignSelf: 'center' }}>
                  {wf.desc}
                </div>
              </div>
            );
          })}
        </section>

        {/* Working With AI Build Showcase */}
        <section className="fig-section">
          <div className="fig-bracket-top-left" />
          <div className="fig-bracket-top-right" />

          <div className="section-tag-badge mono">WORKING WITH AI</div>

          <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '0.5rem' }}>
            Here's what I built <span className="hero-title-muted">with AI.</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--ink-secondary)', marginBottom: '3.5rem' }}>
            A running log of the agents, workflows and tools behind each build.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <div className="mono" style={{ fontSize: '0.85rem', color: 'var(--accent-amber-deep)', marginBottom: '0.75rem', fontWeight: 600 }}>
                01 · SENA DESIGN SYSTEM
              </div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem' }}>
                Sena
              </h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--ink-secondary)', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                Building a design system completely with AI and turning it into a production-ready ReactJS component library and documentation hub.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <span className="mono" style={{ fontSize: '0.75rem', padding: '0.35rem 0.65rem', border: '1px solid var(--border-line)', borderRadius: '3px' }}>
                  React 19
                </span>
                <span className="mono" style={{ fontSize: '0.75rem', padding: '0.35rem 0.65rem', border: '1px solid var(--border-line)', borderRadius: '3px' }}>
                  Design Tokens
                </span>
                <span className="mono" style={{ fontSize: '0.75rem', padding: '0.35rem 0.65rem', border: '1px solid var(--border-line)', borderRadius: '3px' }}>
                  Cursor AI
                </span>
              </div>
            </div>

            {/* FIG 001 - SENA ACTIVE UI Window */}
            <div
              style={{
                border: '1px solid var(--border-line)',
                borderRadius: '6px',
                overflow: 'hidden',
                backgroundColor: 'var(--bg-card)',
                boxShadow: '0 12px 32px rgba(0, 0, 0, 0.08)',
              }}
            >
              <div
                className="mono"
                style={{
                  backgroundColor: '#1E1E1E',
                  color: '#A3A3A3',
                  padding: '0.65rem 1rem',
                  fontSize: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#EF4444' }} />
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#F59E0B' }} />
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                <span style={{ marginLeft: '1rem', color: '#D4D4D4' }}>
                  FIG. 001 — SENA · ACTIVE
                </span>
              </div>

              <div style={{ padding: '1.5rem', display: 'grid', gridTemplateColumns: '180px 1fr', gap: '1.5rem' }}>
                <div style={{ borderRight: '1px solid var(--border-line-subtle)', paddingRight: '1rem' }}>
                  <div className="mono" style={{ fontSize: '0.72rem', color: 'var(--ink-muted)', marginBottom: '0.5rem' }}>
                    COMPONENTS
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--accent-amber-deep)', marginBottom: '0.4rem' }}>
                    · Avatar
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--ink-secondary)', marginBottom: '0.4rem' }}>
                    Button
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--ink-secondary)', marginBottom: '0.4rem' }}>
                    Modal
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--ink-secondary)' }}>
                    DataGrid
                  </div>
                </div>

                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                    Avatar
                  </h4>
                  <div className="mono" style={{ fontSize: '0.72rem', color: 'var(--ink-muted)', marginBottom: '1rem' }}>
                    Last updated: March 2026 · 3 types · 5 statuses
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#E0E7FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#4338CA' }}>
                      PS
                    </div>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#B45309' }}>
                      AI
                    </div>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#DCFCE7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#15803D' }}>
                      DS
                    </div>
                  </div>

                  <div
                    className="mono"
                    style={{
                      padding: '0.75rem',
                      backgroundColor: 'var(--bg-paper-2)',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      color: 'var(--ink-primary)',
                      lineHeight: 1.4,
                    }}
                  >
                    &lt;Avatar src="/pleurat.webp" status="online" size="lg" /&gt;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
