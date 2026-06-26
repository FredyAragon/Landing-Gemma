// src/components/sections/CommercialZones/CommercialZones.tsx
import React, { useEffect, useRef, useState } from 'react';
import ZoneCard from './ZoneCard';
import { zonesData } from '../../../data/zones';

const AUTOPLAY_INTERVAL = 4000; // ms entre cada desplazamiento automático
const CARD_WIDTH = 373.33;      // px, según especificación
const GAP = 24;                 // px de separación entre tarjetas
const STEP = CARD_WIDTH + GAP;

const len = zonesData.length;

// Triplicamos la data para tener "buffer" antes y después,
// y poder resetear el índice sin que se note el salto visual.
const extendedZones = [...zonesData, ...zonesData, ...zonesData];

const CommercialZones: React.FC = () => {
  const [index, setIndex] = useState(len); // arrancamos en la copia del medio
  const [withTransition, setWithTransition] = useState(true);

  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goNext = () => setIndex((i) => i + 1);
  const goPrev = () => setIndex((i) => i - 1);

  const restartAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(goNext, AUTOPLAY_INTERVAL);
  };

  useEffect(() => {
    restartAutoplay();
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, []);

  const handleManualNav = (direction: 'left' | 'right') => {
    if (direction === 'left') goPrev();
    else goNext();
    restartAutoplay();
  };

  // Cuando el índice se sale del rango "seguro" del buffer central,
  // lo reubicamos sin transición (el contenido es idéntico, así no se nota).
  const handleTransitionEnd = () => {
    if (index >= len * 2) {
      setWithTransition(false);
      setIndex(index - len);
    } else if (index < len) {
      setWithTransition(false);
      setIndex(index + len);
    }
  };

  useEffect(() => {
    if (!withTransition) {
      const id = requestAnimationFrame(() => setWithTransition(true));
      return () => cancelAnimationFrame(id);
    }
  }, [withTransition]);

  return (
    <section className="py-20 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

        {/* Cabecera de la Sección */}
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center mb-12">

          {/* Badge: 341x35, radius full, texto 24px SemiBold uppercase */}
          <div className="flex justify-center mb-6">
            <span
              style={{
                width: '341px',
                height: '35px',
                fontFamily: "'Gellix', sans-serif",
                fontWeight: 600,
                fontStyle: 'normal',
                fontSize: '24px',
                lineHeight: '28px',
                letterSpacing: '1.32px',
                textTransform: 'uppercase',
                color: '#5B16D9',
                backgroundColor: '#C1FFEA',
              }}
              className="inline-flex items-center justify-center rounded-full select-none"
            >
              Zonas especializadas
            </span>
          </div>

          {/* Título: 54px Bold, line-height 50.4px, dos líneas con colores distintos */}
          <h2
            style={{
              fontFamily: "'Gellix', sans-serif",
              fontWeight: 700,
              fontStyle: 'normal',
              fontSize: '54px',
              lineHeight: '50.4px',
              letterSpacing: '0px',
            }}
            className="tracking-tight mb-5 max-w-4xl"
          >
            <span style={{ color: '#1A1430' }}>No es un local aislado.</span>
            <br />
            <span style={{ color: '#540ED5' }}>
              Es parte de una ciudad comercial.
            </span>
          </h2>

          {/* Párrafo: 18px Regular, line-height 27.2px, ancho ~815px */}
          <p
            style={{
              fontFamily: "'Gellix', sans-serif",
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '18px',
              lineHeight: '27.2px',
              letterSpacing: '0px',
              textAlign: 'center',
              color: '#4A4360',
            }}
            className="max-w-[815px]"
          >
            Más de 10 zonas especializadas que agrupan distintos rubros en un solo lugar,
            creando una experiencia más organizada para los negocios y una mayor variedad
            para los visitantes.
          </p>

        </div>

        {/* Carrusel controlado: 3 visibles, flechas + autoplay, paso exacto por tarjeta */}
        <div className="relative w-full" style={{ maxWidth: `${STEP * 3 - GAP}px` }}>

          {/* Flecha izquierda */}
          <button
            type="button"
            onClick={() => handleManualNav('left')}
            aria-label="Anterior"
            className="flex absolute -left-2 md:-left-14 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full items-center justify-center text-white shadow-md transition-transform hover:scale-105"
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
            onClick={() => handleManualNav('right')}
            aria-label="Siguiente"
            className="flex absolute -right-2 md:-right-14 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full items-center justify-center text-white shadow-md transition-transform hover:scale-105"
            style={{ backgroundColor: '#65FFCC' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>

          <div className="overflow-hidden mx-auto">
            <div
              onTransitionEnd={handleTransitionEnd}
              className="flex"
              style={{
                gap: `${GAP}px`,
                transform: `translateX(-${index * STEP}px)`,
                transition: withTransition ? 'transform 0.6s ease' : 'none',
              }}
            >
              {extendedZones.map((zone, i) => (
                <div key={i} className="shrink-0">
                  <ZoneCard zone={zone} />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CommercialZones;