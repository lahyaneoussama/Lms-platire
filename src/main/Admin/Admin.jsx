import React from 'react'
import "./css/Dash.css"
import Headeradmin from './Headeradmin'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import Ajouterdecoration from './AjouterDecor'


export default function Admin() {
  return (
    <div>
       <Headeradmin />
       <BrowserRouter>
          <Router>
            <Route path='/Ajouter' element={<Ajouterdecoration/>} />
          </Router>
       </BrowserRouter>
    </div>
  )
}
