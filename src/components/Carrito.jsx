import React, { useContext } from 'react'

import { CarritoContext } from '../context/CarritoContext'
import { Link } from 'react-router-dom'

const Carrito = () => {
  
  const {carrito, totalPagar, vaciarCarrito, cantidadProductosCarrito} = useContext(CarritoContext)

  return (

    <div className='container'>

        <div className='row'>

            { carrito.length > 0 ? 

              <div className='col-md-10'>
                  <h5>Carrito</h5>
                  <div className="container" >
                          {
                            carrito.map((prod)=> 
                            <div className="d-flex align-items-center" key={prod.id}>                             
                                <div className='bg-light d-flex img-fluid justify-content-center align-items-center p-1' style={ {height: 120 +'px'}  }>
                                  <img src={prod.img} alt={prod.nombre} className="" style={{width: 130 +'px', objectFit:'cover'}  }/>
                                </div>
                                <div className='d-flex flex-column'>
                                    <div className='d-flex'>
                                      <div className=''>
                                        <h1 className='mx-2 my-1 fs-6'>{prod.nombre}</h1> 
                                        <p className='mx-2 my-0 fs-6'>{prod.descripcion}</p> 
                                      </div>
                                      <div className=''>
                                        <p className='mx-2 my-1'><sup>US$ </sup><span className='fs-5'>{prod.precio}</span></p> 
                                      </div>                                
                                    </div>
                                    <div>
                                      <p className='mx-2 my-1'>{prod.cantidad}</p> 
                                      <p className='mx-2 my-1'>{(prod.precio * prod.cantidad).toFixed(2)}</p> 
                                      <hr className="border border-primary"/>
                                    </div>
                                </div>

                            </div> )                            
                          }
                          
                  </div> 
                  <button className='btn btn-outline-primary' onClick={vaciarCarrito}>Vaciar Carrito</button>
              </div> : 
                  <div className='bg-white p-5 d-flex flex-column justify-content-center align-items-center'>
                      <h4>El carrito esta vacio :) </h4>
                      <div className='m-5'>
                        <Link className='btn btn-outline-primary mx-2' to="/login"><span >Inicia en tu Cuenta</span></Link>
                        <Link className='btn btn-outline-primary mx-2' to="/registrar"><span >Registrate</span></Link>
                      </div>
                  </div>                 
            } 
             {(carrito.length > 0) &&
                  <div className='col-md-2'>
                      <h5 className='my-2'>SubTotal ({cantidadProductosCarrito()} Productos) : US$ { totalPagar() }</h5>
                      <Link className='btn btn-outline-primary my-2' to="/login"><span >Proceder a Pagar</span></Link>
                  </div>
              }
                
    </div>


</div>

  )
}

export default Carrito
