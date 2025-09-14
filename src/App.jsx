
import Navbar from './components/Navbar'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import Login from './components/Login'
import Registrar from './components/Registrar'
import Lostpass from './components/Lostpass'
import Products from './components/Products'
import Itemdetailcontain from './components/Itemdetailcontain'
import Carrito from './components/Carrito'
import { CarritoContextProvider } from './context/CarritoContext'
import PageErr from './components/PageErr'
import Protected from './components/Protected'
import Admin from './components/Admin'

const App = () => {

  return ( 
    <CarritoContextProvider>      
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element ={<Home/>}/>
          <Route path='/about' element ={<About/>}/>
          <Route path='/contact' element ={<Contact/>}/>
          <Route path='/products' element ={<Products/>}/>
          <Route path='/product/:categoria' element ={<Products/>}/>
          <Route path='/login' element ={<Login/>}/>
          <Route path='/registrar' element ={<Registrar/>}/>
          <Route path='/lostpass' element ={<Lostpass/>}/>
          <Route path='/item/:id' element ={<Itemdetailcontain/>}/>
          <Route path='/carrito' element ={<Carrito/>}/>
          <Route path='/pageerr' element ={<PageErr/>}/>
          <Route path="*" element={<PageErr />} />
          <Route element = {<Protected acceder ={false}/>}>
              <Route path='/admin' element ={<Admin/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </CarritoContextProvider>
  )
}

export default App
