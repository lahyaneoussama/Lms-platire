import React from 'react'
import "./css/Headeradmin.css"


export default function NavbarAdmin() {
  return (
    
    <div class="container header-inner">
    <div class="logo">
      <a href="#" class="logo-text">LMS Décor</a>
    </div>

    
    <input type="checkbox" id="menu-toggle" class="menu-toggle-checkbox" />


    <label for="menu-toggle" class="menu-toggle">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </label>

    <nav class="main-nav">
      <ul>
        <li>
          <a>Dashbord</a>
        </li>
        <li>
          <a href="#">Ajoute Decoration</a>
        </li>
      </ul>
    </nav>
    <a href="#" class="btn-cta">Deconnexion</a>
  </div>
  
  )
}
