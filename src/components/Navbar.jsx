import React, { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import CarritoWidget from './CarritoWidget'
import Modalinicio from './Modalinicio'
import { CarritoContext } from '../context/CarritoContext'
import carritoimg from "../imagen/siscarblue.png"
import { Home, Landmark, MenuIcon, Search, User, UserLockIcon } from 'lucide-react';

const navegacion = [
  {name:"Home", href:"/", icon: Home},
  {name:"Contacto", href:"/contact", icon: User},
  {name:"Nosotros", href:"/about", icon: Landmark}
]

const Navbar = () => {

  const {cantidadProductosCarrito} = useContext(CarritoContext)

  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const navigate = useNavigate()
  
  const [searchTermino, setSearchTermino] = useState()  

  const activarMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  const handleSearchChange = (e) => {
    setSearchTermino(e.target.value);
  };

  const handleSearchSubmit = (e)=>{
    e.preventDefault()
    if(!e.target.value){
      setIsOpenMenu(!isOpenMenu)
      return navigate (`/search/${searchTermino}`)
    } 
    return <p>ingrese un nombre del producto</p>  
  } 
  
  return (
      <header className='shadow'>
        <div className='contenedor'>
          <nav className='w-100 px-5'>
              <div className='' >
                <Link className='logo' to="/"><img className='img-fluid' style={{height: 80 +'px', objectFit:'cover'}  } src={carritoimg} alt="" /></Link>
              </div>
              <div className='navlink'>
                { navegacion.map((item)=>(
                  <NavLink key={item.name} to={item.href} className="d-flex text-white mx-2">
                      <item.icon className='mx-1'/>{item.name}
                  </NavLink>
                ))}  
              </div>      
              <div className='navlink text-white'>
                  <Modalinicio />
              </div>
              <form onSubmit={handleSearchSubmit} className='d-flex navlink'  >
                  <input  className='form-control mr-sm-2' type="ingrese un producto a buscar" placeholder='Buscar producto' aria-label="Search" value={searchTermino} onChange={handleSearchChange}/>
                  <button className='btn btn-outline-primary mx-1' type='submit'><Search color='white' /></button>
              </form>
              <div className='d-flex navlink' >
                  <Link className='text-white' to="/auth/login">Administracion</Link>
              </div>
              <div >
                  <CarritoWidget cantidadProductosCarrito = {cantidadProductosCarrito}/>
              </div>          
              <div className='icon'>
                <button className='btn btn-outline-dark' data-bs-toggle = 'modal' data-bs-target = '#modalMenu'><MenuIcon/>Menu</button>
              </div>
          </nav>

          <div id='modalMenu' className='modal fade' aria-hidden='true' >
            <div className = 'modal-dialog'>            
                <div className = 'modal-content' style={{backgroundColor:"#e3f2fd"}}>
                    <div className = 'modal-header'>                    
                        <label className= 'h5'>Siscar</label>
                        <button type='button' className='btn-close ' data-bs-dismiss = "modal" aria-label="close"></button>
                    </div>      
                    <div className='modal-body d-flex justify-content-center flex-column' data-bs-dismiss = "modal">
                        { navegacion.map((item)=>(
                          <NavLink key={item.name} to={item.href} className="d-flex mx-2 my-1">
                              <item.icon className='mx-1'/>{item.name}
                          </NavLink>
                        ))}  
                    </div>

                    <div className='text-primary mx-1 my-2'>
                        <Modalinicio/>                    
                    </div>          
                    <div className='d-flex mx-4 mb-3' >
                      <Link className='text-primary mx-1' to="/auth/login"><UserLockIcon/> Administracion</Link>
                    </div>

                    <div className='modal-footer bg-dark d-flex justify-content-center'>
                        <p className="mb-0 text-center text-white">&copy; 2025 Siscar-OMP. All rights reserved.</p>
                    </div>
                </div>      
            </div>  
        </div>    
        </div>
      </header>
  )
}


/*

      <header className='shadow'>
        <div className='contenedor'>
          <nav className='w-100 px-5'>
              <div className='' >
                <Link className='logo' to="/"><img className='img-fluid' style={{height: 80 +'px', objectFit:'cover'}  } src={carritoimg} alt="" /></Link>
              </div>
              <div>
              <ul className={isOpenMenu ?'navlink activate' : 'navlink'}>
                  <li onClick={()=>setIsOpenMenu(false)}><Link className='text-white' to="/">Home <span className="sr-only">(current)</span></Link></li>
                  <li onClick={()=>setIsOpenMenu(false)}><Link className='text-white' to="/contact">Contact</Link></li>
                  <li onClick={()=>setIsOpenMenu(false)}><Link className='text-white' to="/about">About</Link></li>       
                  <li><Modalinicio activarMenu = {activarMenu} /></li>
                  <li>
                  <form onSubmit={handleSearchSubmit} className='d-flex'  >
                    <input  className='form-control mr-sm-2' type="ingrese un producto a buscar" placeholder='Buscar producto' aria-label="Search" value={searchTermino} onChange={handleSearchChange}/>
                    <button className='btn btn-outline-primary mx-1' type='submit'><Search color='white' /></button>
                  </form>
                  </li>
                  <li>
                  <div className='d-flex' >
                    <Link onClick={()=>setIsOpenMenu(false)} className='text-white' to="/auth/login">Administracion</Link>
                  </div>
                  </li>
              </ul>
              </div>
              <div onClick={()=>setIsOpenMenu(false)} >
                  <CarritoWidget cantidadProductosCarrito = {cantidadProductosCarrito}/>
              </div>          
              <div className='icon' onClick={activarMenu}>
                <i className="fa-solid fa-bars mx-1"></i>
              </div>
          </nav>    
        </div>
      </header>
*/

export default Navbar