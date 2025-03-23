// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="footer-calipso d-flex align-items-center justify-content-center">
      <div className="container text-center py-3 text-white">
        <div className="row">
          <div className="col-md-3 mb-3">
            <h6>ACERCA DE PROCONSULTORES</h6>
            <p>Asesorías, Visitas Terreno, Construcción, Gestión de Permisos</p>
          </div>
          <div className="col-md-3 mb-3">
            <h6>LINKS</h6>
            <p>Blog</p>
          </div>
          <div className="col-md-3 mb-3">
            <h6>SOCIAL</h6>
            <p>X <br /> F <br /> correo@mailto.cl</p>
          </div>
          <div className="col-md-3 mb-3">
            <h6>Contacto</h6>
            <p>+569 0000 0000</p>
          </div>
        </div>
        <hr className="bg-light" />
        <p className="mt-2 fw-bold">© 2025 ProConsultores. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
