import React from 'react';
import logoGemma from '../../assets/logotipogemma.png';

const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-[#5B16D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img src={logoGemma} alt="Gemma" className="h-8 w-auto object-contain" />
          <span className="font-sans font-semibold text-lg text-white tracking-wide">
            Gemma
          </span>
        </div>

        {/* Botón Cotizar */}
        <a
          href="#contacto"
          className="inline-flex items-center justify-center bg-[#65FFCC] hover:bg-[#4EEEBB] text-[#0E0E1A] font-semibold text-sm px-6 py-2.5 rounded-full transition-colors"
        >
          Cotizar Ahora
        </a>

      </div>
    </nav>
  );
};

export default Navbar;