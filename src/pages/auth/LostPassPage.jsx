import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useForm } from 'react-hook-form'

const LostPassPage = () => {

    const [error, setError] = useState(null)

    const { resetPassword } = useContext(AuthContext)
    
    const {register, handleSubmit}=useForm()
  
    const enviar = async (data)=>{
      
      if(!data.email) return setError("Ingrese un email por favor..")
  
      try {
        await resetPassword(data.email)
        setError("Hemos enviado un correo a su direccion proporcionado..")
      } catch (error) {
        setError(error.message)
      }
  
    }

  return (
    <div className='container my-3'>
      <div className='row justify-content-center'>
        <div className='border col col-lg-4 col-md-6 col-12'>
          <form className='m-4 p-4' onSubmit={handleSubmit(enviar)} >
              {error && <p className='my-3 text-center d-flex flex-column p-1 text-primary w-100' style={{backgroundColor:"#e3f2fd"}}> 
                      <b className='btn mx-1'>
                        <span className='text-primary'>! {error}</span>
                      </b>
                  </p>}
       
              <h1 className='fs-3 my-3 text-center'>Restablecer Contraseña</h1>
              <p className='text-left'>Por favor, introduce tu nombre de usuario o correo electrónico. Recibirás un enlace para crear una contraseña nueva por correo electrónico.</p>
              <div>
                <i className="fa-regular fa-envelope icon"></i>
                <input type="email" className="w-100 py-1 my-2 px-2" placeholder="Ingrese email" {...register('email')}/>
              </div>
              <button type="submit" className="btn btn-outline-primary w-100">Restablecer Contraseña</button>
          </form>
        </div>
    </div>
  </div>
  )
}

export default LostPassPage