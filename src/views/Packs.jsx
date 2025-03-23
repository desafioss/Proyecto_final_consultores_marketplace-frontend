// src/views/Packs.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Packs() {
  const packsFake = [
    {
      id: 1,
      titulo: 'Pack Contabilidad',
      descripcion: 'Servicio contable x 3 meses',
      precio: 500000,
      image: '/contabilidad.jpg'
    },
    {
      id: 2,
      titulo: 'Pack Control de Gestión',
      descripcion: 'Procesos y KPIs x 3 meses',
      precio: 500000,
      image: '/construccion2.jpg'
    },
    {
      id: 3,
      titulo: 'Pack Modelo de Negocios',
      descripcion: 'Propuesta de valor y segmento de negocios',
      precio: 500000,
      image: '/modelo.jpg'
    },
    {
      id: 4,
      titulo: 'Pack Marketing',
      descripcion: 'Marketing digital x 3 meses',
      precio: 500000,
      image: '/marketing.jpg'
    }
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Nuestros Paquetes</h2>
      <div className="row">
        {packsFake.map((pack) => (
          <div key={pack.id} className="col-md-3 mb-4">
            <div className="card h-100">
              <img
                src={pack.image}
                alt={pack.titulo}
                className="card-img-top"
                style={{ objectFit: 'cover', height: '180px' }}
              />
              <div className="card-body">
                <h5 className="card-title">{pack.titulo}</h5>
                <p className="card-text">{pack.descripcion}</p>
                <p><strong>${pack.precio}</strong></p>
                <Link to={`/packs/${pack.id}`} className="btn btn-primary">
                  Ver detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Packs;
