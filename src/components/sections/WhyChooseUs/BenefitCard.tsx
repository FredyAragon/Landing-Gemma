// src/components/sections/WhyChooseUs/BenefitCard.tsx
import React from 'react';
import type { CardItem } from '../../../types';

interface BenefitCardProps {
  item: CardItem;
  isActive?: boolean; // Por si necesitas dejar una activa por defecto de forma estática
}

export const BenefitCard: React.FC<BenefitCardProps> = ({ item, isActive }) => {
  return (
    <div 
      style={{ borderRadius: '20px' }}
      className={`p-8 bg-[#F9FAFB] flex flex-col items-center text-center gap-4 border w-full max-w-[368px] min-h-[276px] relative overflow-hidden
        transition-all duration-300 ease-out transform
        cursor-pointer
        hover:-translate-y-3 hover:shadow-[0_20px_30px_rgba(0,0,0,0.06)]
        ${isActive 
          ? '-translate-y-3 shadow-[0_20px_30px_rgba(0,0,0,0.06)] border-[#E8E6F0]' 
          : 'border-[#E8E6F0]'
        } group`}
    >
      {/* Contenedor del Ícono (Color Green 20 de Figma) */}
      <div className="w-[60px] h-[60px] bg-[#C1FFEA] flex items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105">
        <span className="text-2xl">{item.icon}</span>
      </div>

      {/* Título de la tarjeta */}
      <h3 className="text-xl font-bold text-[#11142D] tracking-tight leading-snug">
        {item.title}
      </h3>

      {/* Descripción */}
      <p className="text-slate-500 text-sm leading-relaxed">
        {item.description}
      </p>

      {/* El "Piso Verde Menta" Animado al hacer Hover */}
      <div 
        className={`absolute bottom-0 left-0 w-full h-[6px] bg-[#3cd3a6] transition-all duration-300 origin-bottom scale-y-0 group-hover:scale-y-100
          ${isActive ? 'scale-y-100' : ''}`}
      />
    </div>
  );
};

export default BenefitCard;