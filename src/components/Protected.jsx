import React from 'react'
import {Navigate, Outlet} from "react-router-dom"

const Protected = ({acceder, redirectPath = "/login"}) => {
    if (!acceder) {        
        return <Navigate to={redirectPath} replace/> 
    }
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default Protected
