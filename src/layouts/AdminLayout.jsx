import React from 'react'
import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const AdminLayout = ({redirectPath = "/auth/login"}) => {
  
  const { user }=useContext(AuthContext)

  if (!user) {        
    return <Navigate to={redirectPath} replace/> 
}

  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default AdminLayout
