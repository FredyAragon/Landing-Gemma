// src/data/purchaseOptions.ts

export interface PurchaseOption {
  icon: string;
  title: string;
  description: string;
}

export const purchaseOptionsData: PurchaseOption[] = [
  {
    icon: '📌',
    title: 'Separa tu local',
    description: 'Reserva tu local mientras evalúas tus opciones.',
  },
  {
    icon: '💰',
    title: 'Opciones de pago',
    description: 'Alternativas adaptadas según tu evaluación y disponibilidad.',
  },
  {
    icon: '💬',
    title: 'Asesoría personalizada',
    description: 'Acompañamiento durante todo el proceso.',
  },
];