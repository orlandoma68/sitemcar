import React from 'react'
import Navbar from './Navbar'

const Header = ({cantidad}) => {
  return (
    <div>
      <Navbar cantidad = {cantidad} />
    </div>
  )
}

export default Header