import React from 'react';
import Avatar from '../../ui/Avatar';
import type { TestimonialItem } from '../../../types';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between gap-6 text-left relative">
      {/* Icono de comillas flotante estético */}
      <span className="absolute top-6 left-6 text-purple-200 font-serif text-5xl leading-none pointer-events-none select-none">
        “
      </span>
      
      {/* Texto de la opinión */}
      <p className="text-slate-600 text-xs md:text-sm italic leading-relaxed pt-4 relative z-10">
        {testimonial.quote}
      </p>
      
      {/* Footer del testimonio: Estrellas + Autor */}
      <div className="flex flex-col gap-3 pt-4 border-t border-slate-50">
        {/* Renderizado de estrellas (por si decides cambiar el número) */}
        <div className="flex gap-0.5 text-amber-400 text-xs">
          {Array.from({ length: testimonial.stars }).map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>
        
        {/* Fila del Perfil */}
        <div className="flex items-center gap-3">
          <Avatar 
            initials={testimonial.avatarInitials} 
            bgColor={testimonial.avatarBg} 
            className="w-10 h-10 text-xs"
          />
          <div className="flex flex-col">
            <span className="font-sans font-bold text-xs md:text-sm text-slate-900">
              {testimonial.author}
            </span>
            <span className="text-slate-400 text-[11px]">
              {testimonial.role}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;