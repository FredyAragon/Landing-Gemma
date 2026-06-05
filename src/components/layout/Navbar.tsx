import React from 'react';
import Button from '../ui/Button';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-slate-100 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo de Gemma */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-serif font-bold text-xl shadow-sm">
            G
          </div>
          <span className="font-serif font-bold text-xl text-slate-950 tracking-wide">Gemma</span>
        </div>

        {/* Botones de Acción */}
        <div className="flex items-center gap-3">
          <Button variant="outline" className="text-slate-700 border-slate-200 hover:border-slate-400 hover:bg-slate-50 !shadow-none py-2 px-4 text-xs md:text-sm">
            Ver avances
          </Button>
          <Button variant="outline" className="text-slate-700 border-slate-200 hover:border-slate-400 hover:bg-slate-50 !shadow-none py-2 px-4 text-xs md:text-sm hidden sm:flex">
            Agendar visita
          </Button>
          <Button variant="primary" className="py-2 px-4 text-xs md:text-sm bg-purple-700 hover:bg-purple-800">
            Recibir asesoría
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;