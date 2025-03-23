// src/views/PackDetail.jsx
import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const packDetailsData = {
  1: {
    title: "Pack Contabilidad",
    image: "/contabilidad.jpg",
    description: "IVA mensual, Tributario, Operación renta, Balance de estado de resultados",
    features: [
      "IVA mensual",
      "Tributario",
      "Operación renta",
      "Balance de estado de resultados"
    ],
    price: 500000
  },
  2: {
    title: "Pack Control de Gestión",
    image: "/construccion2.jpg",
    description: "Procesos, KPIs, Reportes, Gestión integral x 3 meses",
    features: [
      "Procesos",
      "KPIs",
      "Reportes",
      "Gestión integral"
    ],
    price: 500000
  },
  3: {
    title: "Pack Modelo de Negocios",
    image: "/modelo.jpg",
    description: "Propuesta de valor, segmentación de negocios, plan de negocio",
    features: [
      "Propuesta de valor",
      "Segmentación de negocios",
      "Plan de negocio"
    ],
    price: 500000
  },
  4: {
    title: "Pack Marketing Digital",
    image: "/marketing.jpg",
    description: "Marketing digital x 3 meses, redes sociales, SEO/SEM",
    features: [
      "Marketing digital",
      "Redes sociales",
      "SEO/SEM"
    ],
    price: 500000
  }
};

function PackDetail() {
  const { id } = useParams();
  const { addItem, cartItems } = useContext(CartContext);
  const pack = packDetailsData[id];

  if (!pack) {
    return (
      <div className="container py-5 text-center">
        <h2>Pack no encontrado</h2>
        <Link to="/" className="btn btn-secondary">Volver al inicio</Link>
      </div>
    );
  }

  // Comprueba si ya existe este pack en el carrito
  const cartItem = cartItems.find(item => String(item.id) === id);

  const handleAddToCart = () => {
    // Agrega el pack con cantidad 1
    addItem({ id, title: pack.title, price: pack.price, cantidad: 1, image: pack.image });
  };

  return (
    <div className="container py-5 text-center">
      <div style={{ maxWidth: '700px', margin: 'auto' }}>
        <h2 className="mb-4">{pack.title}</h2>
        <div className="card mb-4">
          <img
            src={pack.image}
            alt={pack.title}
            className="card-img-top"
            style={{ objectFit: 'contain', height: '250px', width: '100%' }}
          />
          <div className="card-body">
            <p>{pack.description}</p>
            <ul className="list-unstyled text-start">
              {pack.features.map((feature, index) => (
                <li key={index}>• {feature}</li>
              ))}
            </ul>
            <p className="mt-3"><strong>Precio: </strong>${pack.price}</p>
            <button className="btn btn-success me-2" onClick={handleAddToCart}>
              Agregar al Carro
            </button>
            {cartItem && (
              <span className="btn btn-info mt-2">
                {cartItem.cantidad} item(s) agregados
              </span>
            )}
            <Link to="/" className="btn btn-secondary ms-2">Volver</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackDetail;
