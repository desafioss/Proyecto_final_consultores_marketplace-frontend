// src/constants.js

// Lista de packs (datos falsos para ejemplo)
export const PACKS = [
    {
      id: 1,
      titulo: 'Pack Contabilidad',
      descripcion: 'Servicio contable mensual',
      precio: 300,
      image: '/images/pack-contabilidad.jpg' // Asegúrate de tener la imagen en public/images/
    },
    {
      id: 2,
      titulo: 'Pack Control de Gestión',
      descripcion: 'Estrategias de marketing digital',
      precio: 200,
      image: '/images/pack-marketing.jpg'
    },
    {
      id: 3,
      titulo: 'Pack Modelo de Negocios',
      descripcion: 'Control de gestión y KPIs',
      precio: 250,
      image: '/images/pack-gestion.jpg'
    }
  ];
  
  // También puedes definir otras constantes, por ejemplo la URL base de la API:
  export const API_BASE_URL = 'http://localhost:3001/api';
  