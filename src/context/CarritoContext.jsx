
import { createContext, useState} from "react";

export const CarritoContext = createContext();

export const CarritoContextProvider = ({children})=>{

    const [cantProductosId, setCantProductosId] = useState(1)

    const [estaProductoCarrito, setEstaProductoCarrito] = useState(false)

    const [carrito, setCarrito] = useState([])

    const eliminarProductosCarrito =(item)=>{
        const nuevoCarrito = [...carrito]
        const productoEnCarrito = nuevoCarrito.filter((producto)=>producto.id !== item.id)
        setCarrito(productoEnCarrito)
        setEstaProductoCarrito(false)
    }

    const sacarProductosCarrito = (item, cantidad)=>{
      
        const itemAgregado = {...item, cantidad}

        const nuevoCarrito = [...carrito]

        const productoEnCarrito = nuevoCarrito.find((producto)=>producto.id === itemAgregado.id)

        if(productoEnCarrito){
              productoEnCarrito.cantidad -=cantidad;
              setCarrito(nuevoCarrito)
              setCantProductosId(productoEnCarrito.cantidad)
          }else{
              setCarrito([...carrito, itemAgregado])
              setCantProductosId(1)
              setEstaProductoCarrito(true)
          }
    }

    const agregarProductosCarrito = (item, cantidad)=>{
      
        const itemAgregado = {...item, cantidad}

        const nuevoCarrito = [...carrito]

        const productoEnCarrito = nuevoCarrito.find((producto)=>producto.id === itemAgregado.id)

        if(productoEnCarrito){
              productoEnCarrito.cantidad +=cantidad;
              setCarrito(nuevoCarrito)
              setCantProductosId(productoEnCarrito.cantidad)
          }else{
              setCarrito([...carrito, itemAgregado])
              setCantProductosId(1)
              setEstaProductoCarrito(true)
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
    <CarritoContext.Provider value={{carrito, 
            setCarrito, 
            agregarProductosCarrito,
            cantidadProductosCarrito, 
            totalPagar, 
            vaciarCarrito,
            estaProductoCarrito,
            setEstaProductoCarrito,
            cantProductosId,
            setCantProductosId,
            sacarProductosCarrito,
            eliminarProductosCarrito
            }}>
        { children }
    </CarritoContext.Provider>    
       
    )
}