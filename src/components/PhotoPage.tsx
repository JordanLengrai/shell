import React from 'react';

interface PhotoPageProps {
  onNext: () => void;
  onSecret?: () => void;
}

const PhotoPage: React.FC<PhotoPageProps> = ({ onNext, onSecret }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-pink-100 to-purple-100">
      <div className="max-w-xl mx-auto text-center bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-pink-100">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-serif">
          Une petite surprise Shein 💝
        </h1>
        <img 
          src="/photosurprise.png" 
          alt="Commande Shein" 
          className="rounded-2xl shadow-lg mx-auto mb-8 w-full max-w-2xl max-h-[500px] md:max-h-[600px] object-contain bg-white" 
        />
        <p className="text-lg text-gray-600 font-light mb-8">
          J’ai passé une commande sur Shein rien que pour toi, avec les choses que tu voulais !<br/>
          J’espère que ça te fera plaisir, ma Sherihane d’amour 🛍️
        </p>
        <button
          onClick={onNext}
          className="mt-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Continuer
        </button>
      </div>
      {/* Bouton secret */}
      {onSecret && (
        <button
          onClick={onSecret}
          className="fixed bottom-6 right-6 z-50 opacity-40 hover:opacity-90 transition-all duration-300 bg-white rounded-full p-3 shadow-lg"
          aria-label="Surprise secrète"
        >
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
            <path fill="#a21caf" d="M12 21s-6.7-5.2-9.3-8.3A6 6 0 0 1 12 4a6 6 0 0 1 9.3 8.7C18.7 15.8 12 21 12 21Z"/>
          </svg>
        </button>
      )}
    </div>
  );
};

export default PhotoPage;
