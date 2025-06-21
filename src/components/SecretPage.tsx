import React from 'react';
import { Heart, ArrowLeft, Gift } from 'lucide-react';

interface SecretPageProps {
  onBack: () => void;
}

const SecretPage: React.FC<SecretPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Back button */}
        <button
          onClick={onBack}
          className="absolute top-8 left-8 flex items-center gap-2 text-gray-600 hover:text-pink-500 transition-colors duration-300"
        >
          <ArrowLeft size={20} />
          <span>Retour</span>
        </button>

        {/* Secret content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-pink-100">
          {/* Header */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <Gift className="text-pink-500 animate-bounce" size={40} />
            <Heart className="text-red-500 animate-pulse" size={36} />
            <Gift className="text-purple-500 animate-bounce" size={40} />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 bg-clip-text text-transparent mb-6 font-serif">
            Tu as trouvé le secret ! 🎉
          </h2>

          <div className="mb-8">
            <div className="text-6xl mb-6">💝</div>
            <p className="text-xl text-gray-700 leading-relaxed font-light mb-6">
              Félicitations, mon détective d'amour ! 
              <br />
              <span className="text-pink-600 font-medium">Voici une surprise spéciale rien que pour toi...</span>
            </p>
          </div>

          {/* Secret message */}
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 mb-8 border border-pink-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Message secret 💌</h3>
            <p className="text-lg text-gray-700 leading-relaxed italic">
              "Chaque jour depuis que je te connais, je découvre une nouvelle raison de t'aimer. 
              Tu n'es pas seulement ma copine, tu es ma meilleure amie, ma complice, mon inspiration. 
              Merci d'être exactement qui tu es, parfaite à mes yeux."
            </p>
            <div className="mt-6 text-right">
              <span className="text-pink-600 font-medium">- Ton amoureux qui t'adore 💕</span>
            </div>
          </div>

      

          {/* Fun fact */}
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
            <div className="text-2xl mb-2">🎯</div>
            <p className="text-gray-700 font-light">
              <strong>Le savais-tu ?</strong> J'ai caché ce petit cœur juste pour voir si tu es aussi curieuse que je le pense... 
              Et devine quoi ? Tu l'es ! C'est une des milliers de choses que j'adore chez toi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecretPage;