import React, { useContext, useEffect, useState } from 'react'
import Itemdetail from './Itemdetail'
import { useParams } from 'react-router-dom'
import {pedirProductosId} from "../js/pedirProductos"
import { CarritoContext } from '../context/CarritoContext'

const Itemdetailcontain = () => {

    const [item, setItem] = useState(null)
    const {carrito,setEsta, esta}= useContext(CarritoContext)
    const id = useParams().id

    useEffect(()=>{
        pedirProductosId(Number(id))
        .then((res)=>{
            setItem(res)
        })
    }, [id])

    useEffect(()=>{
      const estaEnCar = carrito.find((prod)=>prod.id === Number(id))
      if (estaEnCar){
        setEsta(true)
      }else{
        setEsta(false)
      }
    },[esta])

  return (
    <div>
      <Itemdetail item = {item} />
    </div>
  )
}

export default Itemdetailcontain
