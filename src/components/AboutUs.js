
import React from 'react';
import './About.css'; 
const About = () => (
  <div className="about">
    <h2>About Us</h2>
    <section className="about-story">
      <h3>Our Story</h3>
      <p>
        Welcome to our Cake Shop! We are a family-owned bakery that has been crafting
        delicious and beautiful cakes for over 20 years. Our mission is to bring joy
        to every celebration with cakes that taste as amazing as they look.
      </p>
      <p>
        From classic flavors to custom designs, we use the finest ingredients and
        a touch of creativity in every cake we make. Thank you for choosing us to
        be a part of your special moments.
      </p>
    </section>

    <section className="about-values">
      <h3>Our Values</h3>
      <ul>
        <li>Quality Ingredients</li>
        <li>Customer Satisfaction</li>
        <li>Creativity and Passion</li>
        <li>Community Connection</li>
      </ul>
    </section>

    <section className="about-contact">
      <h3>Contact Us</h3>
      <p>Address: 123 Bakery Lane, Sweet Town</p>
      <p>Email: info@cakeshop.com</p>
      <p>Phone: +1 (555) 123-4567</p>
      <div className="social-media">
        <h4>Follow Us</h4>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
      </div>
    </section>
  </div>
);

export default About;
