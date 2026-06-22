import React from 'react';
import LeadForm from './LeadForm';
import HeroMetrics from './HeroMetrics';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden text-white pt-28 pb-16 px-4 md:px-8">

      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/VideoHero.mp4" type="video/mp4" />
      </video>

      {/* Overlay gradiente morado según especificación */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(253.38deg, rgba(84, 14, 213, 0) 3.09%, rgba(84, 14, 213, 0.681564) 33.77%, #540ED5 82.69%)'
        }}
      />

      {/* Contenido */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full relative z-20">

        {/* Columna Izquierda */}
        <div className="lg:col-span-7 flex flex-col items-start gap-5 text-left">

          {/* Píldora ubicación */}
          <div className="inline-flex items-center gap-2 text-[11px] font-bold text-[#0E0E1A] px-4 py-1.5 rounded-full uppercase tracking-widest bg-[#4BDCAC]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0E0E1A]" />
              Zamácola · Arequipa Norte · Cerca al Aeropuerto
          </div>

          {/* Título principal */}
          <h1 className="text-[44px] md:text-[62px] font-bold leading-[1.05] tracking-tight max-w-2xl">
            ¿Buscas un<br />
            <span className="text-[#F5A623]">local para tu negocio</span><br />
            <span className="text-[#F5A623]">o una inversión</span><br />
            <span className="text-[#F5A623]">con potencial?</span>
          </h1>

          {/* Descripción */}
          <p className="text-white/80 text-[15px] leading-relaxed max-w-lg">
            Locales comerciales desde 12.5 m² en GEMMA Ciudad Comercial. Un proyecto pensado para crecer, emprender o construir patrimonio en una de las zonas con mayor proyección de Arequipa.
          </p>

          {/* Botón */}
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-[#F5A623] hover:bg-[#E09510] text-[#0E0E1A] font-bold text-[15px] px-7 py-3.5 rounded-xl transition-colors mt-2"
          >
            🏪 Quiero recibir asesoría
          </a>

          {/* Métricas */}
          <div className="w-full mt-4">
            <HeroMetrics />
          </div>

        </div>

        {/* Columna Derecha: Formulario */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
          <LeadForm />
        </div>

      </div>
    </section>
  );
};

export default Hero;