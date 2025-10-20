import React, {useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { CarritoContext } from '../context/CarritoContext'

const Itemdetail = ({item}) => {

    const {agregarProductosCarrito,eliminarProductosCarrito,sacarProductosCarrito, estaProductoCarrito,cantidadPorProducto} = useContext(CarritoContext)

  return (
    <>
        {
            item && 
            <div className='container d-flex justify-content-center align-items-center min-vh-100'>
                <div className="row d-flex justify-content-center align-items-center" style={ {width: 50 +'rem'}}>                    

                        <div className='col-md-6 bg-light d-flex justify-content-center align-items-center m-3 p-4' style={ {height: 280 +'px'}  }>
                            <img src={item.imagen} alt={item.nombre} className="img-fluid w-100" style={{height: 280 +'px', objectFit:'cover'}  }/>
                        </div>
                        
                        <div className='col m-3 d-flex flex-column'>
                            <h5 className="card-title">{item.nombre}</h5>
                            <h3 className="card-text">{item.categoria}</h3>
                            <p className="card-text">{item.descripcion}</p>
                            <p className="card-text fs-6"> 
                                <sup>US$</sup> 
                                <span className='text-dark fs-2' >{item.precio}</span>
                            </p>
                            <ItemCount                                   
                                handleSacarCarrito={()=>{sacarProductosCarrito(item)}} 
                                handleEliminarCarrito={()=>{eliminarProductosCarrito(item)}} 
                                handleAgregarCarrito = {()=>{agregarProductosCarrito(item)}} 
                                estaProductoCarrito = {estaProductoCarrito}
                                cantidadPorProducto = {cantidadPorProducto}
                            />
                        </div>    
                </div>
            </div>
        }
    </>)
}

export default Itemdetail
