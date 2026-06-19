import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'mint';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  fullWidth = false,
  children,
  className = "",
  ...props
}) => {
  // Animación suave, padding responsivo y micro-interacción de click (active:scale)
  const baseStyles = "px-6 py-3 rounded-full font-sans font-medium transition-all duration-200 flex items-center justify-center gap-2 text-sm md:text-base tracking-wide shadow-sm hover:shadow-md active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-purple-700 hover:bg-purple-800 text-white", // Morado principal
    secondary: "bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200", // Lila claro
    accent: "bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold", // Amarillo de conversión urgente
    outline: "border border-slate-200 text-slate-700 hover:bg-slate-50", // Transparente con borde gris fino
    mint: "bg-[#65FFCC] hover:bg-[#4FE6B5] text-[#0A051D] font-semibold", // Verde menta de marca (CTA navbar)
  };

  const widthClass = fullWidth ? "w-full" : "w-max";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;