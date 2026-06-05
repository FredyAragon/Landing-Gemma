import React from 'react';

const ScrollToTop: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 bg-purple-700 hover:bg-purple-800 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
      aria-label="Volver arriba"
    >
      <span className="text-xl font-bold font-sans">↑</span>
    </button>
  );
};

export default ScrollToTop;