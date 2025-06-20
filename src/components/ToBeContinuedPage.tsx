import React from 'react';
import { Clock } from 'lucide-react';

interface ToBeContinuedPageProps {
  onRestart: () => void;
}

const ToBeContinuedPage: React.FC<ToBeContinuedPageProps> = ({ onRestart }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-pink-50 to-purple-100">
      <div className="max-w-xl mx-auto text-center bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-pink-100">
        <div className="flex justify-center items-center gap-4 mb-8">
          <Clock className="text-purple-400 animate-pulse" size={40} />
          <span className="text-3xl font-bold text-purple-600 font-serif">À suivre demain...</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 font-serif">
          La suite de cette surprise arrivera dans la journée de demain !
        </h1>
        <p className="text-lg text-gray-600 font-light mb-8">
          Garde un œil sur ton téléphone<br />
          Prépare-toi à encore plus d'amour , Je t'aime ma Sherihane d'amour 💖
        </p>
        <button
          onClick={onRestart}
          className="mt-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Revenir à l'accueil
        </button>
      </div>
    </div>
  );
};

export default ToBeContinuedPage;
