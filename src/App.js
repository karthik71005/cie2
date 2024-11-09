// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart'; // Import Cart component
import Checkout from './components/Checkout'; // Import Checkout component
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home'; // Import the Home component
import Categories from './components/Categories';
import About from './components/AboutUs';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Add your Home component */}
        <Route path="/cart" element={<Cart />} /> {/* Cart page route */}
        <Route path="/checkout" element={<Checkout />} /> {/* Checkout page route */}
        <Route path='/categories' element={<Categories/>}/>
        <Route path="/about" element={<About />} />
        {/* Add other routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;




