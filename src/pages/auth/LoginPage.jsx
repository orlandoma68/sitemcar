import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import "../../css/login.css"
import { AuthContext } from '../../context/AuthContext'

const LoginPage = () => {

  const {signIn, singInWihtGoogle}=useContext(AuthContext)

  const [error, setError] = useState(null)

  const {register, handleSubmit} = useForm()

  const enviar = async (data)=>{
    try {
      await signIn(data.email, data.password)    
    } catch (err) {
      if(err.code === "auth/invalid-credential" ){
        setError("Credenciales invalidos..")
      }
    }
  }

  const handleWithGoogle = async ()=>{
    try {
      await singInWihtGoogle()  
    } catch (error) {
      setError(error)
    }
    
  }
  
  return (
    <div className='container my-5'>
      <div className='row justify-content-center'>
      
        <div className='border col-lg-4 col-md-6 col-12'>
        {error && <p className=' my-3 text-center d-flex flex-coumn p-1 text-primary w-100' style={{backgroundColor:"#e3f2fd"}}> 
                      <b className='btn mx-1 w-5'>
                        <span className='text-primary'>! {error}</span>
                      </b>
                  </p>}
        <form className='form' onSubmit={handleSubmit(enviar)} action="">
            <h1 className='titulo'>Iniciar Session</h1>
            <input className='w-100 py-1 my-2 px-2' type="text" placeholder='Email' {...register('email')}/>
            <input className= 'w-100 py-1 my-2 px-2' type="password" placeholder='Contraseña' {...register('password')}/>
            <button className='btn btn-outline-primary w-100 px-3 my-2'>Acceder</button>
            <p className="cuenta">¿No tienes una cuenta ?. <Link className="link-cuenta" to="/auth/register">Registrar</Link></p>
            <p className="olvido"><Link  className="link-olvido" to="/auth/lostpass">¿has olvidado tu contraseña?. </Link></p>
            <button onClick={handleWithGoogle} className='btn btn-outline-dark w-100 px-3'>Login With Google</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage   