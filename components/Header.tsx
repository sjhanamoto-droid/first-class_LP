import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'CONCEPT', href: '#concept' },
    { name: 'LEADERS', href: '#leaders' },
    { name: 'BENEFITS', href: '#benefits' },
    { name: 'PRICING', href: '#price' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-gray-200 ${
          isScrolled || isMobileMenuOpen ? 'bg-white text-black py-4' : 'bg-white/90 backdrop-blur-sm text-black py-4'
        }`}
      >
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-2xl font-playfair font-black tracking-tighter text-black uppercase">
              First Class
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-oswald font-bold tracking-widest hover:text-pink-600 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <button 
              onClick={() => window.open('https://line.me', '_blank')}
              className="bg-black text-white px-6 py-2 text-sm font-oswald font-bold tracking-widest hover:bg-pink-600 transition-colors uppercase"
            >
              Join Member
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col pt-24 px-6 animate-in slide-in-from-right duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-4xl font-oswald font-bold text-black py-4 border-b border-gray-100 hover:text-pink-600 uppercase"
            >
              {link.name}
            </a>
          ))}
          <div className="mt-8">
            <button 
              onClick={() => window.open('https://line.me', '_blank')}
              className="w-full bg-black text-white py-4 text-xl font-oswald font-bold tracking-widest uppercase"
            >
              Join Member
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;