import React from 'react';
import type { PurchaseOption } from '../../../data/purchaseOptions';

interface PurchaseCardProps {
  item: PurchaseOption;
  elevated?: boolean;
}

const PurchaseCard: React.FC<PurchaseCardProps> = ({ item, elevated }) => {
  return (
    <div
      className={`bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center gap-4 transition-all duration-200 hover:shadow-md ${
        elevated ? 'lg:-mt-6 lg:pb-10' : ''
      }`}
    >
      <div className="text-3xl">
        {item.icon}
      </div>

      <h3 className="font-bold text-[#1A1430] text-base md:text-lg leading-snug">
        {item.title}
      </h3>

      <p className="text-[#6B6680] text-sm leading-relaxed">
        {item.description}
      </p>
    </div>
  );
};

export default PurchaseCard;