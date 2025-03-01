import React from 'react'
import "./css/Advertisement.css"
import Feauture from './Feauture'


export default function Advertisement() {
  return (
    <section>
      <div className="hero">
    <div class=" hero-content">
    <div class="hero-image">
        <img
          src="./images/employe.png"
          alt="Décorateur en plâtre"
        />
      </div>
      <div class="hero-text">
        <h1>Bienvenue sur LMS – Spécialistes des Décorations en Plâtre</h1>
        <p>
          Apportez une touche d'élégance et de raffinement à vos espaces
          intérieurs grâce à notre expertise dans la décoration en plâtre. 
          Qu'il s'agisse de moulures, corniches, rosaces, ou d'autres
          éléments décoratifs, nous vous proposons des solutions sur mesure
          pour transformer vos espaces.
        </p>
        
       <div className='Feauture-hero'>
            <Feauture />
    </div></div>
    </div>
    </div>
    
  </section>
  )
}
