import React from 'react'
import{useForm} from 'react-hook-form'

const Lostpass = () => {
    const {register, handleSubmit}=useForm()
    const enviar =(data)=>{
      console.log(data, "enviando...")
    }
  return (
    <div>
        <form className = "contenedor" onSubmit={handleSubmit(enviar)} >
            <h1 className='titulo'>Restablecer Contraseña</h1>
            <p className='txt-msje'>Por favor, introduce tu nombre de usuario o correo electrónico. Recibirás un enlace para crear una contraseña nueva por correo electrónico.</p>
            <div className='icono'>
              <i className="fa-regular fa-envelope icon"></i>
              <input type="email" className="box" placeholder="Ingrese email" {...register('email')}/>
            </div>
            <button type="submit" className="boton">Restablecer Contraseña</button>
        </form>
    </div>
  )
}

export default Lostpass
