import React from 'react'
import Item from './Item'

const Itemproduct = ({productos}) => {
  return (
    <div className='row gy-5 row-cols-1 row-cols-sm-2 row-cols-md-3 d-flex justify-content-center align-items-center my-4'>
        { productos.length >0 && 
            productos.map((producto) =>{
                return(<Item key={producto.id} producto = {producto}/>)
            })
        }
    </div>
  )
}

export default Itemproduct
