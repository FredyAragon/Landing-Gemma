import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0E0E1A] text-slate-400 pt-14 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">

        {/* Columna Izquierda */}
        <div className="flex flex-col gap-5 max-w-sm">
          <p className="text-slate-400 text-[13px] leading-relaxed">
            Una ciudad comercial moderna, organizada e inteligente en Zamácola, Arequipa Norte.
            Diez zonas especializadas para emprender, alquilar o proyectar el futuro de tu familia.
          </p>

          {/* Botón WhatsApp */}
          <a
            href="https://wa.me/51954184431"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] text-white text-[13px] font-semibold py-2.5 px-5 rounded-full w-max transition-colors"
          >
            <span className="text-base">💬</span>
            Escríbenos por WhatsApp
          </a>

          {/* Redes Sociales */}
          <div className="flex gap-3 mt-1">
            {[
              { label: 'f', href: '#' },
              { label: '📷', href: '#' },
              { label: '♪', href: '#' },
            ].map((red, i) => (
              <a
                key={i}
                href={red.href}
                className="w-9 h-9 rounded-full bg-slate-700/60 flex items-center justify-center text-white text-sm hover:bg-[#540ED5] transition-colors"
              >
                {red.label}
              </a>
            ))}
          </div>
        </div>

        {/* Columna Derecha: Contacto */}
        <div className="flex flex-col gap-4 md:items-end">
          <span className="text-white text-[11px] font-bold tracking-widest uppercase mb-1">
            Contáctanos
          </span>
          <ul className="flex flex-col gap-3 text-[13px] text-slate-300 md:items-end">
            <li className="flex items-center gap-2">
              <span>📱</span> 954 184 431
            </li>
            <li className="flex items-center gap-2">
              <span>✉️</span> info@gemmaperu.com
            </li>
            <li className="flex items-center gap-2">
              <span>🕒</span> Lun – Sáb: 9am – 6pm
            </li>
          </ul>

          {/* Botón Recibir asesoría */}
          <a
            href="#contacto"
            className="mt-2 inline-flex items-center justify-center bg-[#540ED5] hover:opacity-90 text-white text-[13px] font-semibold py-2.5 px-6 rounded-full transition-opacity"
          >
            Recibir asesoría
          </a>
        </div>

      </div>

      {/* Línea divisora */}
      <div className="max-w-7xl mx-auto border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between gap-3 text-[11px] text-slate-600">
        <p className="max-w-2xl leading-relaxed">
          © {new Date().getFullYear()} Gemma Ciudad Comercial. La información comercial está sujeta a disponibilidad, evaluación y condiciones vigentes del proyecto. Las imágenes, renders y descripciones son de carácter referencial.
        </p>
        <p className="shrink-0">Arequipa, Perú</p>
      </div>
    </footer>
  );
};

export default Footer;