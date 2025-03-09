import React from 'react'
import "./css/Headeradmin.css"
import { Link } from 'react-router-dom'


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
      <Link to="/Dashboard">
          <li>
            <a>Dashbord</a>
          </li>
      </Link>
      <Link to="/photos">
        <li>
          <a href="#">Galery</a>
        </li>
        </Link>
        
        <Link to="/AjouterDecoration">
        <li>
          <a href="#">Ajoute Decoration</a>
        </li>
        </Link>
        
      </ul>
    </nav>
    <a href="#" class="btn-dec">Deconnexion</a>
  </div>
  
  )
}
