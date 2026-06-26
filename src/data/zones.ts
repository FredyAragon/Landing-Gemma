// src/data/zones.ts

// 1. Importamos las imágenes desde assets de forma limpia
import imgFeria from '../assets/1.-La feria.png';
import imgBellaMora from '../assets/2.-Bella-Mora-A.png';
import imgCentroLogistico from '../assets/3.-Centro-Logístico.png';
import imgMiCasero from '../assets/4.-Mi-Casero.png';
import imgCasaMuebles from '../assets/5.-Casa-&-Muebles.png';
import imgBoulevard from '../assets/6.-Boulevard-Gastrononico.png'; 

export interface ZoneItem {
  title: string;
  description: string;
  image: string;
}

export const zonesData: ZoneItem[] = [
  {
    title: 'Zona de Feria',
    description: 'Productos variados a precios accesibles',
    image: imgFeria,
  },
  {
    title: 'Zona Bella Mora',
    description: 'Moda, belleza y cuidado personal',
    image: imgBellaMora,
  },
  {
    title: 'Zona Logística',
    description: 'Centro logístico y almacenamiento',
    image: imgCentroLogistico,
  },
  {
    title: 'Zona de Mercado',
    description: 'Abarrotes, frutas y productos frescos',
    image: imgMiCasero,
  },
  {
    title: 'Zona de Hogar',
    description: 'Muebles y artículos para el hogar',
    image: imgCasaMuebles,
  },
  {
    title: 'Zona de Restaurantes',
    description: 'Comida y experiencias gastronómicas',
    image: imgBoulevard,
  },
];