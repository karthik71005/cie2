// src/components/CakeDetails.js
import React, { useState } from "react";
//import "./CakeDetails.css";

const CakeDetails = ({ match }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <section className="cake-details">
      <h2>Cake Name</h2>
      <p>Description of the cake...</p>
      <label>
        Quantity:
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      </label>
      <button>Add to Cart</button>
    </section>
  );
};

export default CakeDetails;
