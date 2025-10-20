import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { CarritoContext } from '../context/CarritoContext'

const Checkout = () => {

    const {register, handleSubmit} = useForm()

    const [pedidos, setPedidos] = useState()

    const {carrito, totalPagar, vaciarCarrito} = useContext(CarritoContext)

    const comprar = (data)=>{

        const pedidosCliente = {
            productos:carrito,
            cliente : data,
            totalPagar:totalPagar()
        }
        setPedidos(pedidosCliente)    
    }

    if(pedidos){
        vaciarCarrito
        return <p className='bg-success text-white p-3 my-4 d-flex justify-content-center'>Su orden de compra se realizon con exito...</p>
    }

    console.log(pedidos)

  return (
    <div className='container m-5'>
        <div className='row justify-content-center'>
            <div className='border col-lg-4 col-md-6 col-12'>
                <form className='p-4'onSubmit={handleSubmit(comprar)} >
                    <h1 className='fs-4 text-center'>Finalizar compra</h1>
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
