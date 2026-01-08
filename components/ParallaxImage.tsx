import React, { useEffect, useRef, useState } from 'react';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  isVideo?: boolean;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  className = '',
  speed = 0.5,
  isVideo = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
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

  useEffect(() => {
    if (isVideo && videoRef.current) {
      videoRef.current.play().catch(() => {
        // 自動再生が失敗した場合は無視（ユーザー操作が必要な場合がある）
      });
    }
  }, [isVideo]);

  return (
    <div ref={containerRef} className="relative overflow-hidden w-full h-full">
      {isVideo ? (
        <video
          ref={videoRef}
          src={src}
          className={className}
          autoPlay
          loop
          muted
          playsInline
          style={{
            transform: `translateY(${offset}px) scale(1.1)`,
            willChange: 'transform',
          }}
        />
      ) : (
        <img
          src={src}
          alt={alt}
          className={className}
          style={{
            transform: `translateY(${offset}px) scale(1.1)`,
            willChange: 'transform',
          }}
        />
      )}
    </div>
  );
};

export default ParallaxImage;

