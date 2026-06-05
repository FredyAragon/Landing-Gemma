import React from 'react';
import type { CardItem } from '../../../types';

interface PurchaseCardProps {
  item: CardItem;
  index: number;
}

export const PurchaseCard: React.FC<PurchaseCardProps> = ({ item, index }) => {
  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center gap-3 relative group transition-all duration-200 hover:shadow-md">
      {/* Indicador de paso en la esquina superior derecha */}
      <span className="absolute top-4 right-4 bg-slate-50 text-slate-400 text-[10px] font-sans font-bold w-5 h-5 rounded-full flex items-center justify-center border border-slate-100">
        0{index + 1}
      </span>
      
      <div className="text-2xl bg-slate-50 p-3 rounded-2xl border border-slate-100">
        {item.icon}
      </div>
      
      <h3 className="text-sm md:text-base font-sans font-bold text-slate-900 mt-1">
        {item.title}
      </h3>
      
      <p className="text-slate-500 text-xs leading-relaxed">
        {item.description}
      </p>
    </div>
  );
};

export default PurchaseCard;