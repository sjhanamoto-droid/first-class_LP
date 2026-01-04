import React, { useEffect, useState } from 'react';
import Button from './ui/Button';
import ParallaxImage from './ParallaxImage';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-white pt-20">
      
      {/* Massive Typography Background with Animation */}
      <div 
        className="absolute top-[55%] md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 opacity-[0.03] select-none pointer-events-none"
        style={{
          transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
         <h1 
           className="text-[20vw] font-oswald font-bold leading-none uppercase text-black"
           style={{
             opacity: isLoaded ? 1 : 0,
             transform: isLoaded ? 'scale(1)' : 'scale(0.8)',
             transition: 'opacity 1.5s ease-out, transform 1.5s ease-out',
           }}
         >
            First Class
         </h1>
      </div>

      <div className="relative z-10 w-full max-w-[1920px] h-full grid grid-cols-1 md:grid-cols-12 gap-0">
        
        {/* Left: Text Content */}
        <div className="md:col-span-5 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-12 pb-32 md:pb-12 order-2 md:order-1 relative">
           <div 
             className="absolute top-0 left-6 w-px h-20 bg-black hidden md:block"
             style={{
               height: isLoaded ? '80px' : '0px',
               transition: 'height 1s ease-out 0.5s',
             }}
           ></div>
           
           <div className="mb-8">
             <span 
               className="inline-block border border-black px-3 py-1 text-xs font-bold tracking-[0.2em] mb-6 uppercase"
               style={{
                 opacity: isLoaded ? 1 : 0,
                 transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                 transition: 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s',
               }}
             >
               Women's Entrepreneur Community
             </span>
             <h1 
               className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-[1.2] mb-4 tracking-tight text-gray-900"
               style={{
                 opacity: isLoaded ? 1 : 0,
                 transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                 transition: 'opacity 1s ease-out 0.6s, transform 1s ease-out 0.6s',
               }}
             >
               女性起業家<br/>
               コミュニティ<br/>
               <span 
                 className="text-pink-600"
                 style={{
                   opacity: isLoaded ? 1 : 0,
                   transition: 'opacity 1.2s ease-out 0.8s',
                 }}
               >
                 FIRST CLASS
               </span>
             </h1>
             <p 
               className="text-gray-700 text-xl md:text-2xl font-medium mb-10 leading-relaxed"
               style={{
                 opacity: isLoaded ? 1 : 0,
                 transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                 transition: 'opacity 1s ease-out 0.9s, transform 1s ease-out 0.9s',
               }}
             >
               理想の生き方を、<br/>
               仲間とともに実現する。
             </p>
           </div>
           
           <div 
             className="mb-6 md:mb-0"
             style={{
               opacity: isLoaded ? 1 : 0,
               transform: isLoaded ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
               transition: 'opacity 0.8s ease-out 1.2s, transform 0.8s ease-out 1.2s',
             }}
           >
             <Button variant="black" size="lg" withArrow>
               メンバー登録はこちら
             </Button>
           </div>
        </div>

        {/* Right: Image */}
        <div className="md:col-span-7 relative h-[50vh] md:h-full order-1 md:order-2 overflow-hidden border-l border-gray-200">
           <ParallaxImage
             src="./images/hero.jpg"
             alt="Woman Galaxy"
             className="w-full h-full object-cover hero-image-colorize"
             speed={0.3}
           />
        </div>

      </div>
      
      {/* Scroll Marquee at Bottom */}
      <div className="absolute bottom-0 md:bottom-10 left-0 w-full overflow-hidden border-y border-gray-200 bg-white py-3 z-20">
        <div 
          className="whitespace-nowrap flex items-center"
          style={{
            display: 'inline-flex',
            animation: 'marquee 30s linear infinite',
            willChange: 'transform',
          }}
        >
          <span className="text-2xl font-oswald font-bold uppercase tracking-widest mx-8">First Class Community</span>
          <span className="w-2 h-2 bg-pink-600 rounded-full"></span>
          <span className="text-2xl font-oswald font-bold uppercase tracking-widest mx-8 text-transparent stroke-text">Life Design Academy</span>
          <span className="w-2 h-2 bg-pink-600 rounded-full"></span>
          <span className="text-2xl font-oswald font-bold uppercase tracking-widest mx-8">Beauty / Food / Health / Fashion</span>
          <span className="w-2 h-2 bg-pink-600 rounded-full"></span>
          <span className="text-2xl font-oswald font-bold uppercase tracking-widest mx-8 text-transparent stroke-text">Financial Freedom</span>
          <span className="w-2 h-2 bg-pink-600 rounded-full"></span>
          <span className="text-2xl font-oswald font-bold uppercase tracking-widest mx-8">First Class Community</span>
          <span className="w-2 h-2 bg-pink-600 rounded-full"></span>
          <span className="text-2xl font-oswald font-bold uppercase tracking-widest mx-8 text-transparent stroke-text">Life Design Academy</span>
          <span className="w-2 h-2 bg-pink-600 rounded-full"></span>
          <span className="text-2xl font-oswald font-bold uppercase tracking-widest mx-8">Beauty / Food / Health / Fashion</span>
          <span className="w-2 h-2 bg-pink-600 rounded-full"></span>
          <span className="text-2xl font-oswald font-bold uppercase tracking-widest mx-8 text-transparent stroke-text">Financial Freedom</span>
          <span className="w-2 h-2 bg-pink-600 rounded-full"></span>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .stroke-text {
          -webkit-text-stroke: 1px black;
          color: transparent;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .hero-image-colorize {
          filter: grayscale(100%);
          animation: colorize 3s ease-in-out 1.5s forwards;
        }
        @keyframes colorize {
          0% {
            filter: grayscale(100%);
          }
          100% {
            filter: grayscale(0%);
          }
        }
      `}} />
    </section>
  );
};

export default Hero;