import React from 'react';

interface CuteSurprisePageProps {
  onNext: () => void;
}

const CuteSurprisePage: React.FC<CuteSurprisePageProps> = ({ onNext }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-pink-100 to-yellow-100">
      <div className="max-w-xl mx-auto text-center bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-yellow-100">
        <div className="flex justify-center mb-6 animate-bounce">
          <svg width="56" height="56" fill="none" viewBox="0 0 24 24">
            <path fill="#fbbf24" d="M12 21s-6.7-5.2-9.3-8.3A6 6 0 0 1 12 4a6 6 0 0 1 9.3 8.7C18.7 15.8 12 21 12 21Z"/>
          </svg>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-yellow-600 mb-4">Encore une petite surprise ! 🧸</h1>
        <p className="text-lg text-gray-700 mb-8">
          Je sais que tu stresses un peu parce que je vais travailler au McDo, mais je veux que tu sois rassurée&nbsp;: il n’y a que toi dans mon cœur.<br/>
          Aucune fille ne pourra jamais me détourner de toi, tu es vraiment la seule qui compte pour moi.<br/>
          Je veux juste te rendre heureuse, te rassurer, et te prouver chaque jour que tu es unique à mes yeux.<br/>
          <span className="block mt-4 text-pink-500 font-semibold">Je t’aime fort, ma Sherihane 💛</span>
        </p>
        <button
          onClick={onNext}
          className="bg-gradient-to-r from-yellow-400 to-pink-400 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Découvrir la suite
        </button>
      </div>
    </div>
  );
};

export default CuteSurprisePage;
