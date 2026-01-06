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

  // 初期表示時にも表示されるようにする
  useEffect(() => {
    const checkInitialVisibility = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight * 1.5 && rect.bottom > -window.innerHeight * 0.5;
        if (isInViewport && !isRevealed) {
          const timer = setTimeout(() => {
            setIsRevealed(true);
          }, delay * 1000);
          return () => clearTimeout(timer);
        }
      }
    };
    
    // 初期チェック（複数回試行して確実に表示）
    const timers: NodeJS.Timeout[] = [];
    for (let i = 0; i < 5; i++) {
      timers.push(setTimeout(checkInitialVisibility, 100 * (i + 1)));
    }
    
    // ロード時にもチェック
    if (document.readyState === 'complete') {
      checkInitialVisibility();
    } else {
      window.addEventListener('load', checkInitialVisibility);
    }
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
      window.removeEventListener('load', checkInitialVisibility);
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

