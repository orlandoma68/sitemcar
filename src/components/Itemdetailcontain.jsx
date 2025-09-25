import React, { useContext, useEffect, useState } from 'react'
import Itemdetail from './Itemdetail'
import { useParams } from 'react-router-dom'
import Spinner from './Spinner'
import { CarritoContext } from '../context/CarritoContext'

const Itemdetailcontain = () => {

    const {carrito, estaProductoCarrito, setEstaProductoCarrito}= useContext(CarritoContext)

    const [item, setItem] = useState(null)

    const [isLoading, setIsLoading] = useState(true)

    const [error, setError] = useState(null)
    
    const id = useParams().id

    useEffect(()=>{

      const obtenerProductosId = async ()=>{
        
        try {
            const respuesta = await fetch(`https://68d41b8f214be68f8c686c74.mockapi.io/api/v1/productos/${id}`)
            if(!respuesta.ok) throw new error ("Error al obtener datos ")
            const data = await respuesta.json()            
            setItem(data)
        } catch (error) {      
            setError("Hubo un error al obtener los datos..")
            setItem(null)
        }finally{
            setIsLoading(false)
        }  
      }

      obtenerProductosId()
        
  }, [id])

    useEffect(()=>{
      const estaEnCarrito = carrito.find((prod)=>prod.id === (id))
      if (estaEnCarrito){
        console.log(estaEnCarrito, "estaencarrito")
        setEstaProductoCarrito(true)
      }else{
        setEstaProductoCarrito(false)
      }
    },[id])
  
  if(isLoading) return <Spinner />

  if (error) return <p>{error}</p>

  return (
    <div>
      <Itemdetail item = {item} />
    </div>
  )
}

export default Itemdetailcontain
