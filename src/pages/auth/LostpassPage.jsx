import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import{useForm} from 'react-hook-form'
import { AuthContext } from '../../context/AuthContext'

const LostpassPage = () => {

    const [error, setError] = useState(null)

    const { resetPassword } = useContext(AuthContext)
    
    const {register, handleSubmit}=useForm()

    const enviar = async (data)=>{
      
      if(!data.email) return setError("Ingrese un email por favor..")

      try {
        await resetPassword(data.email)
        setError("hemos enviado un correo a su direccion proporcionado..")
      } catch (error) {
        setError(error.message)
      }
    }

  return (
    <div>
        <form className = "contenedor" onSubmit={handleSubmit(enviar)} >
            {error && <p className=' my-3 text-center d-flex flex-coumn p-1 text-primary w-100' style={{backgroundColor:"#e3f2fd"}}> 
                      <b className='btn mx-1 w-5'>
                        <span className='text-primary'>! {error}</span>
                      </b>
                  </p>}
       
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

export default LostpassPage