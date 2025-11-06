import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import NavarAdmin from '../components/NavarAdmin'

const AdminLayout = ({redirectPath = '/auth/login'}) => {
    
    const {user} = useContext(AuthContext)
    
    if (!user){
        return <Navigate  to= {redirectPath} replace/>
    }

  return (
    <div className='w-100'>
      <NavarAdmin/>
      <Outlet/>
    </div>
  )
}

export default AdminLayout
