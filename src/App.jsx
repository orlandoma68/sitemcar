
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import { CarritoContextProvider } from './context/CarritoContext'
import RootLayout from './Layouts/RootLayout'
import PublicLayout from './Layouts/PublicLayout'
import AuthLayout from './Layouts/AuthLayout'
import HomePage from './pages/Public/HomePage'
import NotFoundPage from './pages/Public/NotFoundPage'
import DasboardPage from './pages/admin/DasboardPage'
import ProfilePage from './pages/admin/ProfilePage'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import ContactPage from './pages/Public/ContactPage'
import AboutPage from './pages/Public/AboutPage'
import LostpassPage from './pages/auth/LostpassPage'
import SearchPage from './pages/Public/SearchPage'
import Itemdetailcontain from './components/Itemdetailcontain'
import Carrito from './components/Carrito'
import Checkout from './components/Checkout'
import { AuthContextProvider } from './context/AuthContext'
import AdminLayout from './layouts/AdminLayout'
import Footer from './components/Footer'
import Modalinicio from './components/Modalinicio'
import Listproducts from './components/Listproducts'
import Header from './components/Header'


const App = () => {
  
  return ( 
    
      <AuthContextProvider>
        <CarritoContextProvider>      
          <Router>
            <Header/>            
            <Routes>
              {/* root  layout*/}
              <Route element={<RootLayout/>}>
                {/* ruta publica*/}
                <Route element={<PublicLayout/>}>
                    <Route index element={<HomePage />}/>
                    <Route path='contact' element={<ContactPage />}/>
                    <Route path='about' element={<AboutPage />}/>
                    <Route path='search/:termino' element={<SearchPage />}/>
                    <Route path='category/:categoria' element={<Listproducts />}/>
                    <Route path='*' element={<NotFoundPage />}/>
                    <Route path='item/:id' element ={<Itemdetailcontain/>}/>
                    <Route path='carrito' element ={<Carrito/>}/>
                    <Route path="checkout" element={<Checkout />} />
                </Route>                
                {/* ruta autenticacion*/}
                <Route path='auth' element={<AuthLayout/>}>
                    <Route path='login' element={<LoginPage />}/>
                    <Route path='register' element={<RegisterPage />}/>
                    <Route path='lostpass' element={<LostpassPage />}/>
                </Route>

                {/* ruta Administracion*/}
                <Route path='admin' element={<AdminLayout/>}>
                    <Route index element={<DasboardPage />}/>
                    <Route path='profile' element={<ProfilePage />}/>
                </Route>
              </Route>
              {/* fin de root layout*/}
            </Routes>
            <Footer />
          </Router>
        </CarritoContextProvider>
    </AuthContextProvider>
  )
}

export default App
