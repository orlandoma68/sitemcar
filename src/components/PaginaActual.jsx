import React from 'react'

const PaginaActual = ({totalPaginas, numeroPaginaActual, setNumerPaginaActual,totalproducts }) => {

    const handleNext = ()=>{if(numeroPaginaActual !== totalPaginas){setNumerPaginaActual(numeroPaginaActual +1)}}
    const handlePrev = ()=>{if(numeroPaginaActual !== 1){setNumerPaginaActual(numeroPaginaActual -1)}}

  return (
    <div className='d-flex justify-content-center m-5 flex-column align-items-center'>
      <div className='d-flex'>
          <h3 className='mx-2 my-2 px-4 opacity-50 btn pe-auto btn-outline-success fs-3' onClick={handlePrev}>{'<'}Anterior  </h3>
          <h4 className='mx-2 my-2 px-4 pe-auto fs-3 btn btn-outline-success' >{numeroPaginaActual}</h4>
          <h3 className='mx-2 my-2 px-4 opacity-50 btn pe-auto btn-outline-success fs-3' onClick={handleNext}>Siguiente{'>'} </h3>
      </div>
        
      <p className='mx-5 my-2 px-4 btn pe-auto opacity-50 fs-5'>Total {totalproducts} Productos  Página {numeroPaginaActual} de {totalPaginas} </p>
        
    </div>
  )
}

export default PaginaActual
