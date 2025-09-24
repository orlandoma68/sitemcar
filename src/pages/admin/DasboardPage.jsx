import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const DasboardPage = () => {

  const {user, logout} = useContext(AuthContext)

  const handleLogout = async ()=>{
    await logout()
  }

  return (
    <div>
      <h1>Bienvenido :{user && user.email}</h1>
      <button className='btn btn-outline-primary' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default DasboardPage
