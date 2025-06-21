import React from 'react';

interface WaitingPageProps {
  onHome?: () => void;
}

const WaitingPage: React.FC<WaitingPageProps> = ({ onHome }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-pink-100 p-4">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-pink-100 text-center max-w-lg">
        <div className="flex justify-center mb-6">
          {/* Animation cœur qui bat */}
          <div className="animate-pulse">
            <svg width="64" height="64" fill="none" viewBox="0 0 24 24">
              <path fill="#ec4899" d="M12 21s-6.7-5.2-9.3-8.3A6 6 0 0 1 12 4a6 6 0 0 1 9.3 8.7C18.7 15.8 12 21 12 21Z"/>
            </svg>
          </div>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-pink-500 mb-4">Patience, la surprise arrive bientôt !</h1>
        <p className="text-lg text-gray-600 mb-8">Encore un peu de patience… Je prépare quelque chose de spécial rien que pour toi. Reviens plus tard pour découvrir la suite !</p>
        {onHome && (
          <button
            onClick={onHome}
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Retour à l’accueil
          </button>
        )}
      </div>
    </div>
  );
};

export default WaitingPage;
