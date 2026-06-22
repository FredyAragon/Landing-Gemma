// src/components/sections/CommercialZones/ZoneCard.tsx
import React from 'react';
import type { ZoneItem } from '../../../data/zones';

interface ZoneCardProps {
  zone: ZoneItem;
}

const ZoneCard: React.FC<ZoneCardProps> = ({ zone }) => {
  return (
    <div className="flex-shrink-0 snap-start w-[260px] sm:w-[300px] md:w-[320px] bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
      <div className="w-full h-48 md:h-56 overflow-hidden">
        <img
          src={zone.image}
          alt={zone.title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5 text-left">
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