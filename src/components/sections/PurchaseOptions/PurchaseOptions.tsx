import React from 'react';
import PurchaseCard from './PurchaseCard';
import { purchaseOptionsData } from '../../../data/purchaseOptions';

const PurchaseOptions: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

        {/* Columna Izquierda: Texto */}
        <div className="lg:col-span-4 flex flex-col items-start text-left">

          <div className="mb-5">
            <span className="inline-block font-bold px-4 py-2 rounded-full uppercase text-[11px] tracking-widest text-[#0F9D72] bg-[#DFFCF0]">
              Facilidades de compra
            </span>
          </div>

          <h2 className="font-bold max-w-md mb-5 tracking-tight text-[32px] leading-[40px] text-[#1A1430]">
            <span className="text-[#6B21E8]">Da el primer paso</span> sin complicarte
          </h2>

          <p className="max-w-sm text-[15px] leading-[26px] text-[#4A4360]">
            Un asesor te ayudará a revisar las opciones disponibles para que
            tomes una decisión con mayor tranquilidad.
          </p>

        </div>

        {/* Columna Derecha: Tarjetas */}
        <div className="lg:col-span-8 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {purchaseOptionsData.map((option, index) => (
              <PurchaseCard key={index} item={option} elevated={index === 0} />
            ))}
          </div>

          {/* Nota aclaratoria */}
          <div className="mt-10 flex justify-end">
            <div className="bg-slate-100/80 border border-slate-200/50 rounded-full px-5 py-2 inline-flex items-center gap-2 text-[11px] text-slate-500">
              ⚠️ <span className="font-medium uppercase tracking-wide">Las opciones están sujetas a evaluación y disponibilidad.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PurchaseOptions;