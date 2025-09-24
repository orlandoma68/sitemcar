import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CarritoWidget from './CarritoWidget'
import  {useForm} from "react-hook-form"

const Navbar = () => {

  const navigate = useNavigate()
  
  const {register, handleSubmit} = useForm();

  const onSubmit = (data)=>{
    
    navigate (`/search/${data.termino}`)
  }

  return (
    <nav className="navbar navbar-expand-lg text-light" style={{backgroundColor: '#8ec3eb'}}>
        <Link className="navbar-brand mx-5 fs-2 text-white" to="/">SISCAR</Link>
        <div className='m-3 btn btn-outline-primary navbar-toggler' data-bs-toggle="collapse"><CarritoWidget/></div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{color:'blue'}}>
            <ul className="navbar-nav mr-auto mx-3">
                <li className="nav-item active"><Link className="nav-link text-white" to="/">Home <span className="sr-only">(current)</span></Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/contact">Contact</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/about">About</Link></li>
                <li className='nav-link dropdown '><Link className='navlink dropdown-toggle text-decoration-none text-white' data-bs-toggle="dropdown" to ="#">Categories</Link>
                  <ul className='dropdown-menu' aria-labelledby="navbarDropdown" >
                      <li className='dropdown-item'><Link className='navlink text-decoration-none' to ="product/Audio">Audio</Link></li>
                      <li className='dropdown-item'><Link className='navlink text-decoration-none' to="product/Pets">Pets</Link></li>
                      <li className='dropdown-item'><Link className='navlink text-decoration-none' to="product/Kitchen">Kitchen</Link></li>
                  </ul>
                </li>
            </ul>
            <form className='d-flex my-2 my-lg-0'onSubmit={handleSubmit(onSubmit)} >
                <input className='form-control mr-sm-2 mx-3' type="ingrese un producto a buscar" placeholder='Buscar producto' {...register('termino')}aria-label="Search"/>
                <button className='btn btn-outline-primary my-sm-0 mx-3 text-white' type='submit'>Search</button>
           </form>
            <div className="nav-item"><Link className="nav-link text-white m-4" to="/auth/login">Login</Link></div>
            <div className='m-3 btn btn-outline-primary'><CarritoWidget/></div>
        </div>        
    </nav>    
  )
}

export default Navbar
