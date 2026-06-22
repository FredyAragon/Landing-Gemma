import React, { useState } from 'react';
import TestimonialCard from './TestimonialCard';
import cliente1 from '../../../assets/cliente1.jpg';
import cliente2 from '../../../assets/cliente2.png';
import cliente3 from '../../../assets/cliente3.jpg';

const allTestimonials = [
  {
    image: cliente1,
    quote: "Ver los avances de obra me da mucha confianza. Es un proyecto serio y seguro",
    store: "Plaza Tec - Gemma",
  },
  {
    image: cliente2,
    quote: "Elegí invertir aquí pensando en el futuro de mi hijo. Es una ubicación estratégica",
    store: "Todo Bodega - Gemma",
  },
  {
    image: cliente3,
    quote: "Por la ubicación del proyecto sé que tendrá un buen retorno en poco tiempo.",
    store: "Ciudad Moda - Gemma",
  },
  {
    image: cliente2,
    quote: "Gemma me dio la seguridad que necesitaba para dar el paso. Muy buena atención.",
    store: "Plaza Tec - Gemma",
  },
  {
    image: cliente1,
    quote: "Invertir aquí fue la mejor decisión. El equipo es muy profesional y transparente.",
    store: "Ciudad Moda - Gemma",
  },
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(1);

  const prev = () => setCurrent((c) => (c - 1 + allTestimonials.length) % allTestimonials.length);
  const next = () => setCurrent((c) => (c + 1) % allTestimonials.length);

  const getIndex = (offset: number) =>
    (current + offset + allTestimonials.length) % allTestimonials.length;

  return (
    <section className="py-20 px-4 md:px-8 bg-[#F0EEF8]">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

        {/* Título */}
        <h2 className="text-[40px] md:text-[48px] font-bold leading-tight text-[#1A1430] mb-3">
          Clientes que ya{' '}
          <span className="text-[#6B21E8]">invirtieron en GEMMA</span>
        </h2>

        <p className="text-slate-500 text-base mb-14">
          Ellos ya tomaron la decisión
        </p>

        {/* Carrusel */}
        <div className="relative w-full flex items-center justify-center gap-6">

          {/* Botón Izquierda */}
          <button
            onClick={prev}
            className="flex-shrink-0 w-14 h-14 rounded-full bg-[#6B21E8] text-white flex items-center justify-center text-xl hover:opacity-90 transition-opacity shadow-md"
          >
            ←
          </button>

          {/* Cards: anterior, central, siguiente */}
          <div className="grid grid-cols-3 gap-4 w-full max-w-5xl">
            <TestimonialCard {...allTestimonials[getIndex(-1)]} isCenter={false} />
            <TestimonialCard {...allTestimonials[getIndex(0)]} isCenter={true} />
            <TestimonialCard {...allTestimonials[getIndex(1)]} isCenter={false} />
          </div>

          {/* Botón Derecha */}
          <button
            onClick={next}
            className="flex-shrink-0 w-14 h-14 rounded-full bg-[#6B21E8] text-white flex items-center justify-center text-xl hover:opacity-90 transition-opacity shadow-md"
          >
            →
          </button>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;