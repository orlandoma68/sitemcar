import React from 'react'
import { useForm } from "react-hook-form"

const ContactPage = () => {
    const {register, handleSubmit}=useForm()
  
    const enviar = (data)=>{

        console.log("enviando....", data)

    }

  return (
    <div className='container my-5'>
      <div className='row justify-content-center'>
        <div className='border col-lg-4 col-md-6 col-12 p-4 rounded-2'>
          <form className='form' onSubmit={handleSubmit(enviar)} >
              <h1 className='fs-3 text-center'>Contact</h1>
              <input className='w-100 py-1 my-2 px-2' type="text" placeholder='Nombre'{...register('nombre')} />
              <input className='w-100 py-1 my-2 px-2' type="email" placeholder='Email' {...register('email')} />
              <input className='w-100 py-1 my-2 px-2' type="phone" placeholder='Telefono' {...register('telefono')} />
              <textarea name="textarea" id="textarea" className="w-100 py-1 my-2 px-2" cols="30" rows="5" placeholder="Escriba su mensaje.." />
              <p className='w-100 py-1 my-1 px-2 text-green'> Nos comunicaremos a la brevedad.</p>  
              <button className='btn btn-outline-primary w-100 px-3 my-3' type='submit'>Solicitar informacion</button>
          </form>
        </div>
      </div>
    </div>

  )
}

export default ContactPage
