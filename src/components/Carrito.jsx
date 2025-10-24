
import { useContext } from "react"
import carimg from "../imagen/carrito.png"

import { Link } from 'react-router-dom'
import { CarritoContext } from "../context/CarritoContext"

const Carrito = ( ) => {

  const {carrito, vaciarCarrito, cantidadProductosCarrito, totalPagar, eliminarProductosCarrito, sacarProductosCarrito, agregarProductosCarrito} = useContext(CarritoContext)

  return (
        <div className='p-4' style={{backgroundColor:"#e3f2fd"}}>
            <div className='row justify-content-center'>
                { carrito.length > 0 ? 
                  <div className='col-md-9 bg-white p-3'>
                      <h5>Carrito</h5>
                      <div>
                              <h6 className='d-flex justify-content-end'>Precio</h6>
                              <hr />
                              {                                
                                carrito.map((prod)=> 
                                <div className="d-flex align-items-center border-bottom py-3" key={prod.id}>                             
                                    <div className='d-flex img-fluid justify-content-center align-items-center p-1 mx-3' style={{width: 180 +'px', objectFit:'cover', height:"auto"}}>
                                      <img className="img-fluid w-100" style={{height: 180 +'px', objectFit:'cover'}  } src={prod.imagen} alt={prod.nombre} />
                                    </div>
                                    <div className='d-flex flex-column w-100 text-lg-start'>
                                          <div className='d-flex'>
                                            <div className='d-flex flex-column w-100'>
                                              <h1 className='mx-2 my-1 fs-6 text-lg-start'>{prod.nombre}</h1> 
                                              <p className='mx-2 my-0 fs-6 text-lg-start w-100'>{prod.descripcion}</p> 
                                            </div>
                                            <div className='d-flex justify-content-end w-100'>
                                              <p className='mx-2 my-1'><sup>US$ </sup><span className='fs-6 text-lg-start'>{prod.precio}</span></p> 
                                            </div>                                
                                          </div>
                                          <p className='mx-2 my-1'>Subtotal:{(prod.precio * prod.cantidad).toFixed(2)}</p> 
                                        <div className='d-flex flex-column'>
                                          <div className='mx-2 my-1 border border-1 border-primary d-flex align-items-center justify-content-center rounded-5 px-1' style={ {width: 9.5 +'rem'}}>
                                              {prod.cantidad === 1 ? 
                                                  <button onClick={()=>{eliminarProductosCarrito(prod)}} className='btn border-0 px-4 btn-outline-primary rounded-start-5'><i className="fa-solid fa-trash"></i></button> :
                                                  <button onClick={()=>{sacarProductosCarrito(prod)}} className='btn border-0 px-4 btn-outline-primary rounded-start-5'>-</button>
                                              }
                                              <h6 className="px-3">{ prod.cantidad }</h6>
                                              <button onClick={()=>agregarProductosCarrito(prod)} className='btn border-0 px-4 btn-outline-primary rounded-end-5'>+</button>
                                          </div>                                          
                                        </div>
                                    </div>
                                </div> )                            
                              }
                      </div> 
                      <button className='btn btn-outline-primary m-3' onClick={vaciarCarrito}>Vaciar Carrito</button>
                  </div> : 
                      <div className='bg-white p-5 d-flex flex-column justify-content-center align-items-center w-100'>
                          <h4>El carrito esta vacio :) </h4>
                          <img className="img-fluid mt-3" style={{height: 150 +'px', objectFit:'cover'}  } src={carimg} alt={'carrito'} />
                          <div className="d-flex justify-content-center">
                            <Link className='btn btn-primary text-white btn-lg w-100 px-5 fs-6' aria-label="elegir producto" to="/"><span >Elegir productos</span></Link>
                          </div>
                          <div className='m-3 d-flex align-items-center justify-content-center' style={{width: 350 +'px'}} >
                            <Link className='btn btn-outline-primary mx-2 my-2' to="../../auth/login"><span >Inicia en tu Cuenta</span></Link>
                            <Link className='btn btn-outline-primary mx-2 my-2' to="../../auth/register"><span >Registrate</span></Link>
                          </div>
                      </div>                 
                } 
                <div className='col-md-1 gx-4 w-auto'style={{backgroundColor:"#e3f2fd"}} >
                </div>

                { (carrito.length > 0) &&
                
                  <div className='col-md-2 bg-white  d-flex align-items-center flex-column'>
                      <h5 className='my-2'>Total: ({cantidadProductosCarrito()} Productos) : US$ { totalPagar() }</h5>
                      <Link className='btn btn-outline-primary my-3' to="/checkout"><span >Proceder a Pagar</span></Link>
                  </div>
                }
            </div>
        </div>
  )
}

export default Carrito