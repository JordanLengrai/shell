import React from 'react';
import { Heart } from 'lucide-react';

interface FloatingHeartProps {
  delay?: number;
}

const FloatingHeart: React.FC<FloatingHeartProps> = ({ delay = 0 }) => {
  return (
    <div
      className="absolute animate-float-up opacity-30"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${8 + Math.random() * 4}s`
      }}
    >
      <Heart 
        className="text-pink-400" 
        size={12 + Math.random() * 16} 
      />
    </div>
  );
};

export default FloatingHeart;