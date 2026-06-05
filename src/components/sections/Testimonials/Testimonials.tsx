import React from 'react';
import SectionLabel from '../../ui/SectionLabel';
import SectionHeading from '../../ui/SectionHeading';
import TestimonialCard from './TestimonialCard';
import { testimonialsData } from '../../../data/testimonials';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-left flex flex-col items-start">
        <SectionLabel text="Experiencias Reales" />
        <SectionHeading>
          Personas que ya dieron el paso
        </SectionHeading>
        
        <p className="text-slate-500 text-xs md:text-sm max-w-2xl leading-relaxed mb-10 -mt-2">
          Conoce historias de compradores que eligieron Gemma para emprender, alquilar o proyectar una oportunidad para su familia.
        </p>
        
        {/* Grilla responsiva de 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;