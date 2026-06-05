import React from 'react';
import SectionLabel from '../../ui/SectionLabel';
import SectionHeading from '../../ui/SectionHeading';
import ZoneCard from './ZoneCard';
import { zonesData } from '../../../data/zones';

const CommercialZones: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
        <SectionLabel text="Distribución Inteligente" />
        <SectionHeading align="center" className="max-w-2xl">
          11 Zonas comerciales especializadas para asegurar variedad y orden
        </SectionHeading>
        
        {/* Grilla fluida: 1 col en celular, 2 en tablets y 3 en monitores desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-4 w-full">
          {zonesData.map((zone, index) => (
            <ZoneCard key={index} zone={zone} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommercialZones;