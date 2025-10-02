
import { useState } from "react"
import { Link } from "react-router-dom"

const ItemCount = ({handleSacarCarrito, handleEliminarCarrito, handleAgregarCarrito}) => {

    const [cantProductosId, setCantProductosId]=useState(1)
    
  return (     
            <div className="d-flex flex-column justify-content-center">
                <div className="d-flex align-items-center">
                    <div className='border border-1 border-primary d-flex align-items-center justify-content-center rounded-5 px-1' style={ {width:9.5+'rem'}}>
                        {cantProductosId === 1 ? 
                            <button onClick={handleEliminarCarrito} className='btn border-0 px-4 btn-outline-primary rounded-start-5'><i className="fa-solid fa-trash"></i></button> :
                            <button onClick={handleSacarCarrito} className='btn border-0 px-4 btn-outline-primary rounded-start-5'>-</button>
                        }
                        <h6 className="px-3">{cantProductosId }</h6>
                        <button onClick={handleAgregarCarrito} className='btn border-0 px-4 btn-outline-primary rounded-end-5'>+</button>
                        
                    </div>
                    <Link className=' mx-2 text-decoration-none border border-1 border-primary rounded-5 px-3 btn btn-outline-primary ' to="/carrito">Ir al carrito...</Link>
                </div>
                
            </div>        
  )
}

export default ItemCount
