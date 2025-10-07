import React from 'react'
import Listproducts from '../../components/Listproducts'
import Carrusel from '../../components/Carrusel'

const HomePage = ({agregarProductosCarrito}) => {
  return (
    <div>
      <Carrusel/>
      <Listproducts agregarProductosCarrito={agregarProductosCarrito} />
    </div>
  )
}

export default HomePage
