import { useContext, useEffect, useState } from "react"
import { CarritoContext } from "../context/CarritoContext"


const ItemCount = ({handleSacarCarrito, handleEliminarCarrito, handleAgregarCarrito, cantidad}) => {
    
    const {esta,cant} = useContext(CarritoContext)

  return (     
            <div className="d-flex flex-column justify-content-center">
                {esta ?(  
                <div className='border border-1 border-primary d-flex align-items-center justify-content-center rounded-5 px-1' style={ {width: 11 +'rem'}}>
                    {cant === 1 ? 
                        <button onClick={handleEliminarCarrito} className='btn border-0 px-4'><i className="fa-solid fa-trash"></i></button> :
                        <button onClick={handleSacarCarrito} className='btn border-0 px-4'>-</button>
                    }
                    <h6 className="px-3">{ cant }</h6>
                    <button onClick={handleAgregarCarrito} className='btn border-0 px-4'>+</button>
                </div>):(
                <div className="border-0 d-flex my-3">
                    <button onClick={handleAgregarCarrito} className='btn btn-outline-primary px-4'>Agregar al Carrito</button>
                </div>)
                }
            </div>
        
  )
}

export default ItemCount
