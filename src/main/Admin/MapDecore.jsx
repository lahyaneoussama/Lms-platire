import React from 'react'
import Platrie from "../Galery/ListDecoration"
import ListDecore from './ListDecore'
import "./css/ajouteproduit.css"

export default function MapDecore() {
  return (
    <div>
         <div className='container-decore'>
        {
            Platrie.map(function(element , index){
                return <ListDecore key={index} ids={element.id} name={element.name} img={element.image} />
            })
        }

    </div>
    </div>
  )
}
