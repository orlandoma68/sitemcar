
import React, { useContext, useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import { CarritoContext } from '../context/CarritoContext'

const Item = ( { producto } ) => {

  const {agregarProductosCarrito} = useContext(CarritoContext)

  const cantidad = 1
  
  return (
        <div className="card m-3 bg-light p-0" style={ {width: 20 +'rem'} }>
            <img src={producto.imagen} alt={producto.nombre} className="img-fluid w-100" style={{height: 200 +'px', objectFit:'cover'}  }/>
            <div className='text-center py-2'>
                <h5 className="card-title my-1">{producto.nombre}</h5>
                <p className="card-text my-1">{producto.categoria}</p>
                <p className="card-text px-4 my-1">{producto.descripcion}</p>
                <p className="card-text my-1"><sup>US$ </sup><span className='fs-2'>{producto.precio}</span></p>
                <Link className="btn btn-outline-primary m-1" to ={`/item/${producto.id}`} >Ver mas...</Link>
                <button onClick={()=>agregarProductosCarrito(producto, cantidad)} className="btn btn-outline-primary m-1">Agregar Carrito</button>
            </div>
        </div>
  )
}

export default Item
