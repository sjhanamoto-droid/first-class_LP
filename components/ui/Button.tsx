import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gold' | 'outline' | 'black';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  fullWidth?: boolean;
  withArrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  fullWidth = false,
  withArrow = false,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 border sharp-corners relative overflow-hidden group tracking-wider font-oswald uppercase";
  
  const variants = {
    primary: "bg-pink-600 text-white border-pink-600 hover:bg-white hover:text-pink-600",
    secondary: "bg-white text-black border-black hover:bg-black hover:text-white",
    gold: "bg-transparent border-white text-white hover:bg-white hover:text-black",
    outline: "bg-transparent border-white text-white hover:bg-white hover:text-black",
    black: "bg-black text-white border-black hover:bg-white hover:text-black"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg",
    xl: "px-12 py-5 text-xl",
  };

  const widthStyles = fullWidth ? "w-full" : "";

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (props.onClick) {
      props.onClick(e);
    } else {
      window.open('https://page.j-group.club/line/open/R2F6YjX0qs62?mtid=LqNMmgsH3yO8&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnUvRMaapnUE29K1DhyqiqeUsxYb6m-G9mpSzbbPEIFMx8WaMPNFR2MCnzWxQ_aem_iQf-kzymyRzgRhaYm8iCxw', '_blank');
    }
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyles} ${className}`}
      {...props}
      onClick={handleClick}
    >
      <span className="relative z-10 flex items-center">
        {children}
        {withArrow && <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />}
      </span>
    </button>
  );
};

export default Button;