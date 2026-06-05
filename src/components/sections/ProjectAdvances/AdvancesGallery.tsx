import React from 'react';

const AdvancesGallery: React.FC = () => {
  return (
    <div className="w-full h-[300px] md:h-[400px] bg-purple-950 rounded-3xl overflow-hidden shadow-xl border border-purple-800/40 relative group flex items-center justify-center">
      {/* Fondo con opacidad para simular una miniatura de video */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-900/40 to-transparent z-0"></div>
      
      {/* Contenido flotante central (Botón Play de video) */}
      <div className="relative z-10 flex flex-col items-center gap-4 cursor-pointer select-none">
        <div className="w-16 h-16 bg-amber-400 hover:bg-amber-500 text-slate-950 rounded-full flex items-center justify-center text-xl font-bold transition-transform group-hover:scale-110 shadow-lg pl-1">
          ▶
        </div>
        <div className="text-center">
          <span className="text-white font-sans font-bold text-xs md:text-sm block tracking-wide">
            Ver video del avance de obra
          </span>
          <span className="text-purple-300 text-[10px] md:text-xs">
            Actualizado recientemente (Dron HD)
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdvancesGallery;