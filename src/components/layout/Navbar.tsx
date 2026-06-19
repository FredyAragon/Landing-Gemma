import React from 'react';
import Button from '../ui/Button';
import logoGemma from '../../assets/logotipogemma.png';

const Navbar: React.FC = () => {
  return (
    // Fondo transparente para que se fusione con el hero section, posición absoluta o fija según prefieras
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
        
        {/* Logo de Gemma */}
        <div className="flex items-center gap-2 cursor-pointer">
          {/* El logo en la imagen es blanco/plateado con un isotipo estrellado */}
          <div className="w-8 h-8 flex items-center justify-center text-white">
              <img src={logoGemma} alt="Gemma" className="w-8 h-8 object-contain" />
          </div>
          <span className="font-sans font-semibold text-xl text-white tracking-wide">
            Gemma
          </span>
        </div>

        {/* Botón de Acción Único */}
        <div className="flex items-center">
          {/* Variante "mint" dedicada — sin clases bg-* externas que compitan */}
          <Button 
            variant="mint" 
            className="rounded-full px-6 py-2.5 text-sm shadow-none border-none transition-colors duration-200"
          >
            Cotizar Ahora
          </Button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;