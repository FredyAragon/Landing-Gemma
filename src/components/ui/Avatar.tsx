import React from 'react';

interface AvatarProps {
  initials: string;
  bgColor?: string; // Clases Tailwind tipo 'bg-purple-800'
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ 
  initials, 
  bgColor = "bg-purple-700",
  className = "" 
}) => {
  return (
    <div className={`w-12 h-12 rounded-full ${bgColor} flex items-center justify-center text-white font-sans font-bold text-sm tracking-wider uppercase shadow-inner shrink-0 ${className}`}>
      {initials}
    </div>
  );
};

export default Avatar;