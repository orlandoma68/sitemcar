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
    <div>
      <header>
        <nav className='d-flex justify-content-center align-items-center py-2 shadow'>
            { navegacion.map((item)=>(
                <NavLink key={item.name} to={item.href} className="d-flex text-white mx-2">
                    <item.icon className='mx-2'/>{item.name}
                </NavLink>
            ))}         
            <div></div>
            <button onClick={logout} className='btn btn-outline-danger text-white border-0 mx-5'><LogOut/>Cerrar Sesion</button>
        </nav>              
      </header>
    </div>
  )
}

export default NavarAdmin
