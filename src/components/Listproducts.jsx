import React, { useEffect, useState } from 'react'
import Itemproduct from './Itemproduct'
import {pedirProductos} from "../js/pedirProductos"
import { useParams } from 'react-router-dom'
import Spinner from './Spinner'

const Listproducts = () => {

    const [isLoading, setIsLoading] = useState(true);

    const [productos, setProductos] = useState([])

    const categoria = useParams().categoria;

    useEffect(()=>{
        pedirProductos()
        .then((res)=>{
            if(categoria){
                const itemCategoria = res.filter((itemCategoria) => itemCategoria.categoria === categoria);
                setProductos(itemCategoria)
            }else{
                setProductos(res)
            }
            setIsLoading(false)
        })   
        
    },[categoria,isLoading])

  return (
    <div >
        {isLoading ? 
            <Spinner/>
            :
            <div>
                <h1 className='titulo my-5'>Productos</h1>
                <Itemproduct productos = {productos}/>
            </div>
        }
    </div>    
  )
}

export default Listproducts
