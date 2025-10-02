import React, { useContext } from 'react'
import { Link } from 'react-router-dom'


const CarritoWidget = () => {

  return (
    <div>
      <Link className='text-decoration-none d-flex align-items-center' to="/carrito">
        <span className='text-white' > 
          <i className="fa-solid fa-cart-shopping"></i><sup className='rounded-5 mx-1'>{0}</sup>
           Carrito    
        </span>        
      </Link>
    </div>
  )
}

export default CarritoWidget
