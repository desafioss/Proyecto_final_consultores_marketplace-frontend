// src/components/Layout.jsx
import React from 'react';
import '../styles.css'; // Importa el archivo de estilos que está en src

function Layout({ children }) {
  return (
    <>
      {/* Capa de fondo que se muestra en todas las vistas */}
      <div className="full-background"></div>
      {/* Contenedor para el contenido que se mostrará encima del fondo */}
      <div className="content-wrapper">
        {children}
      </div>
    </>
  );
}

export default Layout;
