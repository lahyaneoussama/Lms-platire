import React from 'react'
import Header from '../header/header'
import Login from './Login'
import Footer from '../Page/Footer'

export default function AdminLogin() {
  return (
    <div>
        <Header/>
        <section className='Login-postion'>
        <Login />
        </section>
        <Footer />
    </div>
  )
}
