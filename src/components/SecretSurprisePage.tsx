import React from 'react';

interface SecretSurprisePageProps {
  onBack: () => void;
}

const SecretSurprisePage: React.FC<SecretSurprisePageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 p-4">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-purple-200 text-center max-w-lg">
        <div className="flex justify-center mb-6 animate-bounce">
          <svg width="64" height="64" fill="none" viewBox="0 0 24 24">
            <path fill="#a21caf" d="M12 21s-6.7-5.2-9.3-8.3A6 6 0 0 1 12 4a6 6 0 0 1 9.3 8.7C18.7 15.8 12 21 12 21Z"/>
          </svg>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-purple-700 mb-4">Surprise secrète 💜</h1>
        <p className="text-lg text-gray-700 mb-8">Bravo, tu as trouvé la surprise cachée !<br/>Juste pour toi&nbsp;: sache que tu comptes énormément pour moi, plus que tu ne l’imagines. J’ai encore plein de surprises en réserve, rien que pour toi…</p>
        <button
          onClick={onBack}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Retour
        </button>
      </div>
    </div>
  );
};

export default SecretSurprisePage;
