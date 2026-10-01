import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { id: 'welcome', label: 'Welcome' },
    { id: 'work', label: 'Work' },
    { id: 'ai', label: 'AI' },
    { id: 'profile', label: 'Profile' },
  ];

  return (
    <header className="site-header">
      <div className="site-shell">
        <div className="site-header-inner">
          <a
            href="#welcome"
            className="site-brand"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('welcome');
            }}
          >
            pleurat
          </a>

          <nav className="nav-links">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`nav-item ${isActive ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.id);
                  }}
                >
                  {item.label}
                  {isActive && <div className="nav-active-dot" />}
                </a>
              );
            })}
          </nav>

          <div className="header-actions">
            <button
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
            >
              {theme === 'light' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 3v18a9 9 0 0 0 0-18z" fill="currentColor" />
                </svg>
              ) : (
                <Sun size={18} />
              )}
            </button>

            <button
              className="contact-nav-btn"
              onClick={() => onNavigate('contact')}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
