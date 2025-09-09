import React from 'react'

const Spinner = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center m-5">
      <strong>Cargando Datos... </strong>
      <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
    </div>
  )
}

export default Spinner
