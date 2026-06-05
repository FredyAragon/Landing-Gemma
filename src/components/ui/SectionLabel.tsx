import React from 'react';

interface SectionLabelProps {
  text: string;
  className?: string; // Permite mutar colores si una sección es oscura (ej: el Hero)
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ 
  text, 
  className = "text-purple-700 bg-purple-50 border-purple-100" 
}) => {
  return (
    <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${className}`}>
      {text}
    </span>
  );
};

export default SectionLabel;