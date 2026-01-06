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

  // isVisibleがtrueになったら即座にisRevealedもtrueにする（フォールバック）
  useEffect(() => {
    if (isVisible && !isRevealed) {
      const timer = setTimeout(() => {
        setIsRevealed(true);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, isRevealed, delay]);

  // 初期表示時にもアニメーションを実行（PCサイズでも確実に動作）
  useEffect(() => {
    const checkInitialVisibility = () => {
      if (elementRef.current && !isRevealed) {
        const rect = elementRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;
        
        // 非常に広い範囲でチェック（PCサイズでも確実に検知）
        const margin = Math.max(windowHeight, windowWidth) * 0.5;
        const isInViewport = 
          rect.top < windowHeight + margin && 
          rect.bottom > -margin &&
          rect.left < windowWidth + margin && 
          rect.right > -margin;
        
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
        // 複数回試行して確実に検知
        setTimeout(() => checkInitialVisibility(), 10);
        setTimeout(() => checkInitialVisibility(), 50);
        setTimeout(() => checkInitialVisibility(), 100);
        setTimeout(() => checkInitialVisibility(), 200);
        setTimeout(() => checkInitialVisibility(), 300);
        setTimeout(() => checkInitialVisibility(), 500);
        setTimeout(() => checkInitialVisibility(), 800);
      });
    };
    
    // 即座にチェック（複数回試行）
    const checkImmediately = () => {
      checkInitialVisibility();
      const timers: NodeJS.Timeout[] = [];
      for (let i = 0; i < 30; i++) {
        timers.push(setTimeout(() => {
          if (checkInitialVisibility()) {
            timers.forEach(t => clearTimeout(t));
          }
        }, i * 50));
      }
      return () => {
        timers.forEach(t => clearTimeout(t));
      };
    };
    
    const cleanupImmediate = checkImmediately();
    checkWithRAF();
    
    // ロード時にもチェック
    if (document.readyState === 'complete') {
      checkWithRAF();
    } else {
      window.addEventListener('load', checkWithRAF);
      document.addEventListener('DOMContentLoaded', checkWithRAF);
    }
    
    // リサイズ時にも再チェック
    const handleResize = () => {
      checkWithRAF();
    };
    window.addEventListener('resize', handleResize);
    
    return () => {
      cleanupImmediate();
      window.removeEventListener('load', checkWithRAF);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('DOMContentLoaded', checkWithRAF);
    };
  }, [delay, isRevealed]);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        clipPath: isRevealed ? 'inset(0% 0% 0% 0%)' : 'inset(0% 100% 0% 0%)',
        transition: `clip-path ${duration}s cubic-bezier(0.77, 0, 0.175, 1) ${delay}s`,
        opacity: 1, // 常に表示
      }}
    >
      {children}
    </div>
  );
};

export default TextReveal;

