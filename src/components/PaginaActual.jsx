import React from 'react'

const PaginaActual = ({totalPaginas, numeroPaginaActual, setNumerPaginaActual,totalProductos }) => {

    const handleNext = ()=>{if(numeroPaginaActual !== totalPaginas){setNumerPaginaActual(numeroPaginaActual +1)}}
    const handlePrev = ()=>{if(numeroPaginaActual !== 1){setNumerPaginaActual(numeroPaginaActual -1)}}

    const cambiarPagina = (numeroPaginaActual1)=>{
      setNumerPaginaActual(numeroPaginaActual1)
    }

  return (

      <div className='container'>
          <div className='row'>
              <div className='d-flex justify-content-center align-items-center'>
                <h5 className='opacity-50 btn btn-outline-primary' onClick={handlePrev}>{'<'}Anterior  </h5>
                {Array.from({length:totalPaginas}, (_, index) => (
                  <button key= {index + 1} className={`btn mx-1 mb-2 ${numeroPaginaActual === index + 1 ? "btn-primary" : "btn-outline-primary"}`} onClick={()=>cambiarPagina(index + 1)}>
                    {index+1}         
                  </button>
                ))}
                <h5 className='opacity-50 btn btn-outline-primary' onClick={handleNext}>Siguiente{'>'} </h5>
              </div>    
          </div>
          <div className='d-flex justify-content-center'>            
                <p className='btn opacity-50 '>{totalProductos} Productos - Página {numeroPaginaActual} de {totalPaginas} </p>
            </div>
      </div>    
  )
}

export default PaginaActual


{/*
    <div className='d-flex justify-content-center m-5 flex-column align-items-center'>
      <div className='d-flex'>
          <h3 className='mx-2 my-2 px-4 opacity-50 btn pe-auto btn-outline-success fs-3' onClick={handlePrev}>{'<'}Anterior  </h3>
              <div className='d-flex justify-content-center my-4'>
      {Array.from({length:totalPaginas}, (_, index) => (
        <button key= {index + 1} className={`btn mx-1 ${numeroPaginaActual === index + 1 ? "btn-primary" : "btn-outline-primary"}`} onClick={()=>cambiarPagina(index + 1)}>
          {index+1}    
     
        </button>
      ))}
    </div>    
          <h4 className='mx-2 my-2 px-4 pe-auto fs-3 btn btn-outline-success' >{numeroPaginaActual}</h4>
          <h3 className='mx-2 my-2 px-4 opacity-50 btn pe-auto btn-outline-success fs-3' onClick={handleNext}>Siguiente{'>'} </h3>
      </div>
        
      <p className='mx-5 my-2 px-4 btn pe-auto opacity-50 fs-5'>Total {totalproducts} Productos  Página {numeroPaginaActual} de {totalPaginas} </p>
        
    </div>




        <div className='d-flex justify-content-center my-4'>
      {Array.from({length:totalPaginas}, (_, index) => (
        <button key= {index + 1} className={`btn mx-1 ${numeroPaginaActual === index + 1 ? "btn-primary" : "btn-outline-primary"}`} onClick={()=>cambiarPagina(index + 1)}>
          {index+1}    
     
        </button>
      ))}
    </div>    
  */}