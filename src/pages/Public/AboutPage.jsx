import React from 'react'
import about from "../../imagen/about.png"

const AboutPage = () => {
  return (
    <div className='container d-flex justify-content-center align-items-center'>
      <div className='my-5 d-flex w-50' >
        <img src={about} alt="img-about" className="img-fluid w-50" style={{objectFit:'cover'}  }/>
        <div className='w-100 d-flex align-items-center bg-success text-white'>
          <p className='fs-6 mx-5 text-justify'>Somos un sitio dedicado a ofrecerte los mejores productos con envíos a todo el interior del país..</p>
        </div>
        
      </div>
      
    </div>
  )
}

export default AboutPage