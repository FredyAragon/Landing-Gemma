import React, { useState } from 'react';
import Button from '../../ui/Button';
import type { LeadFormData } from '../../../types';

const LeadForm: React.FC = () => {
  // Estado inicial del formulario usando nuestra interfaz de TypeScript
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    phone: '',
    intent: '',
    paymentMethod: '',
    visitSchedule: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos del lead capturados:", formData);
    // Aquí conectarás tu servicio lead.service.ts más adelante
  };

  return (
    <div className="bg-white text-slate-900 p-6 md:p-8 rounded-3xl shadow-2xl w-full max-w-lg border border-slate-100">
      <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-950 mb-2">
        Recibe una asesoría personalizada
      </h3>
      <p className="text-slate-500 text-xs md:text-sm mb-6 leading-relaxed">
        Cuéntanos qué estás buscando y un asesor de Gemma te ayudará a encontrar la mejor opción.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Input: Nombre */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-slate-700">Nombre completo</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Tu nombre y apellido"
            className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-purple-600 focus:bg-white transition-colors"
            required
          />
        </div>

        {/* Input: Celular */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-slate-700">Celular / WhatsApp</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="9XX XXX XXX"
            className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-purple-600 focus:bg-white transition-colors"
            required
          />
        </div>

        {/* Select: Interés */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-slate-700">¿Qué te interesa hacer con tu local?</label>
          <select
            name="intent"
            value={formData.intent}
            onChange={handleChange}
            className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-purple-600 focus:bg-white transition-colors text-slate-700"
            required
          >
            <option value="">Elige una opción</option>
            <option value="emprender">Para emprender un negocio propio</option>
            <option value="alquilar">Para alquilar más adelante (Inversión)</option>
            <option value="futuro">Comprar pensando en el futuro de mi familia</option>
          </select>
        </div>

        {/* Select: Método de pago */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-slate-700">¿Cómo te gustaría comprar?</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-purple-600 focus:bg-white transition-colors text-slate-700"
            required
          >
            <option value="">Elige una opción</option>
            <option value="contado">Pago al contado / Fondos propios</option>
            <option value="financiamiento">Financiamiento bancario / Crédito</option>
            <option value="cuotas">Planes de cuotas directas</option>
          </select>
        </div>

        {/* Select: Cuándo visitar */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-slate-700">¿Cuándo te gustaría visitar Gemma?</label>
          <select
            name="visitSchedule"
            value={formData.visitSchedule}
            onChange={handleChange}
            className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-purple-600 focus:bg-white transition-colors text-slate-700"
            required
          >
            <option value="">Elige una opción</option>
            <option value="esta_semana">Esta misma semana</option>
            <option value="proxima_semana">La próxima semana</option>
            <option value="solo_info">Por ahora solo deseo información virtual</option>
          </select>
        </div>

        {/* Botón de Envío */}
        <Button variant="primary" type="submit" fullWidth className="mt-2 py-3.5 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-xl">
          Quiero que me asesoren →
        </Button>

        <p className="text-[10px] text-slate-400 text-center mt-2 flex items-center justify-center gap-1">
          🔒 Tus datos serán atendidos por un asesor oficial de Gemma.
        </p>
      </form>
    </div>
  );
};

export default LeadForm;