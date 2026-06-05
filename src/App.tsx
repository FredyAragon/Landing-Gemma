import React from 'react';

import Navbar from './components/layout/Navbar';
import PreFooter from './components/layout/PreFooter';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';

import Hero from './components/sections/Hero/Hero';
import WhyChooseUs from './components/sections/WhyChooseUs/WhyChooseUs';
import Location from './components/sections/Location/Location';
import CommercialZones from './components/sections/CommercialZones/CommercialZones';
import ProjectAdvances from './components/sections/ProjectAdvances/ProjectAdvances';
import PurchaseOptions from './components/sections/PurchaseOptions/PurchaseOptions';
import Testimonials from './components/sections/Testimonials/Testimonials';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-purple-100 selection:text-purple-900">
      
      {/* 1. Barra de Navegación Fija */}
      <Navbar />
      {/* Contenedor Principal con Espaciado para no quedar oculto bajo el Navbar fijo */}
      <main className="w-full">
        {/* 2. Sección Principal / Captación */}
        <Hero />
        {/* 3. Beneficios de Inversión / Compra */}
        <WhyChooseUs />
        {/* 4. Ubicación y Conectividad */}
        <Location />
        {/* 5. Grilla de Sectores Especializados */}
        <CommercialZones />
        {/* 6. Avances de Infraestructura / Obra */}
        <ProjectAdvances />
        {/* 7. Procesos de Financiamiento / Adquisición */}
        <PurchaseOptions />
        {/* 8. Reseñas y Validaciones de Clientes */}
        <Testimonials />
      </main>
      {/* 9. Cierre con Llamado a la Acción Institucional */}
      <PreFooter />
      {/* 10. Pie de Página */}
      <Footer />
      {/* 11. Componente Flotante de Retorno Superior */}
      <ScrollToTop />
    </div>
  );
};

export default App;