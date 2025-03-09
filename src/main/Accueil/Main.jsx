import React from 'react'

import "./css/main.css"
import Header from '../header/header'
import Advertisement from '../Page/Advertisement'
import Aprops from '../Page/Props'
import Decore from '../Page/Decore'
import Blog from '../Page/Blog'
import Footer from '../Page/Footer'
import Contact from '../Page/Contact'



export default function Main() {
  return (
    <div className='Main'>
       <Header />
       <section className='advrt'>
       <Advertisement /> 
      </section>
       <Aprops />
       <Decore/>
       <Blog /> 
       <Contact />
       <Footer /> 
     
    </div>
  )
}
