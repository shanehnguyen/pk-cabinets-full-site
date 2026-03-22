import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary';
}

const Button: React.FC<ButtonProps> = ({ children, className = '', variant = 'primary', ...props }) => {
  const baseStyles = "inline-block no-underline text-center transition-colors font-sans";
  const variants = {
    primary: "bg-pk-gold text-white hover:bg-pk-gold-dark text-[13px] tracking-[0.04em] px-[26px] py-[13px] font-medium uppercase"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
