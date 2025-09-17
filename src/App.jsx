
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
import ProductoSearch from './components/ProductoSearch'

const App = () => {
  const repoName = "sitemcar";
  return ( 
    <CarritoContextProvider>      
      <BrowserRouter base='/sitemcar/'>
        <Navbar/>
        <Routes>
          <Route path={`/${repoName}`}  element ={<Home/>}/>
          <Route path={`/${repoName}/about`} element ={<About/>}/>
          <Route path={`/${repoName}/contact`} element ={<Contact/>}/>
          <Route path={`/${repoName}/products`} element ={<Products/>}/>
          <Route path={`/${repoName}/product/:categoria`} element ={<Products/>}/>
          <Route path={`/${repoName}/login`} element ={<Login/>}/>
          <Route path={`/${repoName}/registrar`} element ={<Registrar/>}/>
          <Route path={`/${repoName}/lostpass`} element ={<Lostpass/>}/>
          <Route path={`/${repoName}/item/:id`} element ={<Itemdetailcontain/>}/>
          <Route path={`/${repoName}/carrito`} element ={<Carrito/>}/>
          <Route path={`/${repoName}/pageerr`} element ={<PageErr/>}/>
          <Route path={`/${repoName}/search/:termino`} element ={<ProductoSearch/>}/>
          <Route path="*" element={<PageErr />} />

          <Route element = {<Protected acceder ={false}/>}>
              <Route path={`/${repoName}/admin`} element ={<Admin/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </CarritoContextProvider>
  )
}

export default App
