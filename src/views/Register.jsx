// src/views/Register.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../constants'; // Importa la URL base definida en constants.js

function Register() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene la recarga de la página
    try {
      // Usamos API_BASE_URL para construir la URL de la petición
      const response = await axios.post(`${API_BASE_URL}/auth/register`, {
        nombre,
        apellido,
        email,
        password
      });
      setMessage(response.data.message); // Muestra el mensaje de éxito
    } catch (error) {
      setMessage(
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : 'Error en el registro'
      );
    }
  };

  return (
    <div className="container text-white">
      <h2 className="mb-4">Registro</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            placeholder="Tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Apellido</label>
          <input
            type="text"
            className="form-control"
            placeholder="Tu apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            placeholder="tuemail@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Registrarse</button>
      </form>
      {message && (
        <div className="alert alert-info mt-3" role="alert">
          {message}
        </div>
      )}
    </div>
  );
}

export default Register;
