import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm} from 'react-hook-form'
import { AuthContext } from '../../context/AuthContext'

const RegisterPage = () => {

  const navigate = useNavigate()

  const [error, setError] = useState(null)

  const {signUp} = useContext(AuthContext)

  const {register, handleSubmit}= useForm()

  const enviar =async(data)=>{
    try {
      const response = await signUp(data.email, data.password) 
      return navigate('/auth/login')
    } catch (err) {
          if(err.code == "auth/weak-password" ){
            setError("Passwor: 6 caracteres minimo")
          }
          if(err.code == "auth/email-already-in-use"){
            setError("Email en uso o ya esta registrado")
          }
    }    
  }

  return (
    <div className='container my-5'>
      <div className='row justify-content-center'>
        <div className='border col col-lg-4 col-md-6 col-12'>
          {error && 
                <p className=' my-3 text-center d-flex flex-column justify-content-center p-1 text-primary w-100' style={{backgroundColor:"#e3f2fd"}}> 
                    <b className='btn mx-1 w-5 d-flex'><span className='text-primary'>! {error}</span></b>
                </p>
            }
            <form className='p-4' onSubmit={handleSubmit(enviar)}>
              <h1 className='fs-3 text-center my-3'>Crear una Cuenta</h1>

              <div className="form-group my-1">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input type="email" className="w-100 py-1 my-2 px-2" placeholder="Email" {...register('email')}/>
              </div>

              <div className="form-group my-1">
                <label  htmlFor="exampleInputPassword1">Contraseña</label>
                <input type="password" className="w-100 py-1 my-2 px-2"  placeholder="Password" {...register('password')}/>
              </div>

              <button type="submit" className=" w-100 btn btn-outline-primary my-3">Registrarse</button>
              <p className="cuenta">¿Ya tienes una cuenta ?. <Link className="link-cuenta" to="/auth/Login">Iniciar Session</Link></p>
            </form>              
      </div>
      </div>
    </div>
  )
}

export default RegisterPage
