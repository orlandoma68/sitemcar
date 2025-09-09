import React from 'react'
import { Link } from 'react-router-dom'
import CarritoWidget from './CarritoWidget'
import  {useForm} from "react-hook-form"

const Navbar = () => {
  const {register, handleSubmit} = useForm();
  const enviar = (data)=>{
    console.log("enviando....", data)
  }
  return (
    <nav className="navbar navbar-expand-lg text-dark" style={{backgroundColor: '#e3f2fd'}}>
        <Link className="navbar-brand text-primary mx-5 fs-2" to="/">SISCAR</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto mx-3">
                <li className="nav-item active"><Link className="nav-link text-dark" to="/">Home <span className="sr-only">(current)</span></Link></li>
                <li className="nav-item"><Link className="nav-link text-dark" to="/contact">Contact</Link></li>
                <li className="nav-item"><Link className="nav-link text-dark" to="/about">About</Link></li>
                <li className="nav-item"><Link className="nav-link text-dark" to="/products">Products</Link></li>
                <li className='nav-link dropdown '><Link className='navlink dropdown-toggle text-decoration-none text-dark' data-bs-toggle="dropdown" to ="#">Categories</Link>
                  <ul className='dropdown-menu' aria-labelledby="navbarDropdown" >
                      <li className='dropdown-item'><Link className='navlink text-decoration-none' to ="product/Audio">Audio</Link></li>
                      <li className='dropdown-item'><Link className='navlink text-decoration-none' to="product/Pets">Pets</Link></li>
                      <li className='dropdown-item'><Link className='navlink text-decoration-none' to="product/Kitchen">Kitchen</Link></li>
                  </ul>
                </li>
            </ul>
            <form className='d-flex my-2 my-lg-0'onSubmit={handleSubmit(enviar)} >
                <input className='form-control mr-sm-2 mx-3' type="search" placeholder='Search' {...register('Search')}aria-label="Search"/>
                <button className='btn btn-outline-primary my-2 my-sm-0 mx-3' type='submit'>Search </button>
            </form>
            <div className="nav-item"><Link className="nav-link text-dark m-4" to="/login">Login</Link></div>
            <div className='m-3 btn btn-outline-primary'><CarritoWidget/></div>
        </div>
    </nav>
    
  )
}

export default Navbar
