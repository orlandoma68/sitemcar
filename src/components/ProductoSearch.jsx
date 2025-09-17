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
        {   productos.length >0 ?
            productos.map((producto) =>{
                return(
                    <Item key={producto.id} producto = {producto}/>
                )
            }):
            <p className='text-center p-3 text-primary w-50' style={{backgroundColor:"#e3f2fd"}}> <b className='rounded-circle btn btn-outline-primary mx-4'><span className='text-primary p-1'>!</span></b>No se han encontrado productos que coincidan con tu eleccion</p>
        }
    </div>
  )
}

export default ProductoSearch
