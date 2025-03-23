// src/views/Login.jsx
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Petición al backend
      const response = await axios.post('http://localhost:3001/api/auth/login', {
        email,
        password
      });

      // Guardar token en AuthContext (NO se muestra en pantalla)
      login(response.data.token);

      // Mensaje de éxito
      setMessage('Inicio de sesión exitoso.');

      // Redirigir a /profile
      navigate('/profile');
    } catch (error) {
      setMessage(
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : 'Error al iniciar sesión'
      );
    }
  };

  return (
    <div className="container text-white" style={{ marginTop: '80px' }}>
      <h2 className="mb-4">Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
      </form>
      {message && (
        <div className="alert alert-info mt-3" role="alert">
          {message}
        </div>
      )}
    </div>
  );
}

export default Login;
