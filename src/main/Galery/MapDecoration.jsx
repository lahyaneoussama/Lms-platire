import React from 'react'
import Decoration from './Decoration'
import "./css/MapDecore.css"
import Platrie from './ListDecoration'


export default function MapDecoration() {
  


  return (
    <div className='container-decoration'>
        {
            Platrie.map(function(element , index){
                return <Decoration key={index} ids={element.id} name={element.name} img={element.image} />
            })
        }

    </div>
  )
}
