import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ShutterTransition } from './components/ShutterTransition';
import { WelcomePage } from './pages/WelcomePage';
import { WorkPage } from './pages/WorkPage';
import { AiPage } from './pages/AiPage';
import { ProfilePage } from './pages/ProfilePage';
import { ContactPage } from './pages/ContactPage';
import './styles/main.css';

export const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('welcome');
  const [pendingPage, setPendingPage] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [transitionLabel, setTransitionLabel] = useState<string>('Welcome');

  // Sync hash with state on initial load and popstate
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') || 'welcome';
      if (['welcome', 'work', 'ai', 'profile', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };
    handleHash();
    window.addEventListener('popstate', handleHash);
    return () => window.removeEventListener('popstate', handleHash);
  }, []);

  const getPageTitle = (page: string) => {
    switch (page) {
      case 'work':
        return 'Selected work';
      case 'ai':
        return 'AI Systems';
      case 'profile':
        return 'Profile';
      case 'contact':
        return "Let's talk";
      default:
        return 'Welcome';
    }
  };

  const handleNavigate = (targetPage: string) => {
    if (targetPage === currentPage || isTransitioning) return;
    setPendingPage(targetPage);
    setTransitionLabel(getPageTitle(targetPage));
    setIsTransitioning(true);
  };

  const handleMidpoint = () => {
    if (pendingPage) {
      setCurrentPage(pendingPage);
      window.location.hash = pendingPage;
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const handleTransitionComplete = () => {
    setIsTransitioning(false);
    setPendingPage(null);
  };

  return (
    <>
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      <ShutterTransition
        isActive={isTransitioning}
        label={transitionLabel}
        onMidpoint={handleMidpoint}
        onComplete={handleTransitionComplete}
      />

      <div style={{ flex: 1 }}>
        {currentPage === 'welcome' && (
          <WelcomePage onNavigate={handleNavigate} />
        )}
        {currentPage === 'work' && (
          <WorkPage onNavigateAI={() => handleNavigate('ai')} />
        )}
        {currentPage === 'ai' && <AiPage />}
        {currentPage === 'profile' && <ProfilePage />}
        {currentPage === 'contact' && <ContactPage />}
      </div>

      <Footer onNavigate={handleNavigate} />
    </>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
