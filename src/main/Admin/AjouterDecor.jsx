import React from 'react'
import { useState } from 'react';
import Headeradmin from './Headeradmin';
import  './css/ajouteproduit.css'

export default function Ajouterdecoration() {
    const [formData, setFormData] = useState({
        id: "",
        nameProduit: "",
        description: "",
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Données du formulaire :", formData);
        alert("Produit validé !");
      };
    
      return (
        <>
        <Headeradmin/>
        <div className="container-dash">
          <h2>Ajouter un Produit</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="id"
              placeholder="ID du produit"
              value={formData.id}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="nameProduit"
              placeholder="Nom du Deocrationx"
              value={formData.nameProduit}
              onChange={handleChange}
              required
            />
            <input type='file'
              name="description"
              placeholder="Images"
              value={formData.description}
              onChange={handleChange}
              required
            />
            <button type="submit">Valider</button>
          </form>
        </div>
        </>
      )}
