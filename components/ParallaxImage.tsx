import React, { useEffect, useRef, useState } from 'react';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  className = '',
  speed = 0.5,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const elementTop = rect.top + window.pageYOffset;
      const scrolled = window.pageYOffset;
      const elementCenter = elementTop + rect.height / 2;
      const parallax = (scrolled - elementCenter) * speed;
      setOffset(parallax);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={containerRef} className="relative overflow-hidden w-full h-full">
      <img
        src={src}
        alt={alt}
        className={className}
        style={{
          transform: `translateY(${offset}px) scale(1.1)`,
          willChange: 'transform',
        }}
      />
    </div>
  );
};

export default ParallaxImage;

