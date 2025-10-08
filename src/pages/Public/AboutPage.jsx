import React from 'react'
import about from "../../imagen/about.png"

const AboutPage = () => {
  return (
    <div className=''>
      <div className='my-5 d-flex justify-content-center align-items-center' >
        <div className='w-25 bg-success'>
          <img src={about} alt="img-about" className="img-fluid" style={{objectFit:'cover'}  }/>
        </div>
        <div className='w-50 text-success'>
          <p className='mx-3 py-2 text-justify'>Somos un sitio dedicado a ofrecerte los mejores productos con envíos a todo el interior del país..</p>
        </div>   
      </div>
    </div>
  )
}

export default AboutPage