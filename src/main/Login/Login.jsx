import React from 'react';
import "./css/Login.css"


export default function Login() {
  return (
    <div className="container-login">
 
    <div className="left-panel">
        
            <div className='LogoWhite'>
                <div className="images">
                <img src="" alt="" />
                </div>
            </div>
       
        <h1>Bienvenue de retour!</h1>
        <p>Nous concevons des décorations en plâtre élégantes et durables, adaptées à tous les styles. Chaque projet est une œuvre d'art,
             alliant précision et professionnalisme pour sublimer votre intérieur.</p>
        
    </div>

   
    <div className="right-bg">
    <div className="right-panel">
        <p className='Aides'>Connectez-vous à votre compte pour continuer</p> 

        <form>
            <div className="form-group">
                <label for="email">Nom utilisateur</label>
                <input type="email" id="email" placeholder="E-mail" required />
            </div>

            <div className="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Password" required />
            </div>

            <div className="form-actions">
                <a href="#">Mot de passe oublié?</a>
            </div>

            <button type="submit" className="submit-button">SE CONNECTER</button>
        </form>

        <div class="signup-link">
            <p>Vous n'avez pas de compte ? <a href="#">Inscrivez-vous</a></p>
        </div>
    </div>
</div>
</div>
  )
}
