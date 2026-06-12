import React from 'react';
import BenefitCard from './BenefitCard';
import { benefitsData } from '../../../data/benefits';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Píldora Superior con color exacto #C1FFEA */}
        {/* Píldora Superior con especificaciones milimétricas de Figma */}
{/* Píldora Superior con el color de texto #3C3C48 y fondo #C1FFEA extraídos de Figma */}
<span 
  style={{ 
    fontSize: '24px', 
    lineHeight: '17.6px', 
    letterSpacing: '1.32px',
    color: '#3C3C48',
    backgroundColor: '#C1FFEA'
  }}
  className="inline-block font-semibold px-5 py-2.5 rounded-full uppercase mb-6 text-center"
>
  ¿Qué buscas tú?
</span>
        
{/* Título Principal en una sola línea con color exacto #540ED5 y especificaciones de Figma */}
<h2 
  style={{ 
    fontSize: '54px', 
    lineHeight: '50.4px', 
    letterSpacing: '-1.08px' 
  }}
  className="font-bold text-[#540ED5] w-full max-w-7xl mb-6 tracking-tight whitespace-nowrap md:whitespace-normal text-center"
>
  No todos compran un local <span className="text-[#11142D]">para poner un negocio.</span>
</h2>

        {/* Subtítulo con tamaño de 18px */}
        <p 
          style={{ fontSize: '18px' }}
          className="text-slate-500 font-normal max-w-3xl mb-14 leading-relaxed mx-auto text-center"
        >
          Un local comercial puede convertirse en una fuente de ingresos, una oportunidad para 
          emprender o una forma de construir patrimonio a largo plazo.
        </p>
        
        {/* Grilla contenedora adaptada a las dimensiones de las tarjetas */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 w-full max-w-6xl mx-auto">
          {benefitsData.map((benefit, index) => (
            <BenefitCard 
              key={index} 
              item={benefit} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;