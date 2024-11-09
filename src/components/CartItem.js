// src/components/CartItem.js
import React from 'react';
import './CartItem.css';

const CartItem = ({ item, updateQuantity, removeItem }) => {
  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value, 10);
    updateQuantity(item.id, quantity);
  };

  return (
    <div className="cart-item">
      <h4>{item.name}</h4>
      <p>Price: ${item.price.toFixed(2)}</p>
      <input
        type="number"
        min="1"
        value={item.quantity}
        onChange={handleQuantityChange}
      />
      <button onClick={() => removeItem(item.id)} className="remove-button">
        Remove
      </button>
      <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
    </div>
  );
};

export default CartItem;
