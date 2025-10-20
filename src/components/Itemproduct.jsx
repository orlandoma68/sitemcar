import React, { useState } from 'react'
import Item from './Item'

const Itemproduct = ({numeroDatos}) => {
  
  return (
    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 d-flex justify-content-center'>
        { numeroDatos.length >0 && 
            numeroDatos.map((producto) =>{
                return(<Item key={producto.id} producto = {producto}/>)
            })
        }
    </div>
  )
}

export default Itemproduct
