import React from 'react'
import  {useForm} from "react-hook-form"

const Contact = () => {

  const {register, handleSubmit} = useForm();

  const enviar = (data)=>{
    console.log("enviando....", data)
  }

  return (
    <div className='contenedor'>
        <form className='form'onSubmit={handleSubmit(enviar)} >
            <h1 className='titulo'>Contacto</h1>
            <input className='box' type="text" placeholder='Nombre' {...register('nombre')}/>
            <input className='box' type="email" placeholder='Email' {...register('email')}/>
            <input className='box' type="phone" placeholder='Telefono' {...register('telefono')}/>
            <button className='boton' type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default Contact