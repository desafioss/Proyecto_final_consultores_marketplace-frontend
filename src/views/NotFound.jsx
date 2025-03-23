// src/views/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container py-5 text-center">
      <h2 className="mb-4">404 - Página no encontrada</h2>
      <p>La página que buscas no existe o ha sido movida.</p>
      <Link to="/" className="btn btn-primary mt-3">
        Volver al Inicio
      </Link>
    </div>
  );
}

export default NotFound;
