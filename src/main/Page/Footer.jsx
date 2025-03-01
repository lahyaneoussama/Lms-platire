import React from 'react';
import "./css/footer.css"

export default function Footer() {
  return ( 
  
    <footer className="footer">
    <div class="footer-container">
      <div class="footer-logo">
      <div className="logoOranges">
            
            
        </div>
        
      </div>

      <div class="footer-links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#">Accueil</a></li>
          <li><a href="#">À propos</a></li>
          <li><a href="#">Connexion</a></li>
          <li><a href="#">Inscription</a></li>
          <li><a href="#">Contactez-nous</a></li>
        </ul>
      </div>

      <div class="footer-contact">
        <h3>Contact</h3>
        <p>06 74 81 19 90</p>
        <p>05 53 34 56 78</p>
        <p><a href="mailto:Exemple@gmail.com">Lahyaneoussama2011@gmail.com</a></p>
        <p>Adresse</p>
      </div>

      <div class="footer-newsletter">
        <form>
          <input type="email" placeholder="Entrez votre Email" required />
          <button type="submit">Send</button>
        </form>
        <div class="footer-social">
          <a href="#"><img src="./icons/face.png" alt="Facebook" /></a>
          <a href="#"><img src="instagram-icon.png" alt="Instagram" /></a>
          <a href="#"><img src="whatsapp-icon.png" alt="WhatsApp" /></a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 L'espoir . Tous droits réservés.</p>
    </div>
    </footer>
  
  )
}
