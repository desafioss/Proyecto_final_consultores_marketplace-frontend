// src/views/Profile.jsx
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../constants'; // Importa la URL base desde constants.js

function Profile() {
  const { user, logout } = useContext(AuthContext);
  const { cartItems, clearCart } = useContext(CartContext);
  const [profileData, setProfileData] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [paymentMsg, setPaymentMsg] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !user.token) {
      setErrorMsg('No has iniciado sesión.');
      return;
    }
    const fetchProfile = async () => {
      try {
        // Se construye la URL usando API_BASE_URL (definida en constants.js)
        const response = await axios.get(`${API_BASE_URL}/auth/profile`, {
          headers: { Authorization: `Bearer ${user.token}` }
        });
        setProfileData(response.data);
      } catch (error) {
        setErrorMsg(
          error.response && error.response.data && error.response.data.message
            ? error.response.data.message
            : 'Error al cargar el perfil'
        );
      }
    };
    fetchProfile();
  }, [user]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handlePayment = () => {
    // Simula el proceso de pago
    alert('Pago procesado con éxito.');
    clearCart();
    setPaymentMsg('Pago realizado, carrito vaciado.');
  };

  if (!user || !user.token) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger" role="alert">
          {errorMsg || 'No has iniciado sesión.'}
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      {/* Información del perfil */}
      <div className="card shadow bg-light text-dark mb-4">
        <div className="card-header">
          <h4 className="card-title mb-0">
            Bienvenido, {profileData ? `${profileData.nombre} ${profileData.apellido}` : ''}
          </h4>
        </div>
        <div className="card-body">
          {profileData ? (
            <>
              <p><strong>Email:</strong> {profileData.email}</p>
            </>
          ) : (
            <p>Cargando datos del perfil...</p>
          )}
          <button className="btn btn-primary" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </div>
      </div>

      {/* Resumen del carrito integrado en el perfil */}
      <div className="card shadow mb-4">
        <div className="card-header">
          <h5 className="mb-0">Resumen del Carrito</h5>
        </div>
        <div className="card-body">
          {cartItems.length === 0 ? (
            <p>No tienes productos en el carrito.</p>
          ) : (
            <>
              <ul className="list-group mb-3">
                {cartItems.map((item, index) => (
                  <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                      <strong>{item.title}</strong> <br />
                      Cantidad: {item.cantidad} <br />
                      Precio unitario: ${item.price}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mb-3 p-3" style={{ backgroundColor: '#fff', color: 'green', borderRadius: '8px' }}>
                <h5>
                  Total: ${cartItems.reduce((sum, item) => sum + item.price * item.cantidad, 0)}
                </h5>
              </div>
              <button className="btn btn-success me-3" onClick={handlePayment}>
                Pagar
              </button>
            </>
          )}
          {paymentMsg && (
            <div className="alert alert-info mt-3" role="alert">
              {paymentMsg}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
