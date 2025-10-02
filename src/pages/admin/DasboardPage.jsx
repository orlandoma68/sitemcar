import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

const DasboardPage = () => {
 
  const {user, logout} = useContext(AuthContext)

  const handleLogout = async ()=>{
    await logout()
  }

  return (
    <div className ="my-3">
      <h1 className='fs-4'>Bienvenido :{user && user.displayName || user.email}</h1>
      <button className='btn btn-outline-primary' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default DasboardPage;
