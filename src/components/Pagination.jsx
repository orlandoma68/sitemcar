import React, { useEffect, useState } from 'react'
import Pages from './Pages'
import PaginaActual from './PaginaActual'

const Pagination = ({productos}) => {


    const [totalProductos, setTotalProductos]= useState()
    const [cantidadProductos, setCantidadProductos] = useState(6)
    const [numeroPaginaActual, setNumeroPaginaActual] = useState(1)
    const final = cantidadProductos * numeroPaginaActual
    const inicio = final - cantidadProductos
    const numeroDatos = productos.slice(inicio, final)
    const totalPaginas = Math.ceil(productos.length / cantidadProductos)
    const totalproducts = productos.length

  return (
    <div>
        {numeroDatos && <Pages numeroDatos = {numeroDatos}/>}
        <PaginaActual totalproducts={totalproducts} totalPaginas = {totalPaginas} numeroPaginaActual = {numeroPaginaActual} setNumerPaginaActual={setNumeroPaginaActual}/>
    </div>
  )
}

export default Pagination;
