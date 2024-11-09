// src/pages/Cart.js
import React, { useState } from 'react';
import CartItem from '../components/CartItem';
import './Cart.css';
const Cart = () => {
  // Sample cart data for demonstration purposes
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Chocolate Delight', price: 20, quantity: 1 },
    { id: 2, name: 'Strawberry Dream', price: 15, quantity: 2 },
  ]);

  // Function to update the quantity of an item
  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // Function to remove an item from the cart
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate the total price of items in the cart
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
          />
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
      <div className="cart-total">
        <h3>Total: ${total.toFixed(2)}</h3>
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
      
    </div>
  );
};

export default Cart;












