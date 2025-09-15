import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Item from './Item'
import {pedirProductosNombre} from "../js/pedirProductos"

const ProductoSearch = () => {

  const [productos, setProductos] = useState([])

  const termino = useParams().termino

  useEffect(()=>{
    pedirProductosNombre(termino)
    .then((res)=>{
        setProductos(res)
    })   
    
},[termino])

  return (
    <div className='my-5 row gy-5 row-cols-1 row-cols-sm-2 row-cols-md-3 d-flex justify-content-center align-items-center'>
        {   productos.length >0 && 
            productos.map((producto) =>{
                return(
                    <Item key={producto.id} producto = {producto}/>
                )
            })
        }
    </div>
  )
}

export default ProductoSearch
