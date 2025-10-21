import React, {useContext } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../context/CarritoContext'

const Item = ( { producto} ) => {

  const {agregarProductosCarrito} = useContext(CarritoContext)
  
  return (
    <div className='d-flex justify-content-center m-3' style={ {width: 18 +'rem'} }>
        <div className="card p-0 fs-8" style={ {width: 18 +'rem'}}>
            <img src={producto.imagen} alt={producto.nombre} className="img-fluid w-100" style={{height: 160 +'px', objectFit:'cover'}  }/>
            <div className='text-center py-2'>
                <h5 className="card-title my-1">{producto.nombre}</h5>
                <p className="card-text my-1 text-success">{producto.categoria}</p>
                <p className="card-text px-2 my-1">{producto.descripcion.slice(0,60)+" ..."}</p>
                <p className="card-text my-1"><sup>US$ </sup><span className='fs-4'>{producto.precio}</span></p>
                <Link className="btn btn-outline-primary m-1" to ={`/item/${producto.id}`} >Ver mas...</Link>
                <button onClick={()=>agregarProductosCarrito(producto)} className="btn btn-outline-primary m-1">Agregar Carrito</button>                
            </div>
        </div>
    </div>
  )
}

export default Item
