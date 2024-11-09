// src/components/ContactForm.js
import React, { useState } from "react";
//import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message Sent!", formData);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Your Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      <input type="email" placeholder="Your Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <textarea placeholder="Your Message" onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
