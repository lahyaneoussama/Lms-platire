import React from 'react'
import Nav from '../header/nav'
import NavbarAdmin from './NavbarAdmin'
import { Outlet } from 'react-router-dom'

export default function Headeradmin() {
  return (
    <div>
        <Nav />
        <NavbarAdmin />
        <main><Outlet/></main>
    </div>
  )
}
