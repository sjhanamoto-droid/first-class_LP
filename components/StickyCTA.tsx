import React, { useState, useEffect } from 'react';
import Button from './ui/Button';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 animate-in slide-in-from-bottom-full duration-500 md:hidden">
      <Button variant="black" fullWidth className="!rounded-none !py-4 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        LINEでメンバー登録
      </Button>
    </div>
  );
};

export default StickyCTA;