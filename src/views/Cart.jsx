// src/views/Cart.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cartItems, removeItem, updateItemQuantity, clearCart } = useContext(CartContext);

  const handleIncrement = (item) => {
    updateItemQuantity(item.id, item.cantidad + 1);
  };

  const handleDecrement = (item) => {
    if (item.cantidad > 1) {
      updateItemQuantity(item.id, item.cantidad - 1);
    } else {
      removeItem(item.id);
    }
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.cantidad), 0);

  // Función simulada para el pago
  const handlePay = () => {
    alert('Pago procesado con éxito.');
    clearCart();
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">No hay productos en el carrito.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cartItems.map((item, index) => (
              <li key={index} className="list-group-item d-flex align-items-center">
                <img
                  src={item.image || '/default.jpg'}
                  alt={item.title}
                  style={{
                    width: '80px',
                    height: '80px',
                    objectFit: 'cover',
                    marginRight: '15px'
                  }}
                />
                <div className="flex-grow-1">
                  <strong>{item.title}</strong> <br />
                  <small>Plan x 3 meses</small> <br />
                  <small>Precio unitario: ${item.price}</small>
                </div>
                <div className="d-flex align-items-center">
                  <button className="btn btn-sm btn-secondary me-2" onClick={() => handleDecrement(item)}>
                    -
                  </button>
                  <span>{item.cantidad}</span>
                  <button className="btn btn-sm btn-secondary ms-2" onClick={() => handleIncrement(item)}>
                    +
                  </button>
                  <button className="btn btn-sm btn-danger ms-3" onClick={() => removeItem(item.id)}>
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div
            className="text-center mb-3"
            style={{ backgroundColor: '#fff', color: 'green', padding: '15px', borderRadius: '8px' }}
          >
            <h4>Total: ${total}</h4>
          </div>
          <div className="text-center">
            <button className="btn btn-secondary me-3" onClick={clearCart}>
              Limpiar Carrito
            </button>
            <button className="btn btn-success me-3" onClick={handlePay}>
              Pagar
            </button>
            <Link to="/packs" className="btn btn-info">
              Volver
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
