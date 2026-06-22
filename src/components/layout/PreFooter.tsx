import React from 'react';

const PreFooter: React.FC = () => {
  return (
    <section className="bg-[#540ED5] text-white py-24 px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-start text-left">

        {/* Píldora */}
        <span className="inline-block border border-[#F5A623] text-[#F5A623] text-[11px] font-bold px-5 py-2 rounded-full uppercase tracking-widest mb-6">
          ¿Listo para conocer Gemma?
        </span>

        {/* Título */}
        <h2 className="text-[42px] md:text-[52px] font-bold leading-tight mb-5">
          Encuentra el local<br />
          que mejor{' '}
          <span className="text-[#F5A623]">se adapta<br />a tu objetivo</span>
        </h2>

        {/* Descripción */}
        <p className="text-white/80 text-[15px] leading-relaxed max-w-sm">
          Déjanos tus datos y un asesor te ayudará a encontrar la opción que mejor se adapte a tus objetivos.
        </p>

      </div>
    </section>
  );
};

export default PreFooter;