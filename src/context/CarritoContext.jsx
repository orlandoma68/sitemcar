
import { createContext, useState} from "react";

export const CarritoContext = createContext();

export const CarritoContextProvider = ({children})=>{

    const [cant, setCant] = useState(1)

    const [esta, setEsta] = useState(false)

    const [carrito, setCarrito] = useState([])

    const eliminarProductosCarrito =(item)=>{
        const nuevoCarrito = [...carrito]
        const productoEnCarrito = nuevoCarrito.filter((producto)=>producto.id !== item.id)
        setCarrito(productoEnCarrito)
        setEsta(false)
    }

    const sacarProductosCarrito = (item, cantidad)=>{
      
        const itemAgregado = {...item, cantidad}

        const nuevoCarrito = [...carrito]

        const productoEnCarrito = nuevoCarrito.find((producto)=>producto.id === itemAgregado.id)

        if(productoEnCarrito){
              productoEnCarrito.cantidad -=cantidad;
              setCarrito(nuevoCarrito)
              setCant(productoEnCarrito.cantidad)
          }else{
              setCarrito([...carrito, itemAgregado])
              setCant(1)
              setEsta(true)
          }
    }

    const agregarProductosCarrito = (item, cantidad)=>{
      
        const itemAgregado = {...item, cantidad}

        const nuevoCarrito = [...carrito]

        const productoEnCarrito = nuevoCarrito.find((producto)=>producto.id === itemAgregado.id)

        if(productoEnCarrito){
              productoEnCarrito.cantidad +=cantidad;
              setCarrito(nuevoCarrito)
              setCant(productoEnCarrito.cantidad)
          }else{
              setCarrito([...carrito, itemAgregado])
              setCant(1)
              setEsta(true)
          }
    }

    const cantidadProductosCarrito = ()=>{
        return carrito.reduce((acc,prod)=>acc+prod.cantidad,0)
    }

    const totalPagar = ()=>{
      const total = (carrito.reduce((acc, prod)=> acc+(prod.precio * prod.cantidad),0)).toFixed(2)
      return total
    }

    const vaciarCarrito = ()=>{
      setCarrito([])
    }

    return(
    <CarritoContext.Provider value={{carrito, setCarrito, agregarProductosCarrito,cantidadProductosCarrito, totalPagar, vaciarCarrito,esta,cant,setEsta,sacarProductosCarrito,eliminarProductosCarrito}}>
        { children }
    </CarritoContext.Provider>    
       
    )
}