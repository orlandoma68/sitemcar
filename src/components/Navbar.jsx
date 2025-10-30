import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CarritoWidget from './CarritoWidget'
import Modalinicio from './Modalinicio'
import { CarritoContext } from '../context/CarritoContext'
import carritoimg from "../imagen/siscarblue.png"
import { Search } from 'lucide-react';

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
  )
}

export default Navbar