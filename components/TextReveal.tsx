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
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsRevealed(true);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay]);

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

