import React, {useContext } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../context/CarritoContext'
import { AuthContext } from '../context/AuthContext'

const Item = ( { producto} ) => {

  const {user} = useContext(AuthContext)

  const {agregarProductosCarrito} = useContext(CarritoContext)
  
  return (
    <div className='d-flex justify-content-center py-5' style={ {width: 22 +'rem', margin:50+"px"} }>
        <div className="card p-0 fs-8 border-0 shadow" style={ {width:600 +'px'}}>
            <img src={producto.imagen} alt={producto.nombre} className="img-fluid w-100" style={{height: 200 +'px', objectFit:'cover'}  }/>
            <div className='text-center py-4'>
                <h5 className="card-title my-1">{producto.nombre}</h5>
                <p className="card-text my-1 text-success">{producto.categoria}</p>
                <p className="card-text px-2 my-1">{producto.descripcion.slice(0,60)+" ..."}</p>

                {user ?
                  <div className='d-flex justify-content-center my-2'> 
                    <p className="card-text my-3 text-warning shadow border-0 rounded-circle"><sup>US$ </sup><span className='fs-5 my-2'>{producto.precio}</span></p>
                  </div>
                :
                <div className='my-3'>
                  <Link className='btn text-warning' to= {"/auth/login"}>Iniciar sesión para ver precios</Link>
                </div>}

                <Link className="btn btn-outline-primary mx-3" to ={`/item/${producto.id}`} >Ver mas...</Link>
                <button onClick={()=>agregarProductosCarrito(producto)} className="btn btn-outline-primary mx-3">Agregar Carrito</button>                
            </div>
        </div>
    </div>
  )
}

export default Item
