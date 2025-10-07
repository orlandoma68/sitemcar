
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import RootLayout from './layouts/RootLayout'
import PublicLayout from './layouts/PublicLayout'

import HomePage from './pages/Public/HomePage'
import ContactPage from './pages/Public/ContactPage'
import AboutPage from './pages/Public/AboutPage'
import NotFoundPage from './pages/Public/NotFoundPage'

import Header from './components/Header'
import Footer from './components/Footer'

import Listproducts from './components/Listproducts'
import Itemdetailcontain from './components/Itemdetailcontain'
import Carrito from './components/Carrito'
import { useState } from 'react'


const App = () => {

  const [carrito, setCarrito] = useState([])

  const [estaProductoCarrito, setEstaProductoCarrito] = useState(false)

  const [cantProductosId, setCantProductosId] = useState(1)

  //agregar Productos al carrito de compras
  const agregarProductosCarrito = (prod)=>{

    const siExisteProductosEnCarrito = carrito.find((car) => car.id === prod.id);

    if (siExisteProductosEnCarrito) {
      setCarrito(carrito.map((car) =>car.id === prod.id ? { ...car, cantidad: car.cantidad + 1 }: car));
      setCantProductosId(siExisteProductosEnCarrito.cantidad+1)

    } else {      
      setCarrito([...carrito, {...prod, cantidad: 1 }]);
      setCantProductosId(1)
      setEstaProductoCarrito(true)

    }  

  }
  //devuelve cantidad de productos en carrito
  const cantidadProductosCarrito = ()=>{
    return carrito.reduce((acc,prod)=>acc+prod.cantidad,0)
  }

  const cantidad = cantidadProductosCarrito()

  //calculo del total de precios de los productos
  const totalPagar = ()=>{
    const total = (carrito.reduce((acc, prod)=> acc+(prod.precio * prod.cantidad),0)).toFixed(2)
    return total
  }

  const eliminarProductosCarrito =(prod)=>{
    const nuevoCarrito = [...carrito]
    const productoEnCarrito = nuevoCarrito.filter((producto)=>producto.id !== prod.id)
    setCarrito(productoEnCarrito)
    setEstaProductoCarrito(false)
}

const sacarProductosCarrito = (prod)=>{
  
  const siExisteProductosEnCarrito = carrito.find((car) => car.id === prod.id);

  if (siExisteProductosEnCarrito) {
    setCarrito(carrito.map((car) =>car.id === prod.id ? { ...car, cantidad: car.cantidad -1 }: car));
    setCantProductosId(siExisteProductosEnCarrito.cantidad-1)
  } else {      
    setCarrito([...carrito, {...prod, cantidad: 1 }]);
    setEstaProductoCarrito(true)
    setCantProductosId(1)
  }  
}

  //vaciar carrito
  const vaciarCarrito = ()=>{
    setCarrito([])
  }

  return ( 
    
          <Router>
            <Header cantidad = {cantidad}/>            
            <Routes>
              {/* inicio de root  layout*/}
              <Route element={<RootLayout/>}>
                {/* inicio de ruta publica*/}
                <Route element={<PublicLayout/>}>
                    <Route index element={<HomePage agregarProductosCarrito = {agregarProductosCarrito} />}/>
                    <Route path='contact' element={<ContactPage />}/>
                    <Route path='about' element={<AboutPage />}/>
                    <Route path='category/:categoria' element={<Listproducts agregarProductosCarrito = {agregarProductosCarrito} />}/>
                    <Route path='*' element={<NotFoundPage />}/>
                    <Route path='item/:id' element ={<Itemdetailcontain agregarProductosCarrito = {agregarProductosCarrito} estaProductoCarrito = {estaProductoCarrito} cantProductosId = {cantProductosId} eliminarProductosCarrito = {eliminarProductosCarrito} sacarProductosCarrito = {sacarProductosCarrito}/>}/>
                    <Route path='carrito' element ={<Carrito carrito = {carrito} vaciarCarrito = {vaciarCarrito} cantidadProductosCarrito = {cantidadProductosCarrito} totalPagar = {totalPagar} eliminarProductosCarrito = {eliminarProductosCarrito} sacarProductosCarrito = {sacarProductosCarrito} agregarProductosCarrito ={ agregarProductosCarrito }/>}/>
                </Route>
                {/*fin de ruta publica*/}
              </Route>
              {/* fin de root layout*/}
            </Routes>
            <Footer />
          </Router>  
  )
}

export default App
