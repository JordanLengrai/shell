import React, { useState } from 'react';
import { Heart, Star, Smile, Sun } from 'lucide-react';

interface CardsPageProps {
  onComplete: () => void;
}

const CardsPage: React.FC<CardsPageProps> = ({ onComplete }) => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [allRevealed, setAllRevealed] = useState(false);

  const cards = [
    {
      icon: <Smile className="text-yellow-500" size={48} />,
      title: "Ton sourire magique",
      message: "J'adore ton rire, il illumine mes journées les plus sombres. Quand tu souris, le monde entier devient plus beau et mon cœur se remplit de bonheur.",
      gradient: "from-yellow-200 to-orange-200"
    },
    {
      icon: <Heart className="text-pink-500" size={48} />,
      title: "Ta tendresse",
      message: "Ta douceur et ta tendresse me font fondre à chaque instant. Dans tes bras, je trouve la paix et le réconfort dont j'ai toujours rêvé.",
      gradient: "from-pink-200 to-rose-200"
    },
    {
      icon: <Star className="text-purple-500" size={48} />,
      title: "Ta beauté intérieure",
      message: "Tu es belle à l'extérieur, mais c'est ta beauté intérieure qui m'a complètement conquis. Ton cœur généreux et ta bienveillance m'inspirent chaque jour.",
      gradient: "from-purple-200 to-indigo-200"
    },
    {
      icon: <Sun className="text-amber-500" size={48} />,
      title: "Ma source de lumière",
      message: "Tu es mon soleil, ma lumière dans l'obscurité. Avec toi, chaque jour est une nouvelle aventure remplie d'amour et de complicité.",
      gradient: "from-amber-200 to-yellow-200"
    }
  ];

  const handleCardClick = (index: number) => {
    if (!flippedCards.includes(index)) {
      const newFlipped = [...flippedCards, index];
      setFlippedCards(newFlipped);
      
      if (newFlipped.length === cards.length) {
        setTimeout(() => {
          setAllRevealed(true);
        }, 1000);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 py-12">
      {/* Header */}
      <div className="text-center mb-12 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-4 font-serif">
          Pourquoi je t'aime
        </h2>
        <p className="text-lg text-gray-600 font-light">
          Clique sur chaque carte pour découvrir mes pensées les plus tendres...
        </p>
        {flippedCards.length < cards.length && (
          <p className="text-sm text-pink-500 mt-2 animate-pulse">
            {flippedCards.length}/{cards.length} cartes révélées
          </p>
        )}
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12 w-full">
        {cards.map((card, index) => {
          const isFlipped = flippedCards.includes(index);
          
          return (
            <div
              key={index}
              className="relative w-full h-80 cursor-pointer group perspective-1000"
              onClick={() => handleCardClick(index)}
            >
              <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                {/* Front of card */}
                <div className={`absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br ${card.gradient} rounded-2xl shadow-xl border border-white/50 flex flex-col items-center justify-center text-center p-8`}>
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 font-serif">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 italic text-sm">
                    Clique pour découvrir...
                  </p>
                </div>
                
                {/* Back of card */}
                <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br ${card.gradient} rounded-2xl shadow-xl border border-white/50 flex flex-col items-center justify-center text-center p-6`}>
                  <div className="mb-4">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 font-serif">
                    {card.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-light text-sm">
                    {card.message}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Continue button */}
      {allRevealed && (
        <div className="text-center animate-fade-in">
          <p className="text-lg text-gray-600 mb-6 font-light">
            Et ce n'est que le début de cette surprise... 💖
          </p>
          <button
            onClick={onComplete}
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-pink-600 hover:to-purple-600"
          >
            Continuer l'aventure ✨
          </button>
        </div>
      )}
      
      {/* Hint about hidden heart */}
      {flippedCards.length >= 2 && !allRevealed && (
        <div className="text-center mt-8 animate-fade-in">
          <p className="text-sm text-gray-500 italic">
            Psst... Il y a peut-être quelque chose de caché sur cette page... 👀
          </p>
        </div>
      )}
    </div>
  );
};

export default CardsPage;