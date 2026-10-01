import React from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="site-footer">
      <div className="site-shell">
        <div className="footer-columns-grid">
          <div className="footer-col">
            <div className="footer-col-header mono">CONTACT</div>
            <div className="footer-links-list">
              <a
                href="mailto:hello@pleurat.com"
                style={{ fontWeight: 600, color: 'var(--ink-primary)' }}
              >
                hello@pleurat.com
              </a>
              <span>Lets get in touch!</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--ink-muted)' }}>
                Response within 24 hours
              </span>
            </div>
          </div>

          <div className="footer-col">
            <div className="footer-col-header mono">SITEMAP</div>
            <div className="footer-links-list">
              <a
                href="#welcome"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('welcome');
                }}
              >
                Welcome
              </a>
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('work');
                }}
              >
                Work
              </a>
              <a
                href="#ai"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('ai');
                }}
              >
                AI
              </a>
              <a
                href="#profile"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('profile');
                }}
              >
                Profile
              </a>
            </div>
          </div>

          <div className="footer-col">
            <div className="footer-col-header mono">ELSEWHERE</div>
            <div className="footer-links-list">
              <a href="https://www.awwwards.com/Pleurats/" target="_blank" rel="noreferrer">
                Awwwards ↗
              </a>
              <a href="https://dribbble.com/Pleurat" target="_blank" rel="noreferrer">
                Dribbble ↗
              </a>
              <a href="https://www.linkedin.com/in/pleuratshala/" target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a href="https://themeforest.net/user/pleuratt" target="_blank" rel="noreferrer">
                ThemeForest ↗
              </a>
            </div>
          </div>

          <div className="footer-col">
            <div className="footer-col-header mono">STUDIO</div>
            <div className="footer-links-list">
              <span style={{ fontWeight: 500, color: 'var(--ink-primary)' }}>
                Pristina · CET Europe
              </span>
              <span>Product design · Systems · AI</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom-row mono">
          <div>© 2026 PLEURAT SHALA — ALL RIGHTS RESERVED</div>
          <a
            href="#privacy"
            onClick={(e) => {
              e.preventDefault();
              alert('Privacy Policy: No personal data is tracked or sold on this portfolio.');
            }}
          >
            PRIVACY
          </a>
        </div>
      </div>
    </footer>
  );
};
