import React, { useEffect, useState } from 'react'
import { showAlert } from '../../js/notificacion'
import { pedirProductos } from '../../js/pedirProductos'
import { CircleX, PlusCircle,RotateCcw } from 'lucide-react'
const ShowProductsPage = () => {
    
    const [productos, setProductos] = useState([])
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const [id, setId] = useState()
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [categoria, setCategoria] = useState('')
    const [precio, setPrecio] = useState()
    const [stock, setStock] = useState()

    const [operacion, setOperacion] = useState(1)
    const [titulo, setTitulo] = useState('')


    useEffect(()=>{
        obtenerProductos()
    },[])

    const obtenerProductos = async ()=>{
        try {
            const datos = await pedirProductos()
            setProductos(datos)                
        } catch (error) {
            setError(error)
        }
    }

    const openModal = (op, id, nombre, descripcion, categoria, precio,stock)=>{
        setId("")
        setNombre("")
        setDescripcion("")
        setCategoria("")
        setPrecio("")
        setStock("")
        setOperacion(op)
        if (Number(op) === 1){
            setTitulo('Registrar Producto')
        }else{
            setTitulo("Editar Producto")
            setId(id)
            setNombre(nombre)
            setDescripcion(descripcion)
            setCategoria(categoria)
            setPrecio(precio)
            setStock(stock)
        }
    }

  return (
        <div>
            <div className='container-fluid'>
                <div className='row my-5'>
                    <div className='col-12 col-md-6 col-lg-4 w-100'>
                        <div className='d-flex justify-content-center'>
                            <button onClick={()=>openModal(1)} className='btn btn-outline-dark' data-bs-toggle = 'modal' data-bs-target = '#modalProducts'>
                                <PlusCircle className='mx-2'/>Agregar
                            </button>
                        </div>
                    </div>
                </div>
            
                <div className='row mt-3'>
                    <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
                        <div className='table-responsive'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nombre</th>
                                        <th>Descripcion</th>
                                        <th>Categoria</th>
                                        <th>Precio</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody className='table-group-divider'>
                                    { productos.map((prod)=>(
                                    <tr key={prod.id}>
                                        <td>{prod.id}</td>
                                        <td>{prod.nombre}</td>
                                        <td>{prod.descripcion}</td>
                                        <td>{prod.categoria}</td>
                                        <td>{prod.precio}</td>
                                        <td className='d-flex justify-content-center'>
                                            <button className='btn btn-outline-primary mx-1' onClick={()=>openModal(2,prod.id, prod.nombre, prod.descripcion,prod.categoria, prod.precio)} data-bs-toggle='modal' data-bs-target='#modalProducts'>Editar</button>
                                            <button className='btn btn-outline-danger' >Eliminar</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div id='modalProducts' className='modal fade' aria-hidden='true'>
            <div className = 'modal-dialog'>
                <div className = 'modal-content'>
                    <div className = 'modal-header'>
                        <label className= 'h5'>{titulo}</label>
                        <button type='button' className='btn-close ' data-bs-dismiss = "modal" aria-label="close"></button>
                    </div>      
                    <div className='modal-body'>
                        <input type="hidden" id= "id" />
                        <div className='input-group mb-3'>
                            <span className='input-group-text'></span>
                            <input className='opacity-50 border-1 w-75 p-2' onChange={(e)=>setNombre(e.target.value)} type="text" id='nombre' placeholder='Nombre' value={nombre} />                            
                        </div>
                        <div className='input-group mb-3'>
                            <span className='input-group-text'></span>
                            <input className='opacity-50 border-1 w-75 p-2' onChange={(e)=>setDescripcion(e.target.value)} type="text" id='descripcion' placeholder='Descripcion' value={descripcion} />                            
                        </div>
                        <div className='input-group mb-3'>
                            <span className='input-group-text'></span>
                            <input className='opacity-50 border-1 w-75 p-2' onChange={(e)=>setCategoria(e.target.value)} type="text" id='categoria' placeholder='Categoria' value={categoria} />                            
                        </div>
                        <div className='input-group mb-3'>
                            <span className='input-group-text'></span>
                            <input className='opacity-50 border-1 w-75 p-2' onChange={(e)=>setPrecio(e.target.value)} type="text" id='precio' placeholder='precio' value={precio} />                            
                        </div>

                        <div className = 'modal-footer d-flex justify-content-center my-4'>
                            <button className='btn btn-success mx-3'><RotateCcw/> Actualizar</button>
                            <button className='btn btn-danger mx-3 '><CircleX/> Cancelar</button>
                        </div>      
                    </div>
                </div>      
            </div>  
        </div>    
    </div>
    )
}

export default ShowProductsPage
