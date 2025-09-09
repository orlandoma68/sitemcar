import React from 'react'
import "../css/login.css"
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'

const Login = () => {
  const {register, handleSubmit} = useForm()
  const enviar = (data)=>{
    console.log(data, "enviando....")
  }
  return (
    <div className='container my-5'>
      <div className='row justify-content-center'>
        <div className='border col-lg-4 col-md-6 col-12'>
        <form className='form' onSubmit={handleSubmit(enviar)} action="">
            <h1 className='titulo'>Iniciar Session</h1>
            <input className='box' type="text" placeholder='email' {...register('email')}/>
            <input className= 'box' type="password" placeholder='Contraseña' {...register('password')}/>
            <button className='boton'>Acceder</button>
            <p className="cuenta">¿No tienes una cuenta ?. <Link className="link-cuenta" to="../registrar">Registrar</Link></p>
            <p className="olvido"><Link  className="link-olvido" to="../lostpass">¿has olvidado tu contraseña?. </Link></p>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Login   