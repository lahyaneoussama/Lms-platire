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
        <div className="social-icons">
              <a href="#" className="icon facebook">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="white" d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C18.34 21.21 22 17.06 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                </svg>
              </a>
              <a href="#" className="icon instagram">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="white" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="icon whatsapp">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="white" d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.13.332.202.043.72.043.433-.101.838z" />
                </svg>
              </a>
            </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 LMS . Tous droits réservés.</p>
    </div>
    </footer>
  
  )
}
