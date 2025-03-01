import React from 'react'
import "./css/Blog.css"
export default function Blog() {
  return (
    <section className="blog-section">
    <div>
      <h2>Bienvenue Sur Notre Blog</h2>
      <p>
        Découvrez nos astuces et méthodes de décoration en plâtre, ainsi que les
        dernières tendances en design d'intérieur. Apprenez comment ajouter du
        cachet à vos espaces grâce à nos articles spécialisés.
      </p>
      <div className="blog-cards">
        
        <article className="blog-post">
          
          <div className="blog-content">
            <h3>Comment choisir les moulures parfaites</h3>
            <p>
              Les moulures peuvent transformer l’apparence de n’importe quelle
              pièce. Découvrez comment les sélectionner...
            </p>
           
          </div>
        </article>
        
        <article className="blog-post">
          
          <div className="blog-content">
            <h3>5 astuces pour un intérieur élégant</h3>
            <p>
              Un intérieur élégant se construit grâce à une harmonie de
              couleurs, de textures...
            </p>
            
          </div>
        </article>
       
        <article class="blog-post">
          <div class="blog-content">
            <h3>Comment bien entretenir vos décorations en plâtre</h3>
            <p>
              Les décorations en plâtre demandent un entretien régulier pour
              conserver tout leur éclat...
            </p>
           
          </div>
        </article>
      </div>
    </div>
  </section>
  )
}
