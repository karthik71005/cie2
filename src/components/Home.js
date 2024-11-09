import React from "react";
import cakeImage from '../assets/cake1.jpg';
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <h2>Welcome to Our Cake Shop</h2>
      <h3>Where every slice is a slice of happiness!</h3>
      <p>
        We specialize in creating delicious, freshly baked cakes for all occasions. Whether you're celebrating a birthday, wedding, or just indulging in a sweet treat, we offer a wide range of flavors, from classic chocolate to unique, custom creations. Our cakes are made with the finest ingredients, ensuring each bite is as delightful as the last. Come in and treat yourself to the perfect cake today!
      </p>
      <div className="featured-cakes">
        <img src={cakeImage} alt="Cake" className="cake-image" />
        {/* Display featured cakes here */}
      </div>
    </section>
  );
};

export default Home;


