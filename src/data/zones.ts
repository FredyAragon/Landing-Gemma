// src/data/zones.ts

export interface ZoneItem {
  title: string;
  description: string;
  image: string;
}

export const zonesData: ZoneItem[] = [
  {
    title: 'Ciudad Moda',
    description: 'Ropa, calzado y accesorios de moda',
    image: 'https://picsum.photos/seed/ciudad-moda/600/450',
  },
  {
    title: 'Plaza Tec',
    description: 'Tecnología y servicios digitales',
    image: 'https://picsum.photos/seed/plaza-tec/600/450',
  },
  {
    title: 'Ferreplaza',
    description: 'Ferretería, construcción y materiales',
    image: 'https://picsum.photos/seed/ferreplaza/600/450',
  },
  {
    title: 'Sabores Gemma',
    description: 'Restaurantes, cafés y comida rápida',
    image: 'https://picsum.photos/seed/sabores-gemma/600/450',
  },
  {
    title: 'Bienestar',
    description: 'Salud, farmacias y centros médicos',
    image: 'https://picsum.photos/seed/bienestar/600/450',
  },
  {
    title: 'Hogar & Deco',
    description: 'Muebles, decoración y artículos para el hogar',
    image: 'https://picsum.photos/seed/hogar-deco/600/450',
  },
  {
    title: 'Mundo Mascotas',
    description: 'Veterinarias, alimentos y accesorios',
    image: 'https://picsum.photos/seed/mundo-mascotas/600/450',
  },
  {
    title: 'Zona Educativa',
    description: 'Institutos, academias y librerías',
    image: 'https://picsum.photos/seed/zona-educativa/600/450',
  },
  {
    title: 'Auto Plaza',
    description: 'Repuestos, talleres y servicios automotrices',
    image: 'https://picsum.photos/seed/auto-plaza/600/450',
  },
  {
    title: 'Belleza Total',
    description: 'Salones, spas y cuidado personal',
    image: 'https://picsum.photos/seed/belleza-total/600/450',
  },
];