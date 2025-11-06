import { LayoutDashboard, LogOut, MessageCircle, User } from 'lucide-react'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { auth } from '../js/config'
import { AuthContext } from '../context/AuthContext'

const navegacion = [
    {name:"Dasboard", href:"/admin", icon: LayoutDashboard},
    {name:"Profile", href:"/admin/profile", icon: User},
    {name:"Productos", href:"/admin/listar", icon: MessageCircle}
]

const NavarAdmin = () => {

    const {logout} = useContext(AuthContext)
        
  return (
    <div className='w-100 shadow '>
      <header className='d-flex justify-content-center w-100'>
        <nav className='d-flex justify-content-center align-items-center py-1 w-100'>
          <div className='d-flex justify-content-center w-100'>
            { navegacion.map((item)=>(
                <NavLink key={item.name} to={item.href} className="text-white mx-1">
                    <item.icon className='mx-1'/>{item.name}
                </NavLink>
            ))}
            </div>         
            <button onClick={logout} className='btn btn-outline-danger text-white border-0'><LogOut/>Cerrar Sesion</button>
        </nav>              
      </header>
    </div>
  )
}

export default NavarAdmin
