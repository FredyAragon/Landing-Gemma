import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  children, 
  className = "", 
  align = 'left' 
}) => {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <h2 className={`text-2xl md:text-4xl font-serif font-bold text-slate-900 leading-tight mt-3 mb-6 ${alignClass} ${className}`}>
      {children}
    </h2>
  );
};

export default SectionHeading;