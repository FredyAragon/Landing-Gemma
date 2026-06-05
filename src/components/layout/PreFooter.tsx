import React from 'react';
import Button from '../ui/Button';

const PreFooter: React.FC = () => {
  return (
    <section className="bg-purple-700 text-white py-16 px-4 relative overflow-hidden">
      {/* Patrón sutil de fondo */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        <span className="text-xs font-bold bg-white/10 px-4 py-1.5 rounded-full uppercase tracking-wider text-purple-200">
          ¿Listo para dar el siguiente paso?
        </span>
        
        <h2 className="text-3xl md:text-5xl font-serif font-bold mt-6 mb-4 max-w-2xl leading-tight">
          Encuentra el local que mejor se adapta a tu <span className="italic text-amber-300 font-normal">objetivo</span>
        </h2>
        
        <p className="text-purple-100 text-sm md:text-base max-w-xl mb-10 leading-relaxed">
          Cuéntanos qué estás buscando, alquilar o comprar para futuro. Un asesor de Gemma te orientará con opciones de ubicación, precio, forma de pago y visita al proyecto.
        </p>

        {/* Botones duplicados del Hero */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
          <Button variant="accent" className="w-full sm:w-auto px-8 py-3.5 text-base">
            🏪 Quiero recibir asesoría
          </Button>
          <Button variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 px-8 py-3.5 text-base">
            🗓️ Agendar visita a Gemma
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PreFooter;