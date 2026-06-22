// src/components/sections/CommercialZones/CommercialZones.tsx
import React, { useRef } from 'react';
import ZoneCard from './ZoneCard';
import { zonesData } from '../../../data/zones';

const SCROLL_AMOUNT = 340;

const CommercialZones: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -SCROLL_AMOUNT : SCROLL_AMOUNT,
      behavior: 'smooth',
    });
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

        {/* Cabecera de la Sección */}
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center mb-12">

          <div className="flex justify-center mb-4">
            <span
              style={{
                fontSize: '11px',
                lineHeight: '18px',
                letterSpacing: '1.32px',
                color: '#5B16D9',
                backgroundColor: '#EDE8FB',
                fontFamily: "'DM Sans', sans-serif",
              }}
              className="inline-block font-semibold px-4 py-1.5 rounded-full uppercase select-none text-center"
            >
              Zonas especializadas
            </span>
          </div>

          <h2
            style={{
              fontSize: '42px',
              lineHeight: '50px',
              color: '#1A1430',
            }}
            className="font-bold tracking-tight mb-5 max-w-3xl"
          >
            No es un local aislado. <br />
            Es parte de una ciudad comercial.
          </h2>

          <p
            style={{
              fontSize: '16px',
              lineHeight: '27px',
              color: '#4A4360',
            }}
            className="font-normal max-w-3xl text-center leading-relaxed"
          >
            Más de 10 zonas especializadas que agrupan distintos rubros en un solo lugar,
            creando una experiencia más organizada para los negocios y una mayor variedad
            para los visitantes.
          </p>

        </div>

        {/* Carrusel */}
        <div className="relative w-full">

          {/* Flecha izquierda */}
          <button
            type="button"
            onClick={() => scroll('left')}
            aria-label="Anterior"
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full items-center justify-center text-white shadow-md transition-transform hover:scale-105"
            style={{ backgroundColor: '#65FFCC' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>

          {/* Flecha derecha */}
          <button
            type="button"
            onClick={() => scroll('right')}
            aria-label="Siguiente"
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full items-center justify-center text-white shadow-md transition-transform hover:scale-105"
            style={{ backgroundColor: '#65FFCC' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>

          <div
            ref={scrollRef}
            className="no-scrollbar flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-1 py-2"
          >
            {zonesData.map((zone, index) => (
              <ZoneCard key={index} zone={zone} />
            ))}
          </div>

        </div>

      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default CommercialZones;