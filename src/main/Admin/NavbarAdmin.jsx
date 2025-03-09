import React from 'react'
import "./css/Headeradmin.css"
import { Link } from 'react-router-dom'
<<<<<<< HEAD
=======

>>>>>>> 4c2e91f52f5b74a181aef3034f00301cd41475c5


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
      <Link to="/Dashboard">
          <li>
            <a>Dashbord</a>
          </li>
      </Link>
      <Link to="/photos">
        <li>
<<<<<<< HEAD
          <a href="#">Galery</a>
=======
          <Link to="/admin/Ajouter">Ajoute article</Link>
>>>>>>> 4c2e91f52f5b74a181aef3034f00301cd41475c5
        </li>
        </Link>
        
        <Link to="/AjouterDecoration">
        <li>
          <Link to="/admin/list_Articles">liste des articles</Link>
        </li>
        </Link>
        
      </ul>
    </nav>
<<<<<<< HEAD
    <a href="#" class="btn-dec">Deconnexion</a>
=======
    <Link to="logout" class="btn-cta">Deconnexion</Link>
>>>>>>> 4c2e91f52f5b74a181aef3034f00301cd41475c5
  </div>
  <main>
    
  </main>
    </>
    
   

  
  )
}
