// src/pages/Checkout.js
import React, { useState } from 'react';
import './Checkout.css';

const Checkout = () => {
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleCheckout = () => {
    // Placeholder for checkout functionality (e.g., payment integration)
    alert('Order placed successfully!');
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="checkout-section">
        <h3>Shipping Information</h3>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={shippingInfo.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={shippingInfo.address}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={shippingInfo.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={shippingInfo.phone}
          onChange={handleChange}
        />
      </div>
      <div className="checkout-total">
        <h3>Order Total: $Total</h3> {/* Replace $Total with dynamic total if available */}
        <button onClick={handleCheckout} className="place-order-button">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
