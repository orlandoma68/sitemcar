import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  return (
        <footer className="bg-dark text-light py-3">
            <div className='fs-1 text-center my-2 mt-0'>SISCAR</div>
            <hr />
            <div className="container">
                <div className="row g-4">

                    <div className="col-lg-4 col-md-6">
                        <h5 className="mb-4">About Us</h5>
                        <p className="mb-4">Somos un sitio dedicado a ofrecerte los mejores productos con envíos a todo el interior del país..</p>
                        <div className="social-links">
                            <Link to="#" className="social-icon bg-primary text-decoration-none"><i className="mx-3 fab fa-facebook-f"></i></Link>
                            <Link to="#" className="social-icon bg-info text-decoration-none"><i className="mx-3 fab fa-twitter"></i></Link>
                            <Link to="#" className="social-icon bg-danger text-decoration-none"><i className="mx-3 fab fa-instagram"></i></Link>
                            <Link to="#" className="social-icon bg-primary text-decoration-none"><i className="mx-3 fab fa-linkedin-in"></i></Link>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6">
                        <h5 className="mb-4">Enlaces Rapidos</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link to="#" className="footer-link text-decoration-none">Home</Link></li>
                            <li className="mb-2"><Link to="#" className="footer-link text-decoration-none">About</Link></li>
                            <li className="mb-2"><Link to="#" className="footer-link text-decoration-none">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-6">
                        <h5 className="mb-4">Services</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link to="#" className="footer-link text-decoration-none">Web Design</Link></li>
                            <li className="mb-2"><Link to="#" className="footer-link text-decoration-none">Development</Link></li>
                            <li className="mb-2"><Link to="#" className="footer-link text-decoration-none">Marketing</Link></li>
                            <li className="mb-2"><Link to="#" className="footer-link text-decoration-none">Consulting</Link></li>
                            <li className="mb-2"><Link to="#" className="footer-link text-decoration-none">Analytics</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <h5 className="mb-4">Contact Info</h5>
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <i className="fas fa-map-marker-alt me-2"></i>
                                Ciudad de Buenos - Argentina
                            </li>
                            <li className="mb-3">
                                <i className="fas fa-phone me-2"></i>
                                <Link to ="tel:+1234567890" className="footer-link text-decoration-none">+1 (234) 567-890</Link>
                            </li>
                            <li className="mb-3">
                                <i className="fas fa-envelope me-2"></i>
                                <Link to="mailto:contact@example.com" className="footer-link text-decoration-none">siscar@gmail.com</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col-12">
                        <hr className="mb-2" />
                        <div className="text-center">
                            <p className="mb-0">&copy; 2025 Siscar-OMP. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer
