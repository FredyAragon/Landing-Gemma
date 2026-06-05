import React from 'react';
import Button from '../ui/Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111625] text-slate-400 text-xs md:text-sm pt-16 pb-8 px-4 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
        
        {/* Columna 1: Info Marca */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-white">
            <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center font-serif font-bold text-sm">G</div>
            <span className="font-serif font-bold text-lg tracking-wide">Gemma</span>
          </div>
          <p className="text-slate-400 leading-relaxed text-xs">
            Una ciudad comercial moderna, organizada e inteligente en Zamácola, Arequipa Norte. Once zonas especializadas para emprender, alquilar o proyectar el futuro de tu familia.
          </p>
          
          {/* Botón WhatsApp */}
          <button className="bg-[#10B981] hover:bg-[#059669] text-white font-medium py-2.5 px-5 rounded-full flex items-center justify-center gap-2 transition-colors w-max mt-2 text-xs shadow-sm">
            💬 Escríbenos por WhatsApp
          </button>
        </div>

        {/* Columna 2: Redes Sociales (Relleno para mantener el espacio visual) */}
        <div className="flex flex-col gap-3">
          <span className="text-white font-bold tracking-wide uppercase text-xs mb-1">Síguenos</span>
          <div className="flex gap-2">
            {['f', 'ig', 'tk', 'yt'].map((red) => (
              <span key={red} className="w-8 h-8 rounded-md bg-slate-800 flex items-center justify-center text-white font-semibold cursor-pointer hover:bg-purple-600 transition-colors uppercase text-[10px]">
                {red}
              </span>
            ))}
          </div>
        </div>

        {/* Columna 3: Datos de Proyecto */}
        <div className="flex flex-col gap-3">
          <span className="text-white font-bold tracking-wide uppercase text-xs mb-1">Proyecto</span>
          <ul className="flex flex-col gap-2.5 text-xs text-slate-400">
            <li>📍 Zamácola, Arequipa Norte</li>
            <li>✈️ Cerca al aeropuerto</li>
            <li>🛣️ Av. Aviación y Vía de Evitamiento</li>
            <li>🏗️ En construcción</li>
            <li>🏬 11+ zonas comerciales</li>
          </ul>
        </div>

        {/* Columna 4: Contacto */}
        <div className="flex flex-col gap-3">
          <span className="text-white font-bold tracking-wide uppercase text-xs mb-1">Contáctanos</span>
          <ul className="flex flex-col gap-2.5 text-xs text-slate-400 mb-2">
            <li>📱 WhatsApp asesoría</li>
            <li>✉️ ventas@gemmacc.pe</li>
            <li>🕒 Lun – Sáb: 9am – 6pm</li>
          </ul>
          <Button variant="primary" className="py-2 px-4 text-xs bg-purple-700 hover:bg-purple-800 !w-full sm:!w-max">
            Recibir asesoría
          </Button>
        </div>
      </div>

      {/* Línea final y Copyright */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800/60 text-[10px] text-slate-500 flex flex-col md:flex-row justify-between gap-4">
        <p className="leading-relaxed max-w-2xl">
          © {new Date().getFullYear()} Gemma Ciudad Comercial. La información comercial está sujeta a disponibilidad, evaluación y condiciones vigentes del proyecto. Las imágenes, renders y descripciones son de carácter referencial.
        </p>
        <p className="shrink-0">Arequipa, Perú</p>
      </div>
    </footer>
  );
};

export default Footer;