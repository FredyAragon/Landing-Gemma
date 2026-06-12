// src/components/sections/Location/Location.tsx
import React from 'react';
import MapPlaceholder from './MapPlaceholder';

const Location: React.FC = () => {
  // Ajustamos los puntos a los 3 reales de la maqueta de Figma
  const points = [
    { icon: "🛣️", text: "Conexión con Av. Aviación y Vía de Evitamiento" },
    { icon: "📈", text: "Zona comercial en crecimiento" },
    { icon: "🚗", text: "Fácil acceso para clientes y proveedores" }
  ];

  return (
    // Color de fondo exacto del contenedor general según Figma: #F8F7FC
    <section className="py-20 px-4 md:px-8 bg-[#F8F7FC]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Columna Izquierda: Datos Estratégicos (6 de 12 columnas) */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          
          {/* Píldora de Ubicación Estratégica */}
          <div className="flex justify-start mb-6">
            <span 
              style={{ 
                fontSize: '24px', 
                lineHeight: '18px', 
                letterSpacing: '1.32px',
                color: '#3C3C48',
                backgroundColor: '#C1FFEA'
              }}
              className="inline-block font-semibold px-6 py-3 rounded-full uppercase text-center select-none"
            >
              Ubicación estratégica
            </span>
          </div>

          {/* Título Principal */}
          <h2 
            style={{ 
              fontSize: '54px', 
              lineHeight: '59px',
              color: '#1A1430'
            }}
            className="font-bold w-full max-w-2xl mb-4 tracking-tight"
          >
            En una de las zonas <span className="text-[#540ED5]">con mayor crecimiento comercial de Arequipa</span>
          </h2>

          {/* Subtítulo / Párrafo Descriptivo con especificaciones exactas */}
          <p
            style={{
              fontSize: '16px',
              lineHeight: '27px',
              color: '#4A4360'
            }}
            className="font-normal max-w-xl mb-8"
          >
            Ubicado en Zamácola, cerca del aeropuerto y con acceso a importantes vías de la ciudad.
          </p>
          
          {/* Contenedor de filas (Cada una representará los Frames de 63px) */}
          <div className="flex flex-col w-full max-w-md mt-2">
            {points.map((point, index) => (
              <div 
                key={index} 
                className="h-[63px] flex items-center gap-4 border-b border-[#E8E6F0] last:border-b-0"
              >
                <span className="text-xl">{point.icon}</span>
                <p className="text-slate-700 text-sm md:text-base font-medium">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Columna Derecha: Mapa */}
        <div className="lg:col-span-6 w-full">
          <MapPlaceholder />
        </div>

      </div>
    </section>
  );
};

export default Location;