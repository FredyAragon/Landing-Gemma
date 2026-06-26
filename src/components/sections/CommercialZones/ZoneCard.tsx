// src/components/sections/CommercialZones/ZoneCard.tsx
import React from 'react';
import type { ZoneItem } from '../../../data/zones';

interface ZoneCardProps {
  zone: ZoneItem;
}

const ZoneCard: React.FC<ZoneCardProps> = ({ zone }) => {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col"
      style={{ width: '373.33px', height: '350px' }}
    >
      <div className="w-full flex-1 overflow-hidden bg-slate-100">
        <img
          src={zone.image}
          alt={zone.title}
          loading="lazy"
          draggable={false}
          className="w-full h-full object-cover object-center pointer-events-none select-none"
        />
      </div>
      <div className="p-5 text-left shrink-0">
        <h3 className="text-base md:text-lg font-bold text-[#1A1430] mb-1">
          {zone.title}
        </h3>
        <p className="text-sm text-[#6B6680]">
          {zone.description}
        </p>
      </div>
    </div>
  );
};

export default ZoneCard;