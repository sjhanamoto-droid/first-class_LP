import React from 'react';

interface SectionTitleProps {
  en: string;
  ja: string;
  color?: 'pink' | 'gold' | 'white';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ en, ja, color = 'pink' }) => {
  const colorClasses = {
    pink: 'text-pink-600',
    gold: 'text-amber-500',
    white: 'text-white'
  };

  const lineColors = {
    pink: 'bg-pink-300',
    gold: 'bg-amber-300',
    white: 'bg-white/50'
  };

  return (
    <div className="text-center mb-16">
      <h2 className={`font-playfair text-5xl md:text-6xl font-bold opacity-10 mb-[-1.5rem] ${colorClasses[color]} tracking-widest`}>
        {en}
      </h2>
      <div className="relative inline-block">
        <h3 className={`text-2xl md:text-3xl font-bold ${color === 'white' ? 'text-white' : 'text-gray-800'} relative z-10`}>
          {ja}
        </h3>
        <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 ${lineColors[color]} rounded-full`}></div>
      </div>
    </div>
  );
};

export default SectionTitle;