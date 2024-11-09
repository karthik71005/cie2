// src/components/Categories.js
import React from 'react';
import chocolateCake from '../assets/chocolate-cake.jpg';
import fruitCake from '../assets/fruit-cake.jpg';
import customCake from'../assets/custom-cake.jpg';
import vanillaCake from'../assets/vannila.jpg';
import redVelvetCake from'../assets/red.jpg';
//import carrotCake from '../assets/carrot.jpg';
//import coffeeCake from'../assets/coffee.jpg';

import './categories.css';

const Categories = () => {
  return (
    <div className="categories">
      <div className="category">
        <img src={chocolateCake} alt="Chocolate Cake" />
        <h3>Chocolate Cakes</h3>
        <p>Delicious chocolate cakes with rich flavors.</p>
      </div>
      <div className="category">
        <img src={fruitCake} alt="Fruit Cake" />
        <h3>Fruit Cakes</h3>
        <p>Fresh fruit cakes made with love.</p>
      </div>
      <div className="category">
        <img src={customCake} alt="Custom Cake" />
        <h3>Custom Cakes</h3>
        <p>Custom cakes are personalized creations designed to suit specific themes, flavors, and preferences for special occasions like birthdays, weddings, and anniversaries. Customers can choose from a variety of flavors, fillings, and frostings, with intricate decorations such as edible images, figurines, or hand-painted designs. These cakes are tailored to match the event's theme, whether through color schemes, shapes, or custom toppers. The ability to customize the cake's size, shape, and overall look ensures it perfectly fits the celebration, making it a unique and memorable centerpiece.</p>
      </div>
      <div className="category">
  <img src={vanillaCake} alt="Vanilla Cake" />
  <h3>Vanilla Cake</h3>
  <p>Vanilla cake is a light and fluffy treat with a subtle sweetness, often paired with buttercream or whipped cream frosting. It's perfect for any occasion and can be customized with various fillings or toppings like fruits, sprinkles, or edible flowers.</p>
</div>

<div className="category">
  <img src={redVelvetCake} alt="Red Velvet Cake" />
  <h3>Red Velvet Cake</h3>
  <p>Red velvet cake is known for its striking red color and rich flavor, combining hints of cocoa and a creamy tang from cream cheese frosting. It's a popular choice for weddings and celebrations for its elegant look and delicious taste.</p>
</div>
<div className="category">
        <img src={chocolateCake} alt="Chocolate Cake" />
        <h3>Chocolate Cakes</h3>
        <p>Delicious chocolate cakes with rich flavors.</p>
      </div>
      <div className="category">
        <img src={fruitCake} alt="Fruit Cake" />
        <h3>Fruit Cakes</h3>
        <p>Fresh fruit cakes made with love.</p>
      </div>
      <div className="category">
        <img src={customCake} alt="Custom Cake" />
        <h3>Custom Cakes</h3>
        <p>Custom cakes are personalized creations designed to suit specific themes, flavors, and preferences for special occasions like birthdays, weddings, and anniversaries. Customers can choose from a variety of flavors, fillings, and frostings, with intricate decorations such as edible images, figurines, or hand-painted designs. These cakes are tailored to match the event's theme, whether through color schemes, shapes, or custom toppers. The ability to customize the cake's size, shape, and overall look ensures it perfectly fits the celebration, making it a unique and memorable centerpiece.</p>
      </div>
      <div className="category">
  <img src={vanillaCake} alt="Vanilla Cake" />
  <h3>Vanilla Cake</h3>
  <p>Vanilla cake is a light and fluffy treat with a subtle sweetness, often paired with buttercream or whipped cream frosting. It's perfect for any occasion and can be customized with various fillings or toppings like fruits, sprinkles, or edible flowers.</p>
</div>

<div className="category">
  <img src={redVelvetCake} alt="Red Velvet Cake" />
  <h3>Red Velvet Cake</h3>
  <p>Red velvet cake is known for its striking red color and rich flavor, combining hints of cocoa and a creamy tang from cream cheese frosting. It's a popular choice for weddings and celebrations for its elegant look and delicious taste.</p>
</div>




      {/* Add more categories here */}
    </div>
  );
};

export default Categories;

