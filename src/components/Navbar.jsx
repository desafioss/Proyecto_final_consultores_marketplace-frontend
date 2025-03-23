// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-calipso navbar-expand-lg">
      <div className="container">
        {/* Logo + Marca -> Home */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/marca.png"
            alt="Acelera ProConsultores"
            style={{ height: '60px', marginRight: '8px' }}
          />
          <span className="fw-bold fs-5 text-white">ACELERA PROCONSULTORES</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ borderColor: '#fff' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Enlaces a la derecha */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-3">
              <Link className="nav-link text-white" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link text-white" to="/cart">
                <i className="bi bi-cart"></i> Carrito
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link className="btn btn-light" to="/register">
                REGISTRO
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-light" to="/login">
                INICIAR SESIÓN
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
