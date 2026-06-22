import React from 'react';

const ProjectAdvances: React.FC = () => {
  const checklist = [
    'Visita el proyecto antes de decidir',
    'Asesoría personalizada durante todo el proceso',
    'Opciones de financiamiento disponibles',
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-[#F5F4FA]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

        {/* Columna Izquierda: Texto */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">

          <div className="mb-5">
            <span className="inline-block font-bold px-4 py-2 rounded-full uppercase text-[11px] tracking-widest text-[#3C3C48] bg-[#FFF3C7]">
              Avances de obra
            </span>
          </div>

          <h2 className="font-bold max-w-xl mb-5 tracking-tight text-[40px] md:text-[48px] leading-[48px] md:leading-[56px] text-[#1A1430]">
            <span className="text-[#6B21E8]">Conoce el proyecto</span>{' '}
            antes de tomar una decisión
          </h2>

          <p className="max-w-md mb-8 text-[15px] leading-[26px] text-[#4A4360]">
            Te mostramos los avances de obra, las opciones disponibles y te
            acompañamos durante todo el proceso para que inviertas con mayor
            tranquilidad.
          </p>

          <div className="flex flex-col gap-4 mb-9">
            {checklist.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 bg-[#FFF3C7] text-[#3C3C48]"
                >
                  ✓
                </span>
                <p className="text-sm text-[#3C3C48]">{item}</p>
              </div>
            ))}
          </div>

          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-white font-semibold py-3 px-8 rounded-full text-sm bg-[#540ED5] hover:opacity-90 transition-opacity"
          >
            Agendar visita
          </a>

        </div>

        {/* Columna Derecha: Video de avance de obra */}
        <div className="lg:col-span-6 w-full">
          <div className="w-full rounded-3xl overflow-hidden shadow-md border border-slate-200/60">
            <video
              src="/avanceGemma.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full h-auto max-h-[460px] object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectAdvances;