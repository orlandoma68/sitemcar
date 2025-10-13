import React, { useState } from 'react'
import Item from './Item'

const Itemproduct = ({productos,agregarProductosCarrito}) => {
  
  return (
    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 d-flex justify-content-center'>
        { productos.length >0 && 
            productos.map((producto) =>{
                return(<Item key={producto.id} producto = {producto} agregarProductosCarrito ={agregarProductosCarrito}/>)
            })
        }
    </div>
  )
}

export default Itemproduct
