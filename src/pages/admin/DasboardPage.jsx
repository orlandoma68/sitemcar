import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

const DasboardPage = () => {
 
  const {user, logout} = useContext(AuthContext)
  
  const handleLogout = async ()=>{
    await logout()
  }

  return (
    <div className ="my-3 p-1">
      <h1 className='fs-4'>! Hola ! :{user && user.displayName || user.email}</h1>
      <p>Aqui esta tu resumen de actividad de hoy</p>
      <div className='d-flex flex-column justify-content-center p-3'>
        <div className='d-flex flex-column justify-content-center w-100 shadow p-3'>
          <h4>Contactos</h4>
          <p>156</p>
        </div>
        <div className='d-flex justify-content-center w-100'>
            <div className='card shadow my-5 w-100 p-5'>
              <h4>Perfil del usuario</h4>
              <p>Nombre: {user && user.displayName || user.email} </p>
              <p>Email: {user && user.email} </p>
              <p>estado:</p>
            </div>
            <div className='card shadow my-5 w-100 p-5'>
              <h4>Accions Rapidas</h4>
              <button className='btn btn-primary m-3' >Editar Perfil</button>
              <button onClick={handleLogout} className='btn btn-danger m-3'>Cerrar Sesión</button>
            </div>
        </div>
      </div>
      <button className='btn btn-outline-primary' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default DasboardPage;

