import React from 'react';
import SectionLabel from '../../ui/SectionLabel';
import SectionHeading from '../../ui/SectionHeading';
import MapPlaceholder from './MapPlaceholder';

const Location: React.FC = () => {
  const points = [
    "📍 Ubicación estratégica en Zamácola, la zona con mayor crecimiento comercial de Arequipa Norte.",
    "✈️ Conectividad inmediata: Situado a pocos minutos del Aeropuerto Internacional Alfredo Rodríguez Ballón.",
    "🛣️ Accesibilidad total: Posicionamiento clave entre dos de las arterias más importantes de la ciudad: Av. Aviación y Vía de Evitamiento.",
    "🚗 Flujo constante asegurado para el transporte de mercadería, clientes y proveedores directos."
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-slate-50/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Columna Izquierda: Datos Estratégicos (5 de 12 columnas) */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          <SectionLabel text="Ubicación Estratégica" />
          <SectionHeading>
            Donde el comercio se mueve, nacen las mejores oportunidades
          </SectionHeading>
          
          <div className="flex flex-col gap-4 mt-2">
            {points.map((point, index) => (
              <p key={index} className="text-slate-600 text-xs md:text-sm leading-relaxed border-l-2 border-purple-200 pl-4 py-0.5">
                {point}
              </p>
            ))}
          </div>
        </div>

        {/* Columna Derecha: Mapa (7 de 12 columnas) */}
        <div className="lg:col-span-7 w-full">
          <MapPlaceholder />
        </div>

      </div>
    </section>
  );
};

export default Location;