import React, { useEffect, useState } from 'react';
import { Heart, Sparkles, Home } from 'lucide-react';
import Confetti from './Confetti';

interface FinalPageProps {
  onRestart: () => void;
  onNext: () => void;
}

const FinalPage: React.FC<FinalPageProps> = ({ onRestart, onNext }) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);

  const messages = [
    "Je t'aime plus que tout...",
    "Chaque jour un peu plus...",
    "Tu es mon univers entier 💖"
  ];

  useEffect(() => {
    // Start confetti animation
    setShowConfetti(true);
    
    // Cycle through messages
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 3000);

    return () => clearInterval(messageInterval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Confetti */}
      {showConfetti && <Confetti />}
      
      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-random"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            {i % 3 === 0 ? (
              <Heart className="text-pink-400 opacity-70" size={16 + Math.random() * 16} />
            ) : i % 3 === 1 ? (
              <Sparkles className="text-purple-400 opacity-70" size={12 + Math.random() * 12} />
            ) : (
              <div className="text-yellow-400 opacity-70 text-xl">✨</div>
            )}
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main content */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-pink-100 mb-8">
          {/* Animated hearts header */}
          <div className="flex justify-center items-center gap-6 mb-12">
            <Heart className="text-pink-500 animate-pulse" size={48} />
            <div className="text-6xl animate-bounce">💖</div>
            <Heart className="text-red-500 animate-pulse" size={48} />
          </div>

          {/* Main message with transition */}
          <div className="mb-12 h-32 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 bg-clip-text text-transparent font-serif transition-all duration-1000 ease-in-out">
              {messages[currentMessage]}
            </h1>
          </div>

          {/* Celebration message */}
          <div className="mb-12">
            <div className="text-4xl mb-6">🎉✨🎊</div>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light mb-6">
              Félicitations ! Tu as découvert toutes les surprises que j'avais préparées pour toi.
            </p>
            <p className="text-lg text-gray-600 font-light">
              Mais sache que la plus belle surprise, c'est de t'avoir dans ma vie chaque jour.
            </p>
          </div>

          {/* Love declaration */}
          <div className="bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 rounded-2xl p-8 mb-8 border border-pink-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ma promesse</h2>
            <p className="text-lg text-gray-700 leading-relaxed italic">
              "Je promets de continuer à te surprendre, à te faire rire, à être là dans les bons comme les mauvais moments. 
              Tu mérites tout l'amour du monde, et je ferai de mon mieux pour te le donner chaque jour."
            </p>
            <div className="mt-6">
              <span className="text-pink-600 font-medium text-xl">Je t'aime infiniment 💕</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onNext}
              className="flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Découvrir la suite
            </button>
            <button
              onClick={onRestart}
              className="flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Home size={20} />
              Recommencer la visite
            </button>
            <div className="text-gray-500 font-light">
              ou garde cette page dans ton cœur 💝
            </div>
          </div>
        </div>

        {/* Final touch */}
        <div className="text-gray-400 text-sm font-light">
          <p>Site créé avec tout mon amour 💖</p>
          <p className="mt-1">Pour la plus merveilleuse des femmes</p>
        </div>
      </div>
    </div>
  );
};

export default FinalPage;