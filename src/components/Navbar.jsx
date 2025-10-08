import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CarritoWidget from './CarritoWidget'
import Modalinicio from './Modalinicio'

const Navbar = ({cantidad}) => {
  
  const navigate = useNavigate()
  
  const [searchTermino, setSearchTermino] = useState()  
  
  const handleSearchChange = (e) => {
    setSearchTermino(e.target.value);
  };

  const handleSearchSubmit = (e)=>{
    e.preventDefault()
    if(!e.target.value){
      return navigate (`/search/${searchTermino}`)
    } 
    return <p>ingrese un nombre del producto</p>  
  } 
  
  return (
    <nav className="navbar navbar-expand-lg text-light" style={{backgroundColor: '#8ec3eb'}}>
        <Link className="navbar-brand mx-5 fs-3 text-white" to="/">SISCAR</Link>
        <div className='m-3 btn btn-outline-primary navbar-toggler' data-bs-toggle="collapse"><CarritoWidget cantidad = {cantidad}/></div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{color:'blue'}}>
            <ul className="navbar-nav mr-auto mx-3">
                <li className="nav-item active"><Link className="nav-link text-white" to="/">Home <span className="sr-only">(current)</span></Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/contact">Contact</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/about">About</Link></li>       
            </ul>
            <div className="nav-item"><Modalinicio/></div>                      
            <form onSubmit={handleSearchSubmit} className='d-flex my-2 my-lg-0' >
                <input className='form-control mr-sm-2 mx-3' type="ingrese un producto a buscar" placeholder='Buscar producto' aria-label="Search" value={searchTermino} onChange={handleSearchChange}/>
                <button className='btn btn-outline-primary my-sm-0 mx-3 text-white' type='submit'>Search</button>
           </form>
            <div className="nav-item"><Link className="nav-link text-white m-4" to="/auth/login">Login</Link></div>
            <div className='m-3 btn btn-outline-primary'><CarritoWidget cantidad = {cantidad}/></div>
        </div>        
    </nav>    
  )
}

export default Navbar
