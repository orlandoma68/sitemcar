import React, { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'
import { Link } from 'react-router-dom'


const CarritoWidget = () => {

    const { cantidadProductosCarrito } = useContext(CarritoContext)

  return (
    <div>
      <Link className='text-decoration-none d-flex align-items-center' to="/carrito">
        <span className='text-dark' > 
          <i className="fa-solid fa-cart-shopping"></i><sup className='rounded-5 mx-1'>{cantidadProductosCarrito()}</sup>
           Carrito    
        </span>        
      </Link>
    </div>
  )
}

export default CarritoWidget
