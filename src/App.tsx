import React, { useState } from 'react';
import HomePage from './components/HomePage';
import CardsPage from './components/CardsPage';
import SecretPage from './components/SecretPage';
import FinalPage from './components/FinalPage';
import ToBeContinuedPage from './components/ToBeContinuedPage';
import PhotoPage from './components/PhotoPage';
import FloatingHeart from './components/FloatingHeart';

type Page = 'home' | 'cards' | 'secret' | 'final' | 'photo' | 'toBeContinued';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onStart={() => navigateTo('cards')} />;
      case 'cards':
        return <CardsPage onComplete={() => navigateTo('final')} />;
      case 'secret':
        return <SecretPage onBack={() => navigateTo('cards')} />;
      case 'final':
        return <FinalPage onRestart={() => navigateTo('home')} onNext={() => navigateTo('photo')} />; // Passe à la page photo
      case 'photo':
        return <PhotoPage onNext={() => navigateTo('toBeContinued')} />;
      case 'toBeContinued':
        return <ToBeContinuedPage onRestart={() => navigateTo('home')} />;
      default:
        return <HomePage onStart={() => navigateTo('cards')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Floating hearts animation */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(6)].map((_, i) => (
          <FloatingHeart key={i} delay={i * 2} />
        ))}
      </div>
      
      {/* Hidden heart for secret page - only show on cards page */}
      {currentPage === 'cards' && (
        <button
          onClick={() => navigateTo('secret')}
          className="fixed top-20 right-8 text-pink-400 hover:text-pink-600 transition-all duration-300 hover:scale-110 z-50 animate-pulse"
          title="Tu as trouvé quelque chose... 💖"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="drop-shadow-lg">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </button>
      )}
      
      {/* Page content */}
      <div className="relative z-10">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;