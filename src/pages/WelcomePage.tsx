import React from 'react';
import { CommuterTrack } from '../components/CommuterTrack';
import { WorkbenchCanvas } from '../components/WorkbenchCanvas';
import { FocusTracksSection } from '../components/FocusTracksSection';
import { ByTheNumbersSection } from '../components/ByTheNumbersSection';
import { AiToolsSection } from '../components/AiToolsSection';
import { TeamsSection } from '../components/TeamsSection';
import { SchematicTrack } from '../components/SchematicTrack';

interface WelcomePageProps {
  onNavigate: (page: string) => void;
}

export const WelcomePage: React.FC<WelcomePageProps> = ({ onNavigate }) => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="site-shell">
          <div className="hero-grid">
            <div>
              <h1 className="hero-title">
                I design apps, websites, <br />
                <span className="hero-title-muted">and AI-powered systems</span>
              </h1>
            </div>

            <div className="hero-desc-col">
              <p className="hero-desc-text">
                10+ years designing the systems, brands and AI workflows behind products people actually use, serving millions of users every day.
              </p>

              <div className="hero-ctas">
                <button
                  className="btn-primary"
                  onClick={() => onNavigate('work')}
                >
                  View selected work ↗
                </button>
                <button
                  className="btn-secondary"
                  onClick={() => onNavigate('profile')}
                >
                  About me ↗
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commuter Track (City Skyline) */}
      <CommuterTrack />

      {/* Interactive Workbench Canvas */}
      <div className="site-shell">
        <WorkbenchCanvas />
      </div>

      {/* FIG. 004: Focus Tracks */}
      <FocusTracksSection />

      {/* FIG. 005: By The Numbers */}
      <ByTheNumbersSection onNavigateProfile={() => onNavigate('profile')} />

      {/* FIG. 006: AI Tools */}
      <AiToolsSection />

      {/* FIG. 007: Teams Grid */}
      <TeamsSection />

      {/* Schematic Track (Circuit Walker) */}
      <SchematicTrack onExplore={() => onNavigate('work')} />
    </main>
  );
};
