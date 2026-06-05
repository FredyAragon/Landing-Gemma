import React from 'react';
import type { MetricItem } from '../../../types';

const HeroMetrics: React.FC = () => {
  const metrics: MetricItem[] = [
    { value: "11+", label: "Zonas especializadas" },
    { value: "Arequipa", label: "Norte - Zamácola", subLabel: "Cerca al Aeropuerto" },
    { value: "100%", label: "Asesoría personalizada" }
  ];

  return (
    <div className="flex flex-wrap items-start gap-8 md:gap-12 pt-8 border-t border-white/10 w-full">
      {metrics.map((metric, index) => (
        <div key={index} className="flex flex-col">
          <span className="text-2xl md:text-3xl font-serif font-bold text-amber-300">
            {metric.value}
          </span>
          <span className="text-xs md:text-sm text-purple-200 mt-1 font-medium">
            {metric.label}
          </span>
          {metric.subLabel && (
            <span className="text-[10px] md:text-xs text-purple-300/80">
              {metric.subLabel}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default HeroMetrics;