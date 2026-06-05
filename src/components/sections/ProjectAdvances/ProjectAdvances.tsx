import React from 'react';
import SectionLabel from '../../ui/SectionLabel';
import SectionHeading from '../../ui/SectionHeading';
import AdvancesGallery from './AdvancesGallery';

const ProjectAdvances: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Columna Izquierda: Información y Progreso (5 de 12 columnas) */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          <SectionLabel text="Transparencia y Seguridad" />
          <SectionHeading>
            Un proyecto que avanza a paso firme hacia la realidad
          </SectionHeading>
          
          <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-8">
            Creemos que la confianza se construye viendo los resultados. Gemma se encuentra actualmente en fase activa de construcción y desarrollo de infraestructura. Monitoreamos cada etapa para garantizar los más altos estándares de ingeniería comercial formal.
          </p>

          {/* Barra de Progreso Visual Estilizada */}
          <div className="w-full bg-slate-100 p-6 rounded-2xl border border-slate-100/80 flex flex-col gap-3">
            <div className="flex justify-between items-center text-xs font-bold text-slate-700 uppercase tracking-wider">
              <span>Progreso de Obra</span>
              <span className="text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-md border border-purple-100">Fase Inicial</span>
            </div>
            
            {/* Riel de la barra */}
            <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
              {/* Progreso real (simulado con Tailwind) */}
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 h-full w-[25%] rounded-full relative">
                <span className="absolute right-2 top-0 text-[8px] text-white font-bold h-full flex items-center"></span>
              </div>
            </div>
            
            <p className="text-[11px] text-slate-400 mt-1">
              * Movimiento de tierras y cimentación estructural en desarrollo continuo.
            </p>
          </div>
        </div>

        {/* Columna Derecha: Galería / Video (7 de 12 columnas) */}
        <div className="lg:col-span-7 w-full">
          <AdvancesGallery />
        </div>

      </div>
    </section>
  );
};

export default ProjectAdvances;