// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="navbar-logo">Cake Shop</h1>
    <ul className="navbar-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/categories">Categories</Link></li>
      <li><Link to="/cart">Cart</Link></li>
      <li><Link to="/about">About Us</Link></li>
     
<li><Link to="/about">About Us</Link></li>

    </ul>
  </nav>
);

export default Navbar;
