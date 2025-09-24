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
      await signUp(data.email,data.password)  
      navigate("/auth/login")
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
    <div className='container my-4'>
      <div className='row justify-content-center'>
        <div className='border col col-lg-4 col-md-6 col-12'>
        {error && <p className=' my-3 text-center d-flex flex-coumn p-1 text-primary w-100' style={{backgroundColor:"#e3f2fd"}}> 
                      <b className='btn mx-1 w-5'>
                        <span className='text-primary'>! {error}</span>
                      </b>
                  </p>}
        <form className='form' onSubmit={handleSubmit(enviar)}>
              <h1 className='titulo'>Crear una Cuenta</h1>
              <div className="form-group">
                <label className='mx-3' htmlFor="exampleInputEmail">Email</label>
                <input type="email" className="form-control box" placeholder="Ingrese Email" {...register('email')}/>
              </div>

              <div className="form-group">
                <label className='mx-3' htmlFor="exampleInputPassword">Contraseña</label>
                <input type="password" className="form-control box" id="exampleInputPassword" placeholder="Password" {...register('password')}/>
              </div>

              <button type="submit" className="boton btn btn-outline-primary">Acceder</button>
              <p className="cuenta">¿Ya tienes una cuenta ?. <Link className="link-cuenta" to="/auth/Login">Iniciar Session</Link></p>
        </form>              
      </div>
      </div>
    </div>
  )
}

export default RegisterPage
