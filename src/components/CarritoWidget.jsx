import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

const CarritoWidget = ({cantidadProductosCarrito}) => {
  
  return (
    <div>
      <Link className='text-decoration-none d-flex align-items-center' to="/carrito">
        <span className='text-white' > 
          <i className="fa-solid fa-cart-shopping"></i><strong className='w-100 mx-1'><sup className='rounded-circle bg-danger text-white p-1'>{ cantidadProductosCarrito() }</sup></strong>
           Carrito    
        </span>        
      </Link>
    </div>
  )
}

export default CarritoWidget
