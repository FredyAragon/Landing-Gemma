// src/types/index.ts

export interface CardItem {
  icon: string;
  title: string;
  description: string;
}

export interface MetricItem {
  value: string;
  label: string;
  subLabel?: string;
}

export interface LeadFormData {
  fullName: string;
  phone: string;
  intent: string;
  paymentMethod: string;
  visitSchedule: string;
}

export interface LocationFeature {
  icon: string;
  text: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  stars: number;
  avatarInitials: string;
  avatarBg: string;
}