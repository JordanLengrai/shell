import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface HomePageProps {
  onStart: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* Main content */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-pink-100">
          {/* Header with hearts */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <Heart className="text-pink-400 animate-pulse" size={32} />
            <Sparkles className="text-purple-400 animate-spin" size={28} />
            <Heart className="text-pink-400 animate-pulse" size={32} />
          </div>
          
          {/* Main message */}
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-6 font-serif">
            Bienvenue, mon amour
          </h1>
          
          <div className="text-2xl text-pink-600 mb-4 font-light">💖</div>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed font-light">
            Ce site est une surprise rien que pour toi...
            <br />
            <span className="text-pink-600 font-medium">Prépare-toi à découvrir à quel point tu es spéciale</span>
          </p>
          
          {/* Start button */}
          <button
            onClick={onStart}
            className="group relative bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white px-12 py-4 rounded-full text-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-pink-500 hover:via-purple-500 hover:to-blue-500"
          >
            <span className="relative z-10 flex items-center gap-3">
              Commencer cette aventure
              <Heart className="group-hover:animate-bounce" size={24} />
            </span>
            <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          {/* Subtitle */}
          <p className="mt-8 text-gray-500 italic font-light">
            "L'amour ne se voit pas avec les yeux, mais avec le cœur"
          </p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 text-pink-300 opacity-50 animate-float">
          <Heart size={20} />
        </div>
        <div className="absolute bottom-20 right-16 text-purple-300 opacity-50 animate-float-delayed">
          <Sparkles size={24} />
        </div>
        <div className="absolute top-32 right-20 text-blue-300 opacity-50 animate-float">
          <Heart size={16} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;