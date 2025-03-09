import React from 'react'
import "./css/Dash.css"
import Headeradmin from './Headeradmin'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import Ajouterdecoration from './AjouterDecor'
import Dashboard from './Daschbord'


export default function Admin() {
  return (
    <div>
       <Headeradmin />
       <Dashboard />
    </div>
  )
}
