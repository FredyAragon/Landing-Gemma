import React from 'react';
import type { CardItem } from '../../../types';

interface BenefitCardProps {
  item: CardItem;
}

export const BenefitCard: React.FC<BenefitCardProps> = ({ item }) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start gap-4 text-left group hover:-translate-y-1">
      {/* Icono animado con un sutil efecto al pasar el mouse */}
      <div className="text-3xl bg-purple-50 p-3 rounded-2xl border border-purple-100/50 group-hover:scale-110 transition-transform duration-300">
        {item.icon}
      </div>
      <h3 className="text-lg md:text-xl font-serif font-bold text-slate-900">
        {item.title}
      </h3>
      <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
        {item.description}
      </p>
    </div>
  );
};

export default BenefitCard;