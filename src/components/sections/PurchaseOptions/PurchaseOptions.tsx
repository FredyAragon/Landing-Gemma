import React from 'react';
import SectionLabel from '../../ui/SectionLabel';
import SectionHeading from '../../ui/SectionHeading';
import PurchaseCard from './PurchaseCard';
import { purchaseOptionsData } from '../../../data/purchaseOptions';

const PurchaseOptions: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-slate-50/50">
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
        <SectionLabel text="Formas de Compra" />
        <SectionHeading align="center" className="max-w-2xl">
          Comprar puede ser más alcanzable de lo que imaginas
        </SectionHeading>
        
        <p className="text-slate-500 text-xs md:text-sm max-w-2xl leading-relaxed mb-8 -mt-2">
          Consulta por opciones de separación, inicial, cuotas y financiamiento según tu perfil. Un asesor te ayudará a revisar alternativas para que puedas tomar una decisión ordenada.
        </p>
        
        {/* Grilla responsiva de 5 columnas en desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mt-4 w-full">
          {purchaseOptionsData.map((option, index) => (
            <PurchaseCard key={index} item={option} index={index} />
          ))}
        </div>

        {/* Nota aclaratoria inferior */}
        <div className="mt-10 bg-slate-100/80 border border-slate-200/50 rounded-full px-5 py-2 inline-flex items-center gap-2 text-[11px] text-slate-500">
          ⚠️ <span className="font-medium">Las opciones están sujetas a evaluación y disponibilidad.</span>
        </div>
      </div>
    </section>
  );
};

export default PurchaseOptions;