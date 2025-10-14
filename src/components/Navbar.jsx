import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CarritoWidget from './CarritoWidget'
import Modalinicio from './Modalinicio'

const Navbar = ({cantidad}) => {
  
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
      <header>
        <div className='contenedor'>
          <nav>
              <div>
                <Link className='logo' to="/">SISCAR</Link>
              </div>
              <div>
              <ul className={isOpenMenu ?'navlink activate' : 'navlink'}>
                  <li onClick={()=>setIsOpenMenu(false)}><Link className='text-white' to="/">Home <span className="sr-only">(current)</span></Link></li>
                  <li onClick={()=>setIsOpenMenu(false)}><Link className='text-white' to="/contact">Contact</Link></li>
                  <li onClick={()=>setIsOpenMenu(false)}><Link className='text-white' to="/about">About</Link></li>       
                  <li ><Modalinicio/></li>
                  <li>
                  <form onSubmit={handleSearchSubmit} className='d-flex'  >
                    <input  className='form-control mr-sm-2' type="ingrese un producto a buscar" placeholder='Buscar producto' aria-label="Search" value={searchTermino} onChange={handleSearchChange}/>
                    <button className='btn btn-outline-primary mx-1' type='submit'>Search</button>
                  </form>
                  </li>
                  <li>
                  <div className='d-flex' >
                    <Link onClick={()=>setIsOpenMenu(false)} className='text-white' to="/auth/login">Login</Link>
                  </div>
                  </li>
              </ul>
              </div>
              <div >
                  <CarritoWidget cantidad = {cantidad}/>
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