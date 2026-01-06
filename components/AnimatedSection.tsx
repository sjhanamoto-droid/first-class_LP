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

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return 'translateY(60px)';
        case 'down':
          return 'translateY(-60px)';
        case 'left':
          return 'translateX(60px)';
        case 'right':
          return 'translateX(-60px)';
        default:
          return 'none';
      }
    }
    return 'none';
  };

  const getOpacity = () => {
    if (!isVisible && direction === 'fade') return 0;
    return isVisible ? 1 : 0;
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
