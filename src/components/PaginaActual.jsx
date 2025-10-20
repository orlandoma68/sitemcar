import React from 'react'

const PaginaActual = ({totalPaginas, numeroPaginaActual, setNumerPaginaActual }) => {

    const handleNext = ()=>{if(numeroPaginaActual !== totalPaginas){setNumerPaginaActual(numeroPaginaActual +1)}}
    const handlePrev = ()=>{if(numeroPaginaActual !== 1){setNumerPaginaActual(numeroPaginaActual -1)}}

  return (
    <div className='d-flex justify-content-center'>
        <h3 className='mx-5 btn pe-auto btn-outline-danger' onClick={handlePrev}>Prev</h3>
        <h4>{numeroPaginaActual} / {totalPaginas }</h4>
        <h3 className='mx-5 btn pe-auto btn-outline-danger' onClick={handleNext}>Next</h3>
    </div>
  )
}

export default PaginaActual
