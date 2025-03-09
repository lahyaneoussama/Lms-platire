import React, { useState } from "react";
import "./css/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Le nom est requis.";
    if (!formData.email.trim()) {
      newErrors.email = "L'e-mail est requis.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format d'e-mail invalide.";
    }
    if (!formData.message.trim()) newErrors.message = "Le message est requis.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Message envoyé avec succès !");
      setFormData({ name: "", email: "", message: "" }); 
    }
  };

  return (
    <section id="contact">
      <div className="contact-section">
        <div className="contact-container">
          <div className="contact-form">
            <h2>Contactez-nous</h2>
            <form onSubmit={handleSubmit}>
              <input
                className="inp_contact"
                type="text"
                name="name"
                placeholder="Nom"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}

              <input
                className="inp_contact"
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}

              <textarea
                className="inp_contact"
                name="message"
                placeholder="Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <span className="error">{errors.message}</span>}

              <button type="submit">Envoyer</button>
            </form>
          </div>

          <div className="map">
            <iframe
              title="Google Map"
              width="100%"
              height="300"
              style={{ border: "0", borderRadius: "8px" }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2767.35127090777!2d-2.509844525116489!3d34.58157368959685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd77f92f76892fed%3A0x60edc19fd8a0f8a2!2z2KzYqNin2LUg2LPZiNiz!5e1!3m2!1sen!2sma!4v1740933877941!5m2!1sen!2sma"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
