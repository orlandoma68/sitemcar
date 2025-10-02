import React, { useEffect, useState } from 'react'
import Itemproduct from './Itemproduct'
import {pedirProductosCategoria} from "../js/pedirProductos"
import { useParams } from 'react-router-dom'
import Spinner from './Spinner'

const Listproducts = () => {

    const [isLoading, setIsLoading] = useState(true);

    const [error, setError] = useState(null)

    const [productos, setProductos] = useState([])

    const [tituloProducto, setTituloProducto] = useState("")

    const categoria = useParams().categoria;

    useEffect(()=>{
        
        const obtenerProductos = async ()=>{

        try {
            const respuesta = await fetch(`https://68d41b8f214be68f8c686c74.mockapi.io/api/v1/productos/`)              
            if(!respuesta.ok) throw new error ("Error en la busqueda")
            const datos = await respuesta.json()
            pedirProductosCategoria(datos, categoria)
            .then((res)=>{
                if(categoria){
                    setProductos(res)
                    setTituloProducto(`Producto de Categoria: ${categoria}`)
                }else{
                    setProductos(datos)
                    setTituloProducto("Productos")
                }
            })   
                
          } catch (error) {
            setError("hubo un problema al cargar los datos....")
            setProductos([])
          }finally{
            setIsLoading(false)
          }
        }

        obtenerProductos()

    },[categoria])

    if(isLoading) return <Spinner/>        

    if(error) return <p>{error}</p>

  return (
    <div className='my-0'>    
        <div>
            {productos && 
                <div>
                    <div className='d-flex align-items-center justify-content-center'>
                      <h1 className='fs-4 bg-dark w-100 text-white py-2 text-center'>{tituloProducto}</h1>
                    </div>
                    <Itemproduct productos = {productos}/> 
                </div>
            }
        </div>
    </div>    
  )
}

export default Listproducts
