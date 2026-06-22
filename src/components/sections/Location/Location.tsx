import React from 'react';
import mapImage from '../../../assets/UbicacionGemma.jpeg';

const Location: React.FC = () => {
  const points = [
    { icon: "🛣️", text: "Conexión con Av. Aviación y Vía de Evitamiento" },
    { icon: "📈", text: "Zona comercial en crecimiento" },
    { icon: "🚗", text: "Fácil acceso para clientes y proveedores" }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-[#F0EEF8]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

        {/* Columna Izquierda: Textos y Puntos */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">

          <div className="mb-5">
            <span className="inline-block font-bold px-4 py-2 rounded-full uppercase text-[11px] tracking-widest text-[#3C3C48] bg-[#FFF3C7]">
              Ubicación Estratégica
            </span>
          </div>

          <h2 className="font-bold max-w-xl mb-5 tracking-tight text-[48px] leading-[56px] text-[#1A1430]">
            En una de las zonas{' '}
            <span className="text-[#6B21E8]">
              con mayor crecimiento comercial de Arequipa
            </span>
          </h2>

          <p className="max-w-md mb-8 text-[15px] leading-[26px] text-[#4A4360]">
            Ubicado en Zamácola, cerca del aeropuerto y con acceso a importantes vías de la ciudad.
          </p>

          <div className="flex flex-col w-full max-w-md">
            {points.map((point, index) => (
              <div key={index} className="flex items-center gap-4 py-4 border-b border-[#E0DCF0] last:border-b-0">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-base flex-shrink-0 bg-[#FFF3C7]">
                  {point.icon}
                </div>
                <p className="text-sm font-medium text-[#3C3C48]">
                  {point.text}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Columna Derecha: Mapa y Botón Corregido */}
        <div className="lg:col-span-6 flex flex-col items-center gap-8">

          <div className="w-full rounded-3xl overflow-hidden shadow-md border border-slate-200/60">
            <img
              src={mapImage}
              alt="Mapa ubicación Gemma - Zamácola, Arequipa"
              className="w-full h-auto object-cover max-h-[420px] object-center"
            />
          </div>

          <a
            href="https://maps.app.goo.gl/wShq9GszGgqf4SAn9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-semibold py-4 px-10 rounded-full text-sm bg-[#540ED5] hover:opacity-90 transition-all shadow-[0_10px_25px_-5px_rgba(84,13,213,0.4)] hover:shadow-[0_12px_30px_-5px_rgba(84,13,213,0.5)]"
          >
            Ver ubicación en Google Maps
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2.5} 
              stroke="currentColor" 
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>

        </div>

      </div>
    </section>
  );
};

export default Location;