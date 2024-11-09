import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import the CSS file

const Header = () => {
  return (
    <header>
      <h1>Cake Shop</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/categories">Cakes</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/about">About Us</Link>
      </nav>
    </header>
  );
};

export default Header;
