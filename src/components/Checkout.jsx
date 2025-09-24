import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { CarritoContext } from '../context/CarritoContext'

const Checkout = () => {

    const {register, handleSubmit} = useForm()

    const [pedidos, setPedidos] = useState(false)

    const {carrito, totalPagar, vaciarCarrito} = useContext(CarritoContext)

    const comprar = (data)=>{

        const pedidosCliente = {
            productos:carrito,
            cliente : data,
            totalPagar:totalPagar()
        }
    }
        
  return (
    <div className='contenedor'>
        <form className='form'onSubmit={handleSubmit(comprar)} >
            <h1 className='titulo'>Finalizar compra</h1>
            <input className='box' type="text" placeholder='Nombre' {...register('nombre')}/>
            <input className='box' type="email" placeholder='Email' {...register('email')}/>
            <input className='box' type="phone" placeholder='Telefono' {...register('telefono')}/>
            <button className='boton btn btn-outline-dark' type='submit'>Comprar</button>
        </form>
    </div>

  )
}

export default Checkout
