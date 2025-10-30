import React from 'react'
import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const AuthLayout = () => {

  const {user} = useContext(AuthContext)

  if(user){
    return <Navigate to ='/admin' replace></Navigate>
  }
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default AuthLayout
