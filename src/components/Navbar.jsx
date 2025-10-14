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
    <>
      <header>
        <div className='contenedor'>
          <nav>
              <div>
                <Link className='navitem logo' to="/">SISCAR</Link>
              </div>
              <ul className={isOpenMenu ? 'navlink activate' : 'navlink'}>
                  <li onClick={()=>setIsOpenMenu(false)}><Link className='navitem text-white' to="/">Home <span className="sr-only">(current)</span></Link></li>
                  <li onClick={()=>setIsOpenMenu(false)}><Link className='navitem text-white' to="/contact">Contact</Link></li>
                  <li onClick={()=>setIsOpenMenu(false)}><Link className='navitem text-white' to="/about">About</Link></li>       
                  <li ><Modalinicio/></li>
                  <form onSubmit={handleSearchSubmit} className='d-flex m-4'  >
                    <input  className='form-control mr-sm-2' type="ingrese un producto a buscar" placeholder='Buscar producto' aria-label="Search" value={searchTermino} onChange={handleSearchChange}/>
                    <button className='btn btn-outline-primary mx-1' type='submit'>Search</button>
                  </form>
                  <div >
                    <Link onClick={()=>setIsOpenMenu(false)} className='navitem text-white mx-3' to="/auth/login">Login</Link>
                  </div>
              </ul>
              <div >
                  <CarritoWidget cantidad = {cantidad}/>
              </div>          
              <div className='icon' onClick={activarMenu}>
                <i className="fa-solid fa-bars mx-1"></i>
              </div>
          </nav>    
        </div>
      </header>
    </>
  )
}

export default Navbar


/*

      <nav className="navbar navbar-expand-lg text-light" style={{backgroundColor: '#8ec3eb'}}>
          <Link className="navbar-brand mx-5 fs-3 text-white" to="/">SISCAR</Link>
          {/*<div className='m-3 fs-6 text-lg-start border-0 navbar-toggler' data-bs-toggle="collapse"><CarritoWidget cantidad = {cantidad}/></div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          

          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{color:'blue'}}>
              <ul className="navbar-nav mr-auto mx-3">
                  <li className="nav-item active"><Link className="nav-link text-white" to="/">Home <span className="sr-only">(current)</span></Link></li>
                  <li className="nav-item"><Link className="nav-link text-white" to="/contact">Contact</Link></li>
                  <li className="nav-item"><Link className="nav-link text-white" to="/about">About</Link></li>       
                  <li className="nav-item"><Modalinicio/></li>       
              </ul>
              <form onSubmit={handleSearchSubmit} className='d-flex my-2 my-lg-0' >
                  <input className='form-control mr-sm-2 mx-1' type="ingrese un producto a buscar" placeholder='Buscar producto' aria-label="Search" value={searchTermino} onChange={handleSearchChange}/>
                  <button className='btn btn-outline-primary my-sm-0 mx-1 text-white' type='submit'>Search</button>
            </form>
              <div className="nav-item"><Link className="nav-link text-white m-4" to="/auth/login">Login</Link></div>
              <div className='m-3 nav-item'><CarritoWidget cantidad = {cantidad}/></div>
          </div>        
          <div className='icon'>
          <i className="fa-solid fa-bars mx-1"></i>
          </div>

          <section>
            <div className='container'>
              <div className='content'>
                <h2>responsive navbar</h2>
              </div>
            </div>
          </section>

      </nav>    

        */