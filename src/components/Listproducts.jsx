import React, { useEffect, useState } from 'react'
import Itemproduct from './Itemproduct'
import {pedirProductos} from "../js/pedirProductos"
import { useParams } from 'react-router-dom'
import Spinner from './Spinner'

const Listproducts = () => {

    const [isLoading, setIsLoading] = useState(true);

    const [error, setError] = useState(null)

    const [productos, setProductos] = useState([])

    const categoria = useParams().categoria;

    
    useEffect(()=>{
        
        const obtenerProductos = async ()=>{

        try {
            const respuesta = await fetch(`https://68d41b8f214be68f8c686c74.mockapi.io/api/v1/productos`)
            if(!respuesta.ok) throw new error ("Error en la busqueda")
            const datos = await respuesta.json()
            setProductos(datos)          
          } catch (error) {
            setError("hubo un problema al cargar los datos....")
            setProductos([])
          }finally{
            setIsLoading(false)
          }
        }

        obtenerProductos()

    },[])

    if(isLoading) return <Spinner/>        

    if(error) return <p>{error}</p>

  return (
    <div className='my-0'>    
        <div>
            {productos && 
                <div>
                    <div className='d-flex align-items-center justify-content-center'>
                      <h1 className='titulofs-2 bg-dark w-100 text-white py-2 text-center'>Productos</h1>
                    </div>
                    <Itemproduct productos = {productos}/> 
                </div>
            }
        </div>
    </div>    
  )
}

export default Listproducts
