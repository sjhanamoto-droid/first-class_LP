import React, { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  duration?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.8,
}) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [isLargeScreen, setIsLargeScreen] = React.useState(false);

  // PCサイズ（1200px以上）を検出
  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1200);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const getTransform = () => {
    // PCサイズではアニメーション無効
    if (isLargeScreen) {
      return 'none';
    }
    
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return 'translateY(30px)';
        case 'down':
          return 'translateY(-30px)';
        case 'left':
          return 'translateX(30px)';
        case 'right':
          return 'translateX(-30px)';
        default:
          return 'none';
      }
    }
    return 'none';
  };

  const getOpacity = () => {
    // PCサイズでは常に表示
    if (isLargeScreen) {
      return 1;
    }
    
    if (direction === 'fade') {
      return isVisible ? 1 : 0;
    }
    return isVisible ? 1 : 1;
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: getOpacity(),
        transform: getTransform(),
        transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;

