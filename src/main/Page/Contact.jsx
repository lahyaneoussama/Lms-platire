import React from 'react';
import "./css/contact.css"

export default function Contact() {
  return (
    
    <section id="contact">
      <div class="contact-section">
    <div class="contact-container">
      <div class="contact-form">
        <h2>Contactez-nous</h2>
        <form>
          <input type="text" placeholder="Nom" required />
          <input type="email" placeholder="E-mail" required />
          <textarea placeholder="Message" rows="4" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      <div class="map">
      <iframe
        title="Google Map"
        width="100%"
        height="300"
        style={{ border: "0", borderRadius: "8px" }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2767.351270907799!2d-2.509844525116465!3d34.58157368959684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd77f92f76892fed%3A0x60edc19fd8a0f8a2!2z2KzYqNin2LUg2LPZiNiz!5e1!3m2!1sen!2sma!4v1740759478935!5m2!1sen!2sma"
      ></iframe>
      </div>
    </div>
  </div>
    </section>
  )
}
