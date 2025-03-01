import React from 'react'
import "./css/header.css"
import { Link } from 'react-router-dom'

export default function Navbar() {
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
        <Link to="/">
         <li><a>Accueil</a></li>
        </Link>
        <li><a href="#">Blog</a></li>
        <Link to="/Galery">
         <li><a>Galery</a></li>
        </Link>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    <a href="#" class="btn-cta">Demander un Devis</a>
  </div>
  
  )
}
