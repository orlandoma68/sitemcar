import React, { useEffect, useState } from 'react'
import {pedirProductosCategoria} from "../js/pedirProductos"
import { useParams } from 'react-router-dom'
import Spinner from './Spinner'
import {pedirProductos} from "../js/pedirProductos"
import Pagination from './Pagination'

const Listproducts = () => {

    const [isLoading, setIsLoading] = useState(true);

    const [error, setError] = useState(null)

    const [productos, setProductos] = useState([])

    const [tituloProducto, setTituloProducto] = useState("")

    const categoria = useParams().categoria;

    useEffect(()=>{
        
      const obtenerProductos = async ()=>{
        try {
            const datos = await pedirProductos()          
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
    <div>    
        {productos && 
          <div className='my-5'>
              <h1 className='fs-3 w-100 text-dark py-2 text-center'>{tituloProducto}</h1>
              <hr />
              <Pagination productos = {productos} />
          </div>
        }
    </div>    
  )
}

export default Listproducts
