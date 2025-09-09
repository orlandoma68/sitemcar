import React from 'react'

import { Link } from 'react-router-dom'

const PageErr = () => {
  return (
      <section className='container'>
        <div className='col text-center'>
            <h1 className="titulo">  {'{ 4 0 4 }'}       </h1>
            <p>.......Pagina no encontrada......</p>
            <Link className="btn btn-secondary" to="/"> volver</Link>
        </div>
    </section>
  )
}

export default PageErr
