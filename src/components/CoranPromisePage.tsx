import React from 'react';

interface CoranPromisePageProps {
  onNext: () => void;
}

const CoranPromisePage: React.FC<CoranPromisePageProps> = ({ onNext }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-pink-100 to-purple-100">
      <div className="max-w-xl mx-auto text-center bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-pink-100">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 font-serif">
          Un rappel précieux 💫
        </h1>
        <blockquote className="italic text-lg text-gray-700 bg-pink-50 border-l-4 border-pink-400 px-6 py-4 rounded-2xl mb-8">
          « Soyez bons envers les femmes ; elles ont certes été créées à partir d’une côte, et la partie la plus tordue de la côte est sa partie la plus haute : si tu essaies de la redresser, tu la brises ; et si tu la laisses telle quelle, elle reste tordue. Soyez donc bons avec les femmes ! »
          <br />
          <span className="block text-sm text-gray-500 mt-2">— Hadith rapporté par Boukhari et Mouslim</span>
        </blockquote>
        <div className="text-lg text-gray-700 font-light mb-8">
          Je veux te promettre, devant Dieu et devant toi, de toujours faire de mon mieux pour être un homme meilleur. Un homme amoureux, attentionné, doux, patient et respectueux. <br /><br />
          Je veux t’offrir le meilleur de moi-même, te soutenir, t’écouter, te protéger et t’aimer chaque jour un peu plus. <br />
          Merci de m’inspirer à devenir la meilleure version de moi-même, ma Sherihane d’amour.
        </div>
        <button
          onClick={onNext}
          className="mt-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Découvrir la suite
        </button>
      </div>
    </div>
  );
};

export default CoranPromisePage;
