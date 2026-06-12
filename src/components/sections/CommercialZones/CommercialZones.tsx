// src/components/sections/CommercialZones/CommercialZones.tsx
import React from 'react';
import ZoneCard from './ZoneCard';
import { zonesData } from '../../../data/zones';

const CommercialZones: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Cabecera de la Sección de Zonas Especializadas */}
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center mb-12">
          
          {/* Píldora Superior: Fondo #EDE8FB y texto #5B16D9 con DM Sans */}
          <div className="flex justify-center mb-4">
            <span 
              style={{ 
                fontSize: '11px', 
                lineHeight: '18px', 
                letterSpacing: '1.32px',
                color: '#5B16D9',
                backgroundColor: '#EDE8FB',
                fontFamily: "'DM Sans', sans-serif"
              }}
              className="inline-block font-semibold px-4 py-1.5 rounded-full uppercase select-none text-center"
            >
              Zonas especializadas
            </span>
          </div>

          {/* Título Principal en dos renglones fluidos con 42px e interlineado de 50px */}
          <h2 
            style={{ 
              fontSize: '42px', 
              lineHeight: '50px',
              color: '#1A1430'
            }}
            className="font-bold tracking-tight mb-5 max-w-3xl"
          >
            No es un local aislado. <br />
            Es parte de una ciudad comercial.
          </h2>

          {/* Párrafo Descriptivo Centrado en color #4A4360 */}
          <p
            style={{
              fontSize: '16px',
              lineHeight: '27px',
              color: '#4A4360'
            }}
            className="font-normal max-w-3xl text-center leading-relaxed"
          >
            Gemma organiza el comercio por zonas especializadas para que los negocios puedan 
            ubicarse mejor y los visitantes encuentren variedad en un solo lugar.
          </p>

        </div>
        
        {/* Grilla fluida ajustada a las especificaciones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
          {zonesData.map((zone, index) => (
            <ZoneCard key={index} zone={zone} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default CommercialZones;