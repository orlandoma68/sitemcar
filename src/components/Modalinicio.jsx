import React, { useEffect, useState } from 'react'
import Modalcontenido from './Modalcontenido'
import { Link } from 'react-router-dom'
import { pedirProductosCategoriaUnicos } from '../js/pedirProductos'

const Modalinicio = ( {activarMenu} ) => {
  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = ()=> setOpenModal(true)
  const handleCloseModal = ()=> {
    setOpenModal(false)
    activarMenu(false)
  }
  const [productos, setProductos] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()

  useEffect(()=>{
        
    const obtenerProductos = async ()=>{

    try {
        const respuesta = await fetch(`https://68d41b8f214be68f8c686c74.mockapi.io/api/v1/productos/`)              
        if(!respuesta.ok) throw new error ("Error en la busqueda")
        const datos = await respuesta.json()
        pedirProductosCategoriaUnicos(datos)
        .then((res)=>{
            setProductos(res)
        })   
      } catch (error) {
        setError("hubo un problema al cargar los datos....")
        setProductos([])
      }finally{
        setIsLoading(false)
      }
    }
    obtenerProductos()

},[])

  return (
    <div className='modal-inicio'>
      {/*abre el modal*/ }
      <Link className="nav-link text-white" onMouseEnter={handleOpenModal}   to="#"><i className="fa-solid fa-bars mx-1"></i>Categoria</Link>

      <Modalcontenido handleOpenModal ={openModal} handleCloseModal = {handleCloseModal}>
        <div className='bg-light' onMouseLeave={handleCloseModal}>     
            <ul className="mr-auto mx-3 p-3 d-flex" style={{overflowX:'auto'}}>
                {productos && productos.map(prod => {
                   return <li key={prod.id} onClick={handleCloseModal} className='mx-2 p-1'><Link className='text-dark link-primary link-offset-3 link-underline link-underline-opacity-0 link-underline-opacity-100-hover ' to= {`/category/${prod.categoria}`} > {prod.categoria}</Link></li>})                
                }
            </ul>
        </div>
      </Modalcontenido>
      </div>
  )
}

export default Modalinicio
