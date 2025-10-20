import React from 'react'
import Listproducts from '../../components/Listproducts'
import Carrusel from '../../components/Carrusel'
import Pagination from '../../components/Pagination'

const HomePage = () => {
  return (
    <div>
      <Carrusel/>
      <Listproducts/>
    </div>
  )
}

export default HomePage
