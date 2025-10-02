
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import RootLayout from './layouts/RootLayout'

import PublicLayout from './Layouts/PublicLayout'

import HomePage from './pages/Public/HomePage'
import ContactPage from './pages/Public/ContactPage'
import AboutPage from './pages/Public/AboutPage'
import NotFoundPage from './pages/Public/NotFoundPage'

import Header from './components/Header'
import Footer from './components/Footer'

import Listproducts from './components/Listproducts'
import Itemdetailcontain from './components/Itemdetailcontain'
import Carrito from './components/Carrito'

const App = () => {
  
  return ( 
    
          <Router>
            <Header/>            
            <Routes>
              {/* inicio de root  layout*/}
              <Route element={<RootLayout/>}>
                {/* inicio de ruta publica*/}
                <Route element={<PublicLayout/>}>
                    <Route index element={<HomePage />}/>
                    <Route path='contact' element={<ContactPage />}/>
                    <Route path='about' element={<AboutPage />}/>
                    <Route path='category/:categoria' element={<Listproducts />}/>
                    <Route path='*' element={<NotFoundPage />}/>
                    <Route path='item/:id' element ={<Itemdetailcontain/>}/>
                    <Route path='carrito' element ={<Carrito/>}/>
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
