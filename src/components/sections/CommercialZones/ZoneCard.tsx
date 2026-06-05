import React from 'react';
import type { CardItem } from '../../../types';

interface ZoneCardProps {
  zone: CardItem;
}

export const ZoneCard: React.FC<ZoneCardProps> = ({ zone }) => {
  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:border-purple-200 hover:shadow-sm transition-all duration-200 flex items-start gap-4 text-left">
      <div className="text-2xl shrink-0 bg-slate-50 p-2.5 rounded-xl border border-slate-100/40">
        {zone.icon}
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-sm md:text-base font-sans font-bold text-slate-900 tracking-wide">
          {zone.title}
        </h3>
        <p className="text-slate-500 text-xs leading-relaxed">
          {zone.description}
        </p>
      </div>
    </div>
  );
};

export default ZoneCard;