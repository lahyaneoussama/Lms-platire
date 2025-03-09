import React from 'react'
import "./css/Headeradmin.css"
import { Link } from 'react-router-dom'



export default function NavbarAdmin() {
  return (
    <>
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
          <Link to="/admin/Ajouter">Ajoute article</Link>
        </li>
        <li>
          <Link to="/admin/list_Articles">liste des articles</Link>
        </li>
      </ul>
    </nav>
    <Link to="logout" class="btn-cta">Deconnexion</Link>
  </div>
  <main>
    
  </main>
    </>
    
   

  
  )
}
