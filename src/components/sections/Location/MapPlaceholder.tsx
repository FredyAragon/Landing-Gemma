import React from 'react';

const MapPlaceholder: React.FC = () => {
  return (
    <div className="w-full h-[350px] md:h-[450px] bg-slate-100 rounded-3xl overflow-hidden shadow-sm border border-slate-200/60 relative group">
      {/* Simulación de Mapa con Tailwind */}
      <div className="absolute inset-0 bg-slate-200 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] flex flex-col items-center justify-center p-6 text-center">
        
        {/* Pin de ubicación decorativo */}
        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl animate-bounce shadow-md">
          📍
        </div>
        
        <h4 className="text-slate-900 font-sans font-bold mt-4 mb-1">
          Gemma Ciudad Comercial
        </h4>
        <p className="text-slate-500 text-xs max-w-xs leading-relaxed">
          Zamácola, Arequipa Norte. Entre la Av. Aviación y Vía de Evitamiento.
        </p>
        
        {/* Botón de acción sobre el mapa */}
        <a 
          href="https://maps.google.com" 
          target="_blank" 
          rel="noreferrer"
          className="mt-6 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-medium py-2 px-5 rounded-xl text-xs transition-colors shadow-sm"
        >
          🗺️ Abrir en Google Maps
        </a>
      </div>
    </div>
  );
};

export default MapPlaceholder;