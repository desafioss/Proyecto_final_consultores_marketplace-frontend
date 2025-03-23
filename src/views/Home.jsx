// src/views/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      {/* Hero: Texto izq, Video der en la misma fila */}
      <div className="row hero-row">
        <div className="col-md-6 mb-3">
          <h1 className="hero-title"> Acompañamos y concretamos
           tu negocio</h1>


          <p className="hero-subtitle">
            En ProConsultores te asesoramos en Contabilidad, Control de Gestión y más.
          </p>
        </div>
        <div className="col-md-6 mb-3 d-flex justify-content-center">
  <div className="hero-video-container" style={{ width: '400px', position: 'relative' }}>
    <video
      src="/videoinicio.mp4"
      autoPlay
      loop
      muted
      className="hero-video"
      style={{ width: '100%', borderRadius: '6px' }}
    />
    <img src="/marca.png" alt="Marca" className="marca-overlay" />
  </div>
</div>



      </div>

      {/* Sección de Packs (4 en una sola fila ) */}
      <div className="packs-section">
        <h2 className="packs-title">Servicios Pack</h2>
        <div className="row">
          {/* Pack 1 */}
          <div className="col-md-3 mb-4">
            <div className="card h-100">
              <img
                src="/contabilidad.jpg"
                className="card-img-top"
                alt="Contabilidad"
              />
              <div className="card-body">
                <h5 className="card-title">Contabilidad</h5>
                <p className="card-text">Servicio contable x 3 meses</p>
                <p><strong>Precio: $500.000</strong></p>
                <Link to="/packs/1" className="btn btn-primary">Ver Detalles</Link>
              </div>
            </div>
          </div>
          {/* Pack 2 */}
          <div className="col-md-3 mb-4">
            <div className="card h-100">
              <img
                src="/construccion2.jpg"
                className="card-img-top"
                alt="Control de Gestión"
              />
              <div className="card-body">
                <h5 className="card-title">Control de Gestión</h5>
                <p className="card-text">Procesos y KPIs x 3 meses</p>
                <p><strong>Precio: $500.000</strong></p>
                <Link to="/packs/2" className="btn btn-primary">Ver Detalles</Link>
              </div>
            </div>
          </div>
          {/* Pack 3 */}
          <div className="col-md-3 mb-4">
            <div className="card h-100">
              <img
                src="/modelo.jpg"
                className="card-img-top"
                alt="Modelo de Negocios"
              />
              <div className="card-body">
                <h5 className="card-title">Modelo de Negocios</h5>
                <p className="card-text">Propuesta de valor y segmentación</p>
                <p><strong>Precio: $500.000</strong></p>
                <Link to="/packs/3" className="btn btn-primary">Ver Detalles</Link>
              </div>
            </div>
          </div>
          {/* Pack 4 */}
          <div className="col-md-3 mb-4">
            <div className="card h-100">
              <img
                src="/marketing.jpg"
                className="card-img-top"
                alt="Marketing Digital"
              />
              <div className="card-body">
                <h5 className="card-title">Marketing Digital</h5>
                <p className="card-text">Estrategias x 3 meses</p>
                <p><strong>Precio: $500.000</strong></p>
                <Link to="/packs/4" className="btn btn-primary">Ver Detalles</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
