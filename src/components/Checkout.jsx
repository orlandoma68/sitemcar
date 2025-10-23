import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { CarritoContext } from '../context/CarritoContext'
import { collection, addDoc } from 'firebase/firestore'
import {db} from "../js/config"

const Checkout = () => {

    const {register, handleSubmit, reset} = useForm()

    const [pedidos, setPedidos] = useState()

    const {carrito, totalPagar, vaciarCarrito} = useContext(CarritoContext)

    if(carrito.length === 0){        
        return (<h5 className='bg-light p-5 m-5 text-center'>No hay productos en carrito para pagar</h5>)
    }

    const comprar = (data)=>{

        const pedidosCliente = {
            productos:carrito,
            cliente : data,
            totalPagar:totalPagar()
        }

        const pedidosRef = collection(db, "pedidos")

        const agegrarDatos = async ()=>{
            const resPedidos = await addDoc(pedidosRef,pedidosCliente)
            setPedidos(resPedidos.id)
        }
        agegrarDatos()
    }

    if(pedidos){
        vaciarCarrito
        reset()        
        return(
            <div>
                <p className='bg-success text-white p-3 my-4 d-flex justify-content-center'>Su orden de compra numero se realizon con exito...</p>
                <p className='text-center'> su numero de pedido es: <span className='fs-6'>{pedidos}</span> </p>
            </div>            
            )
    }


  return (
    <div className='container m-5'>
        <div className='row justify-content-center'>
            <div className='border col-lg-4 col-md-6 col-12 py-4'>
            <h1 className='fs-3 text-center my-3'>Finalizar compra</h1>
                <form className='p-4'onSubmit={handleSubmit(comprar)} >
                    
                    <input className='w-100 py-1 my-2 px-2' type="text" placeholder='Nombre' {...register('nombre')}/>
                    <input className='w-100 py-1 my-2 px-2' type="email" placeholder='Email' {...register('email')}/>
                    <input className='w-100 py-1 my-2 px-2' type="phone" placeholder='Telefono' {...register('telefono')}/>
                    <button className='btn btn-outline-dark my-3 w-100' type='submit'>Comprar</button>
                </form>
            </div>
        </div>
    </div>

  )
}

export default Checkout
