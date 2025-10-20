import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import {Toaster} from "react-hot-toast"
import { AuthContextProvider } from './context/AuthContext'
import { CarritoContextProvider } from './context/CarritoContext'

import Header from './components/Header'
import RootLayout from './layouts/RootLayout'
import PublicLayout from './layouts/PublicLayout'
import HomePage from './pages/public/HomePage'

import Listproducts from './components/Listproducts'
import Checkout from './components/Checkout'
import DasboardPage from './pages/admin/DasboardPage'
import RegisterPage from './pages/auth/RegisterPage'
import LoginPage from './pages/auth/LoginPage'
import SearchPage from './pages/public/SearchPage'
import AboutPage from './pages/public/AboutPage'
import NotFoundPage from './pages/public/NotFoundPage'
import Itemdetailcontain from './components/Itemdetailcontain'
import Carrito from './components/Carrito'
import ContactPage from './pages/public/ContactPage'
import ProfilePage from './pages/admin/ProfilePage'
import AdminLayout from './layouts/AdminLayout'
import Footer from './components/Footer'
import AuthLayout from './layouts/AuthLayout'
import LostPassPage from './pages/auth/LostPassPage'

const App = () => {

  return ( 
    
      <Router>
        <AuthContextProvider>
          <CarritoContextProvider>
            <Header />
            <Routes>
              {/* inicio de root  layout*/}
              <Route element={<RootLayout/>}>

                {/* inicio de ruta publica*/}
                <Route element={<PublicLayout/>}>
                    <Route index element={<HomePage />}/>
                    <Route path='contact' element={<ContactPage />} />
                    <Route path='about' element={<AboutPage />}/>
                    <Route path='category/:categoria' element={<Listproducts />}/>
                    <Route path='search/:termino' element={<SearchPage />}/>
                    <Route path='*' element={<NotFoundPage />}/>
                    <Route path='item/:id' element ={<Itemdetailcontain />}/>
                    <Route path='carrito' element ={<Carrito />}/>
                    <Route path="checkout" element={<Checkout />} />
                </Route>

                {/* ruta Administracion*/}
                <Route path='admin' element={<AdminLayout />}>
                    <Route index element={<DasboardPage />}/>
                    <Route path='profile' element={<ProfilePage />}/>
                </Route>

                {/* ruta autenticacion*/}
                <Route path='auth' element={<AuthLayout />}>
                    <Route path='login' element={<LoginPage/>}/>
                    <Route path='register' element={<RegisterPage />}/>
                    <Route path='lostpass' element={<LostPassPage />} />
                </Route>

              </Route>
              {/* fin de root layout*/}
            </Routes>
            <Footer />
          </CarritoContextProvider>
        </AuthContextProvider>
      <Toaster/>
    </Router>  
  )
}

export default App
