import React from 'react'
import banner1 from "../imagen/banner1.png"
import banner2 from "../imagen/banner2.png"
import { Link } from 'react-router-dom'

const Carrusel = () => {
  return (
        <div id="carouselExampleControls" className="carousel slide my-1 py-3 d-flex align-items-center justify-content-center bg-dark" data-bs-ride="carousel">
            <div className="carousel-inner bg-dark w-50" >
                <div className="carousel-item active"  data-bs-interval="3000">
                    <Link to="auth/register"> <img src={banner1} alt="img-banner" className="img-fluid" style={{objectFit:'cover'}  }/></Link>
                </div>
                <div className="carousel-item active"  data-bs-interval="3000">
                    <Link to="auth/register"> <img src={banner2} alt="img-banner" className="img-fluid" style={{objectFit:'cover'}  }/></Link>
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
  )
}

export default Carrusel

