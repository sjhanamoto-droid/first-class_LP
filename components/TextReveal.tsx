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

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsRevealed(true);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay]);

  // 初期表示時に要素がビューポート内にある場合も表示
  useEffect(() => {
    const checkInitialVisibility = () => {
      if (elementRef.current && !isRevealed) {
        const rect = elementRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;
        
        const isInViewport = 
          rect.top < windowHeight && 
          rect.bottom > 0 &&
          rect.left < windowWidth && 
          rect.right > 0;
        
        if (isInViewport) {
          const timer = setTimeout(() => {
            setIsRevealed(true);
          }, delay * 1000);
          return () => clearTimeout(timer);
        }
      }
    };

    // 即座にチェック
    checkInitialVisibility();

    // ページ読み込み完了後にもチェック
    if (document.readyState === 'complete') {
      checkInitialVisibility();
    } else {
      window.addEventListener('load', checkInitialVisibility);
      document.addEventListener('DOMContentLoaded', checkInitialVisibility);
    }

    // 複数回チェック（レイアウトが確定するまで）
    const timers: NodeJS.Timeout[] = [];
    for (let i = 0; i < 10; i++) {
      timers.push(setTimeout(checkInitialVisibility, i * 100));
    }

    return () => {
      timers.forEach(t => clearTimeout(t));
      window.removeEventListener('load', checkInitialVisibility);
      document.removeEventListener('DOMContentLoaded', checkInitialVisibility);
    };
  }, [delay, isRevealed]);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        clipPath: isRevealed ? 'inset(0% 0% 0% 0%)' : 'inset(0% 100% 0% 0%)',
        transition: `clip-path ${duration}s cubic-bezier(0.77, 0, 0.175, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default TextReveal;
