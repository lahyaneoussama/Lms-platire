import React from 'react'
import "./css/Dash.css"
import Headeradmin from './Headeradmin'
import {  Route, Routes } from 'react-router-dom'
import Ajouterdecoration from './AjouterDecor'
<<<<<<< HEAD
import Dashboard from './Daschbord'
=======
import LogOut from './logOut'
import ListeArticle from './ListeArticle'
>>>>>>> 4c2e91f52f5b74a181aef3034f00301cd41475c5


export default function Admin() {
  return (
    <div>
<<<<<<< HEAD
       <Headeradmin />
       <Dashboard />
=======
      <Routes>
         <Route path='/'  element={<Headeradmin/>}> 
               <Route path='/Ajouter' element={<Ajouterdecoration/>} />
               <Route path='/LogOut' element={<LogOut/>} />
               <Route path='/list_Articles' element={<ListeArticle/>} />
            </Route>
      </Routes>
            
           
        
       
>>>>>>> 4c2e91f52f5b74a181aef3034f00301cd41475c5
    </div>
  )
}
