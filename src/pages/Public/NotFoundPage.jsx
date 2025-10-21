import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  
  return (
      <section className='Container'>
        <div className='col text-center'>
            <h1 className="titulo">  {'{ 4 0 4 }'}       </h1>
            <p>.......Pagina no encontrada......</p>
            <Link className="btn btn-secondary px-4 my-3" to="/"> Volver</Link>
        </div>
    </section>
  )
}

export default NotFoundPage
