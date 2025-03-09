import React from 'react'

export default function ListDecore(props) {
  return (
    <div>
    <div className='container-img'>
      <div className='imgaes-decore'>
        <img src={`platrie/${props.img}`}alt="" />
      </div>
    </div>
    </div>
  )
}
