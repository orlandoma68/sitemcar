import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

const DasboardPage = () => {
 
  const {user, logout} = useContext(AuthContext)
  
  const handleLogout = async ()=>{
    await logout()
  }

  return (
    <div className ="container-fluid w-100 my-4">
      <h1 className='fs-4'>! Hola ! :{user && user.displayName || user.email}</h1>
      <p>Aqui esta tu resumen de actividad de hoy</p>
      <div className='row w-100'>
        <div className='col-12 col-md-6 col-lg-4 col w-100'>

          <div className='d-flex justify-content-center'>
            <div className='card my-5 p-2 w-100 mx-1'>
              <h4>Contactos</h4>
              <p>156</p>
            </div>
          </div>          

          <div className='d-flex justify-content-center '>
            <div className='card my-5 p-2 w-100 mx-1'>
              <h4>Perfil del usuario</h4>
              <p>Nombre: {user && user.displayName || user.email} </p>
              <p>Email: {user && user.email} </p>
              <p>estado:</p>
            </div>
            <div className='card my-5 p-2 w-100 mx-1'>
              <h4>Accions Rapidas</h4>
              <button className='btn btn-primary m-3' >Editar Perfil</button>
              <button onClick={handleLogout} className='btn btn-danger m-3'>Cerrar Sesión</button>
            </div>            
          </div>

        </div>
      </div>
    </div>
  )
}

export default DasboardPage;

