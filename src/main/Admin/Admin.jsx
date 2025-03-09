import React from 'react'
import "./css/Dash.css"
import Headeradmin from './Headeradmin'
import {  Route, Routes } from 'react-router-dom'
import Ajouterdecoration from './AjouterDecor'
import LogOut from './logOut'
import ListeArticle from './ListeArticle'


export default function Admin() {
  return (
    <div>
      <Routes>
         <Route path='/'  element={<Headeradmin/>}> 
               <Route path='/Ajouter' element={<Ajouterdecoration/>} />
               <Route path='/LogOut' element={<LogOut/>} />
               <Route path='/list_Articles' element={<ListeArticle/>} />
            </Route>
      </Routes>
            
           
        
       
    </div>
  )
}
