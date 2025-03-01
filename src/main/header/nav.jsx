import React from 'react'
import "./css/nav.css"


export default function Nav() {
  return (
    <div class="top-bar">
    <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
      <path d="M0,0 L360,0 L300,60 L0,60 Z" fill="#F15A24"></path>
      <path d="M360,0 L1200,0 L1200,60 L300,60 Z" fill="#2C3E50"></path>
    </svg>
    <div class="top-bar-content">
      <div class="left">HFV+J3H, El Aioun, Morocco</div>
      <div class="right"><i class="fab fa-whatsapp"></i><span>0645347975</span></div>
    </div>
  </div>
  )
}

