import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = false } = options;
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // 初期表示チェック：要素が既にビューポート内にある場合
    const checkInitialVisibility = () => {
      if (!element) return false;
      
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const windowWidth = window.innerWidth || document.documentElement.clientWidth;
      
      // より広い範囲でチェック（PCサイズでも確実に検知）
      const isInViewport = 
        rect.top < windowHeight * 2 && 
        rect.bottom > -windowHeight * 0.5 &&
        rect.left < windowWidth * 2 && 
        rect.right > -windowWidth * 0.5;
      
      if (isInViewport) {
        setIsVisible(true);
        return true;
      }
      return false;
    };

    // requestAnimationFrameを使用してより確実にチェック
    const checkWithRAF = () => {
      requestAnimationFrame(() => {
        if (checkInitialVisibility()) {
          return;
        }
        // 複数回試行
        setTimeout(() => checkInitialVisibility(), 50);
        setTimeout(() => checkInitialVisibility(), 150);
        setTimeout(() => checkInitialVisibility(), 300);
        setTimeout(() => checkInitialVisibility(), 500);
      });
    };

    // 即座にチェック
    checkWithRAF();

    // 初期チェックを複数回実行（レイアウトが確定するまで待つ）
    let initialCheckCount = 0;
    const maxInitialChecks = 20;
    const initialCheckInterval = setInterval(() => {
      initialCheckCount++;
      if (checkInitialVisibility() || initialCheckCount >= maxInitialChecks) {
        clearInterval(initialCheckInterval);
      }
    }, 100);

    // ページ読み込み時にもチェック
    if (document.readyState === 'complete') {
      checkWithRAF();
    } else {
      window.addEventListener('load', checkWithRAF);
      // DOMContentLoaded時にもチェック
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
        rootMargin: rootMargin || '100px' // より広い範囲で検知
      }
    );

    observer.observe(element);

    return () => {
      clearInterval(initialCheckInterval);
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

