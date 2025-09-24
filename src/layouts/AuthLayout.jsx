import React from 'react'
import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const AuthLayout = ({redirectPath = "/admin"}) => {

  const {user} = useContext(AuthContext)

  if(user){
    return <Navigate to ={redirectPath } replace></Navigate>
  }
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default AuthLayout
