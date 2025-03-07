import React from 'react'
import "./css/decoration.css"

export default function Decoration(props) {
  return (
    <div className='container-img'>
      <div className='imgaes-decore'>
        <img src={`platrie/${props.img}`}alt="" />
      </div>
    </div>
  )
}
