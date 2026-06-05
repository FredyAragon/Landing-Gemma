import React from 'react';
import SectionLabel from '../../ui/SectionLabel';
import SectionHeading from '../../ui/SectionHeading';
import BenefitCard from './BenefitCard';
import { benefitsData } from '../../../data/benefits';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-slate-50/50">
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
        <SectionLabel text="¿Por qué un local comercial?" />
        <SectionHeading align="center" className="max-w-2xl">
          Muchas familias están mirando locales comerciales por tres razones principales
        </SectionHeading>
        
        {/* Grilla responsiva perfecta para 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-4 w-full">
          {benefitsData.map((benefit, index) => (
            <BenefitCard key={index} item={benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;