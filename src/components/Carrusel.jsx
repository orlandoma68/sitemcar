import React from 'react'
import banner1 from "../imagen/banner1.png"
import banner2 from "../imagen/banner2.png"
import { Link } from 'react-router-dom'

const Carrusel = () => {
    
  return (    
    <div className='container'>
        <div id="carouselExampleControls" className="row carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner col-12 col-md-6 col-lg-4" >
                <div className="carousel-item active w-100"  data-bs-interval="3000">
                    <Link to="auth/register"> <img src={banner1} alt="img-banner" className="img-fluid" /></Link>
                </div>
                <div className="carousel-item active w-100"  data-bs-interval="3000">
                    <Link to="auth/register"> <img src={banner2} alt="img-banner" className="img-fluid" /></Link>
                </div>
                <div className="carousel-item active w-100"  data-bs-interval="3000">
                    <Link to="auth/register"> <img src={banner1}  alt="img-banner" className="img-fluid"  /></Link>                                                        
                </div>                    
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </button>
            
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
            </button>            
        </div>
    </div>
  )
}

export default Carrusel

