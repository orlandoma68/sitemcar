import React from 'react'
import about from "../../imagen/about.png"

const AboutPage = () => {
  return (
    <div className='container d-flex justify-content-center align-items-center'>
      <div className='my-5 d-flex ' >
        <div className='w-75'>
          <img src={about} alt="img-about" className="img-fluid" style={{objectFit:'cover'}  }/>
        </div>
        <div className='d-flex align-items-center bg-success text-white'>
          <p className='fs-6 mx-2 py-2 text-justify'>Somos un sitio dedicado a ofrecerte los mejores productos con envíos a todo el interior del país..</p>
        </div>   
      </div>
    </div>
  )
}

export default AboutPage