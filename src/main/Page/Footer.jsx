import React from 'react';
import "./css/footer.css"

export default function Footer() {
  const Lahcen = "212668367905";
  const Said= "212662334327";
  const message = encodeURIComponent("Hello, I need more information!");

const sendWhatsAppMessageLahecn = () => {
  window.open(`https://wa.me/${Lahcen}?text=${message}`, "_blank");

};
const sendWhatsAppMessageSaid = () => {
  window.open(`https://wa.me/${Said}?text=${message}`, "_blank");
};
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
          <li><a href="#">Connexion</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contactez-nous</a></li>
        </ul>
      </div>

      <div class="footer-contact">
        <h3>Contact</h3>
      
        <p><a onClick={sendWhatsAppMessageLahecn}>+212 668 36 79 05</a></p>
        <p><a onClick={sendWhatsAppMessageSaid}>+212 662 33 43 27</a></p>
        
        <p><a>Lahyaneoussama2011@gmail.com</a></p>
        <p>RUE LMO9AWMA N 1 El Aioun Sidi Mellouk</p>
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
      <p>&copy; 2025 LMS . Tous droits réservés.</p>
    </div>
    </footer>
  
  )
}
