import React, { useEffect, useRef, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

const TextReveal: React.FC<TextRevealProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
}) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [isRevealed, setIsRevealed] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // PCサイズ（1200px以上）を検出
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1200);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsRevealed(true);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay]);

  // PCサイズでは即座に表示、それ以外ではアニメーション
  useEffect(() => {
    if (isLargeScreen) {
      // PCサイズでは即座に表示
      setIsRevealed(true);
      return;
    }

    // タブレット・スマホサイズではアニメーション
    const checkInitialVisibility = () => {
      if (elementRef.current && !isRevealed) {
        const rect = elementRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;
        
        const isInViewport = 
          rect.top < windowHeight * 2 && 
          rect.bottom > -windowHeight * 0.5 &&
          rect.left < windowWidth * 2 && 
          rect.right > -windowWidth * 0.5;
        
        if (isInViewport) {
          const timer = setTimeout(() => {
            setIsRevealed(true);
          }, delay * 1000);
          return () => clearTimeout(timer);
        }
      }
    };
    
    const checkWithRAF = () => {
      requestAnimationFrame(() => {
        checkInitialVisibility();
        setTimeout(() => checkInitialVisibility(), 50);
        setTimeout(() => checkInitialVisibility(), 150);
        setTimeout(() => checkInitialVisibility(), 300);
        setTimeout(() => checkInitialVisibility(), 500);
      });
    };
    
    checkWithRAF();
    
    const timers: NodeJS.Timeout[] = [];
    for (let i = 0; i < 20; i++) {
      timers.push(setTimeout(checkInitialVisibility, 100 * (i + 1)));
    }
    
    if (document.readyState === 'complete') {
      checkWithRAF();
    } else {
      window.addEventListener('load', checkWithRAF);
      document.addEventListener('DOMContentLoaded', checkWithRAF);
    }
    
    const handleResize = () => {
      checkWithRAF();
    };
    window.addEventListener('resize', handleResize);
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
      window.removeEventListener('load', checkWithRAF);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('DOMContentLoaded', checkWithRAF);
    };
  }, [delay, isRevealed, isLargeScreen]);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        clipPath: isRevealed || isLargeScreen ? 'inset(0% 0% 0% 0%)' : 'inset(0% 100% 0% 0%)',
        transition: isLargeScreen ? 'none' : `clip-path ${duration}s cubic-bezier(0.77, 0, 0.175, 1) ${delay}s`,
        opacity: 1, // 常に表示
      }}
    >
      {children}
    </div>
  );
};

export default TextReveal;

