import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = false } = options;
  const elementRef = useRef<HTMLDivElement>(null);
  
  // 初期状態をチェックして設定
  const getInitialVisibility = () => {
    if (typeof window === 'undefined') return false;
    // 初期レンダリング時は要素がまだ存在しない可能性があるため、falseを返す
    // useEffect内でチェックする
    return false;
  };
  
  const [isVisible, setIsVisible] = useState(getInitialVisibility);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // 初期表示チェック：要素が既にビューポート内にある場合
    const checkInitialVisibility = () => {
      if (!element) return false;
      
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const windowWidth = window.innerWidth || document.documentElement.clientWidth;
      
      // 非常に広い範囲でチェック（PCサイズでも確実に検知）
      // 画面の上下左右に余裕を持たせる
      const margin = Math.max(windowHeight, windowWidth) * 0.5;
      const isInViewport = 
        rect.top < windowHeight + margin && 
        rect.bottom > -margin &&
        rect.left < windowWidth + margin && 
        rect.right > -margin;
      
      if (isInViewport) {
        setIsVisible(true);
        return true;
      }
      return false;
    };

    // 即座にチェック（複数回試行）
    const checkImmediately = () => {
      // 即座にチェック
      checkInitialVisibility();
      
      // 複数回試行（レイアウトが確定するまで）
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

    // requestAnimationFrameを使用してより確実にチェック
    const checkWithRAF = () => {
      requestAnimationFrame(() => {
        checkInitialVisibility();
        // 複数回試行
        setTimeout(() => checkInitialVisibility(), 10);
        setTimeout(() => checkInitialVisibility(), 50);
        setTimeout(() => checkInitialVisibility(), 100);
        setTimeout(() => checkInitialVisibility(), 200);
        setTimeout(() => checkInitialVisibility(), 300);
        setTimeout(() => checkInitialVisibility(), 500);
        setTimeout(() => checkInitialVisibility(), 800);
      });
    };

    // 即座にチェック（同期的に実行）
    checkInitialVisibility();
    const cleanupImmediate = checkImmediately();
    checkWithRAF();
    
    // さらに短い間隔で複数回チェック（確実に検知）
    const quickCheckTimers: NodeJS.Timeout[] = [];
    for (let i = 0; i < 10; i++) {
      quickCheckTimers.push(setTimeout(() => {
        checkInitialVisibility();
      }, i * 20));
    }

    // ページ読み込み時にもチェック
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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { 
        threshold, 
        rootMargin: rootMargin || '200px' // PCサイズでも確実に検知するため、より広い範囲で検知
      }
    );

    observer.observe(element);

    return () => {
      cleanupImmediate();
      quickCheckTimers.forEach(t => clearTimeout(t));
      window.removeEventListener('load', checkWithRAF);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('DOMContentLoaded', checkWithRAF);
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { elementRef, isVisible };
};

