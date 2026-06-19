import React from 'react';
import Button from '../../ui/Button';
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

      {/* Overlay con gradiente morado (según especificación de Figma: #540ED5 en 0%, 68.16%, 100%) */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(135deg, #540ED5 0%, rgba(84,14,213,0.75) 68.16%, #540ED5 100%)'
        }}
      ></div>

      {/* Efecto de cuadrícula/puntos sutil sobre el overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] z-10"></div>
      
      {/* Contenido — por encima del video y los overlays */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full relative z-20">
        
        {/* Columna Izquierda: Mensaje de Marca (7 de 12 columnas en Desktop) */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold bg-white/10 text-purple-200 px-3 py-1 rounded-full border border-white/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#65FFCC]"></span>
            Zamácola - Arequipa Norte • Cerca al Aeropuerto
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight leading-[1.1] max-w-2xl">
            Un local para hoy. <br />
            Una <span className="text-amber-300 italic font-normal">oportunidad</span> para mañana.
          </h1>
          
          <p className="text-purple-100/90 text-sm md:text-base max-w-xl leading-relaxed">
            Adquiere un local comercial en Gemma Ciudad Comercial, un proyecto moderno y organizado ubicado en Zamácola, cerca al aeropuerto, entre Av. Aviación y Vía de Evitamiento. Una oportunidad para emprender, alquilar o proyectar el futuro de tu familia.
          </p>

          {/* Botones de acción rápida */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
            <Button variant="accent" className="w-full sm:w-auto px-8 py-3.5">
              🏪 Quiero recibir asesoría
            </Button>
          </div>

          {/* Subcomponente de Métricas */}
          <div className="w-full mt-6">
            <HeroMetrics />
          </div>
        </div>

        {/* Columna Derecha: Formulario de Leads (5 de 12 columnas en Desktop) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
          <LeadForm />
        </div>

      </div>
    </section>
  );
};

export default Hero;