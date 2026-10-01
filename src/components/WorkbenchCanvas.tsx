import React, { useState, useEffect } from 'react';
import { ConsoleDrawer } from './ConsoleDrawer';

type Track = 'workspace' | 'ai' | 'system' | 'product';

export const WorkbenchCanvas: React.FC = () => {
  const [activeTrack, setActiveTrack] = useState<Track>('workspace');
  const [cursorPos, setCursorPos] = useState({ x: 180, y: 120 });
  const [chatTyping, setChatTyping] = useState<string>('make the rail crop the second car');

  // Gentle autonomous wandering for collaborator cursor
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorPos((prev) => {
        const deltaX = (Math.random() - 0.5) * 80;
        const deltaY = (Math.random() - 0.5) * 60;
        return {
          x: Math.max(80, Math.min(480, prev.x + deltaX)),
          y: Math.max(70, Math.min(320, prev.y + deltaY)),
        };
      });
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  // Cycle chat message typing
  useEffect(() => {
    const msgs = [
      'make the rail crop the second car',
      'refactor tokens to CSS custom properties',
      'add smooth cubic-bezier curve to commuter',
      'render responsive 4-column metrics',
    ];
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % msgs.length;
      setChatTyping(msgs[idx]);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const getTrackPathName = () => {
    switch (activeTrack) {
      case 'workspace':
        return 'PORTFOLIO / WORKSPACE / WORKSPACE';
      case 'ai':
        return 'PORTFOLIO / WORKSPACE / AI-WORKFLOW';
      case 'system':
        return 'PORTFOLIO / WORKSPACE / SYSTEM';
      case 'product':
        return 'PORTFOLIO / WORKSPACE / PRODUCT-DESIGN';
    }
  };

  return (
    <div className="workbench-wrapper">
      {/* Amber Top Bar */}
      <div className="workbench-topbar mono">
        <div className="topbar-left">
          <div className="topbar-squares">
            <span className="topbar-sq active" />
            <span className="topbar-sq active" />
            <span className="topbar-sq" />
          </div>
          <span>{getTrackPathName()}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span style={{ fontSize: '0.65rem' }}>■</span>
          <span>READY</span>
        </div>
      </div>

      <div className="workbench-body">
        {/* Left Sidebar Tracks */}
        <div className="workbench-sidebar">
          <div className="sidebar-header mono">EXPERTISE</div>

          <button
            className={`sidebar-track-item ${activeTrack === 'workspace' ? 'active' : ''}`}
            onClick={() => setActiveTrack('workspace')}
          >
            <div className="track-item-title">
              <span className="track-sq-indicator" />
              <span>Workspace</span>
            </div>
            <div className="track-item-sub mono">BENCH · LIVE</div>
          </button>

          <button
            className={`sidebar-track-item ${activeTrack === 'ai' ? 'active' : ''}`}
            onClick={() => setActiveTrack('ai')}
          >
            <div className="track-item-title">
              <span className="track-sq-indicator" />
              <span>AI Workflow</span>
            </div>
            <div className="track-item-sub mono">AGENTS · DAILY</div>
          </button>

          <button
            className={`sidebar-track-item ${activeTrack === 'system' ? 'active' : ''}`}
            onClick={() => setActiveTrack('system')}
          >
            <div className="track-item-title">
              <span className="track-sq-indicator" />
              <span>Design System</span>
            </div>
            <div className="track-item-sub mono">LIBRARY · 12 PARTS</div>
          </button>

          <button
            className={`sidebar-track-item ${activeTrack === 'product' ? 'active' : ''}`}
            onClick={() => setActiveTrack('product')}
          >
            <div className="track-item-title">
              <span className="track-sq-indicator" />
              <span>Product Design</span>
            </div>
            <div className="track-item-sub mono">END TO END · 8+ YRS</div>
          </button>
        </div>

        {/* Dynamic Canvas Area */}
        <div className="workbench-canvas">
          <div className="canvas-header mono">
            <span>{activeTrack.toUpperCase()}</span>
            <span>BENCH · LIVE</span>
          </div>

          {/* Autonomous Collaborator Cursor */}
          <div
            className="live-cursor"
            style={{
              transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)`,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#16140E">
              <path d="M4 0 L4 20 L9 15 L14 24 L17 22 L12 13 L19 13 Z" />
            </svg>
            <span className="cursor-badge mono">Pleurat</span>
          </div>

          {/* Floating AI Chat Card */}
          <div className="live-chat-card">
            <div className="chat-card-title mono">AGENT CHAT</div>
            <div className="chat-user-msg mono">{chatTyping}</div>
            <div className="chat-agent-reply">
              <span className="chat-dot-indicator" />
              <div>
                <span>On it — applying 24px reveal and tokens.</span>
                <div className="chat-status-sub mono">Editing WorkRail.tsx</div>
              </div>
            </div>
          </div>

          {/* FLOWCHART / TRACK CONTENT */}
          {activeTrack === 'workspace' && (
            <div className="flowchart-container" style={{ minHeight: '340px' }}>
              <svg
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  pointerEvents: 'none',
                }}
              >
                {/* Arrow lines connecting nodes */}
                <line x1="130" y1="120" x2="190" y2="120" stroke="var(--border-line)" strokeWidth="1.5" markerEnd="url(#arrow)" />
                <line x1="280" y1="120" x2="330" y2="120" stroke="var(--border-line)" strokeWidth="1.5" />
                <line x1="430" y1="120" x2="480" y2="120" stroke="var(--border-line)" strokeWidth="1.5" />
                <line x1="380" y1="145" x2="380" y2="200" stroke="var(--border-line)" strokeWidth="1.5" />
                <line x1="440" y1="225" x2="500" y2="225" stroke="var(--border-line)" strokeWidth="1.5" />
                <line x1="560" y1="145" x2="560" y2="175" stroke="var(--border-line)" strokeWidth="1.5" />
                <line x1="560" y1="225" x2="560" y2="200" stroke="var(--border-line)" strokeWidth="1.5" />
                <line x1="560" y1="187" x2="590" y2="187" stroke="var(--border-line)" strokeWidth="1.5" />

                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--border-line)" />
                  </marker>
                </defs>
              </svg>

              <div style={{ position: 'absolute', left: '50px', top: '105px' }} className="flow-node">
                BRIEF
              </div>
              <div style={{ position: 'absolute', left: '190px', top: '105px' }} className="flow-node">
                EXPLORE
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '330px',
                  top: '95px',
                  border: '1px solid var(--border-line)',
                  padding: '0.65rem 1rem',
                  fontSize: '0.75rem',
                  transform: 'rotate(0deg)',
                  backgroundColor: 'var(--bg-card)',
                }}
                className="mono"
              >
                IN THE SYSTEM?
                <div style={{ fontSize: '0.65rem', color: '#10B981', position: 'absolute', right: '-30px', top: '4px' }}>
                  · YES
                </div>
                <div style={{ fontSize: '0.65rem', color: 'var(--ink-muted)', position: 'absolute', bottom: '-22px', left: '42%' }}>
                  NO
                </div>
              </div>

              <div style={{ position: 'absolute', left: '480px', top: '105px' }} className="flow-node">
                REUSE
              </div>
              <div style={{ position: 'absolute', left: '320px', top: '210px' }} className="flow-node">
                NEW PATTERN
              </div>
              <div style={{ position: 'absolute', left: '460px', top: '210px' }} className="flow-node">
                ADD TO LIB
              </div>
              <div style={{ position: 'absolute', left: '590px', top: '170px' }} className="flow-node highlight-ship">
                SHIP
              </div>

              {/* Sticky Notes */}
              <div className="sticky-note sticky-purple">
                Reuse before you add. Every new pattern is a thing somebody has to maintain.
              </div>
              <div className="sticky-note sticky-blue">
                Empty state? ask design team for microcopy.
              </div>
            </div>
          )}

          {activeTrack === 'system' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', margin: '2rem 0' }}>
              <div style={{ padding: '1.25rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-line)', borderRadius: '4px' }}>
                <div className="mono" style={{ fontSize: '0.75rem', color: 'var(--ink-muted)', marginBottom: '1rem' }}>TOKENS</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>paper</span>
                    <span className="mono" style={{ color: 'var(--ink-muted)' }}>#FBF7E6</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>ink</span>
                    <span className="mono" style={{ color: 'var(--ink-muted)' }}>#16140E</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>amber</span>
                    <span className="mono" style={{ color: 'var(--accent-amber-deep)' }}>#E69D46</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>line</span>
                    <span className="mono" style={{ color: 'var(--ink-muted)' }}>#DDD5BE</span>
                  </div>
                </div>
              </div>

              <div style={{ padding: '1.25rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-line)', borderRadius: '4px' }}>
                <div className="mono" style={{ fontSize: '0.75rem', color: 'var(--ink-muted)', marginBottom: '1rem' }}>COMPONENTS</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                  <div style={{ height: '36px', backgroundColor: 'var(--bg-paper-2)', borderRadius: '3px' }} />
                  <div style={{ height: '36px', backgroundColor: 'var(--bg-paper-2)', borderRadius: '3px' }} />
                  <div style={{ height: '36px', backgroundColor: 'var(--bg-paper-2)', borderRadius: '3px' }} />
                  <div style={{ height: '36px', backgroundColor: 'var(--bg-paper-2)', borderRadius: '3px' }} />
                </div>
              </div>

              <div style={{ padding: '1.25rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-line)', borderRadius: '4px' }}>
                <div className="mono" style={{ fontSize: '0.75rem', color: 'var(--ink-muted)', marginBottom: '1rem' }}>DOCS</div>
                <div className="mono" style={{ fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <span>tokens.css</span>
                  <span style={{ color: 'var(--accent-amber-deep)' }}>preview live ↗</span>
                </div>
              </div>
            </div>
          )}

          {activeTrack === 'ai' && (
            <div style={{ padding: '2rem 1rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <div className="flow-node">01 PROMPT / INTENT</div>
                <span className="mono">→</span>
                <div className="flow-node">02 AGENT DISPATCH</div>
                <span className="mono">→</span>
                <div className="flow-node">03 REASONING LOOP</div>
                <span className="mono">→</span>
                <div className="flow-node highlight-ship">04 SHIP PRODUCT</div>
              </div>
              <div className="sticky-note sticky-purple" style={{ position: 'relative', left: 0, bottom: 0, width: '280px' }}>
                AI replaces boilerplate, not product taste. The human sets the intent, reviews output, and polishes the craft.
              </div>
            </div>
          )}

          {activeTrack === 'product' && (
            <div style={{ padding: '2rem 1rem', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
              <div style={{ padding: '1rem', border: '1px solid var(--border-line)', backgroundColor: 'var(--bg-card)' }}>
                <div className="mono" style={{ fontSize: '0.75rem', color: 'var(--ink-muted)' }}>01 DISCOVERY</div>
                <div style={{ fontWeight: 600, marginTop: '0.5rem' }}>User Research</div>
              </div>
              <div style={{ padding: '1rem', border: '1px solid var(--border-line)', backgroundColor: 'var(--bg-card)' }}>
                <div className="mono" style={{ fontSize: '0.75rem', color: 'var(--ink-muted)' }}>02 ARCHITECTURE</div>
                <div style={{ fontWeight: 600, marginTop: '0.5rem' }}>Systems & Flows</div>
              </div>
              <div style={{ padding: '1rem', border: '1px solid var(--border-line)', backgroundColor: 'var(--bg-card)' }}>
                <div className="mono" style={{ fontSize: '0.75rem', color: 'var(--ink-muted)' }}>03 PROTOTYPE</div>
                <div style={{ fontWeight: 600, marginTop: '0.5rem' }}>High-fidelity UI</div>
              </div>
              <div style={{ padding: '1rem', border: '1px solid var(--border-line)', backgroundColor: 'var(--bg-card)' }}>
                <div className="mono" style={{ fontSize: '0.75rem', color: 'var(--ink-muted)' }}>04 PRODUCTION</div>
                <div style={{ fontWeight: 600, marginTop: '0.5rem' }}>React & Tokens</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Terminal Console Drawer */}
      <ConsoleDrawer
        onExecuteCommand={(cmd) => {
          if (cmd.includes('system')) setActiveTrack('system');
          else if (cmd.includes('ai')) setActiveTrack('ai');
          else if (cmd.includes('product')) setActiveTrack('product');
          else if (cmd.includes('workspace')) setActiveTrack('workspace');
        }}
      />
    </div>
  );
};
