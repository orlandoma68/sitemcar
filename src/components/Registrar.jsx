import React from 'react'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'

const Registrar = () => {
  const {register, handleSubmit}= useForm()

  const enviar =(data)=>{
    console.log(data, "enviando...")
  }

  return (
    <div className='container my-4'>
      <div className='row justify-content-center'>
        <div className='border col col-lg-4 col-md-6 col-12'>

        <form className='form' onSubmit={handleSubmit(enviar)}>
              <h1 className='titulo'>Crear una Cuenta</h1>
              <div className="form-group">
                <label className='mx-3' for="exampleInputEmail1">Email</label>
                <input type="email" className="form-control box" placeholder="Ingrese Email" {...register('email')}/>
              </div>
              <div className="form-group">
                <label className='mx-3' for="exampleInputEmail1">Nombre</label>
                <input type="text" className="form-control box" placeholder="Ingresa tu Nombre" {...register('nombre')}/>
              </div>

              <div className="form-group">
                <label className='mx-3' for="exampleInputPassword1">Contraseña</label>
                <input type="password" className="form-control box" id="exampleInputPassword1" placeholder="Password" {...register('password')}/>
              </div>
              <div className="form-group">
                <label className='mx-3' for="exampleInputPassword1">vuelva a ingresar tu contraseña</label>
                <input type="password" className="form-control box" id="exampleInputPassword1" placeholder="Password" {...register('nuevoPassword')}/>
              </div>

              <button type="submit" className="boton btn btn-outline-primary">Acceder</button>
              <p className="cuenta">¿Ya tienes una cuenta ?. <Link className="link-cuenta" to="../Login">Iniciar Session</Link></p>
        </form>              
      </div>
      </div>
    </div>
  )
}

export default Registrar
