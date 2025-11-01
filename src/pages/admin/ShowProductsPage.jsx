import React, { useEffect, useState } from 'react'
import { showAlert } from '../../js/notificacion'
import { pedirProductos } from '../../js/pedirProductos'
import { CircleX, DollarSign, Gift, Layers, MessageCircle, PlusCircle,RotateCcw, Save, TagIcon, UserLockIcon } from 'lucide-react'

const ShowProductsPage = ({onAgregar}) => {

    const [errores, setErrores] = useState({})
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [operacion, setOperacion] = useState(1)
    const [titulo, setTitulo] = useState('')
    const [productos, setProductos] = useState([])
    const [producto, setProducto] = useState({
        id:'',nombre:'', descripcion:'', categoria:'', imagen:'', precio:'', stock:''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setProducto({...producto, [name]: value})
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        if(validarDatosFormulario() && operacion === 1){
            agregarProducto(producto);
            setProducto({nombre:'', descripcion:'', categoria:'',imagen:'', precio:'', stock:''})
            setErrores({})    
        }else{
            if(validarDatosFormulario() && operacion === 2){
                actualizarProducto(producto);
                setProducto({nombre:'', descripcion:'', categoria:'',imagen:'', precio:'', stock:''})
                setErrores({})
            }
        }
    }

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

    //validar datos del formulario para agregar productos
    const validarDatosFormulario = () => {

        const nuevosErrores = {}

        if(!producto.nombre.trim()){
            nuevosErrores.nombre = 'El nombre del producto es obligatorio'
        }
        if(!producto.descripcion.trim()){
            nuevosErrores.descripcion = 'La descripcion del producto es obligatoria'
        }
        if(!producto.categoria.trim()){
            nuevosErrores.categoria = 'La categoria del producto es obligatoria'
        }
        if(!producto.precio || producto.precio <= 0){
            nuevosErrores.precio = 'El precio del producto debe ser mayor o igual a cero'
        }
        
        setErrores(nuevosErrores)

        return Object.keys(nuevosErrores).length === 0
    }

    //agregar productos a la API
    const agregarProducto = async (producto) => {

        try {                        
            const respuesta = await fetch(`https://68d41b8f214be68f8c686c74.mockapi.io/api/v1/productos/`, {
                method: 'POST', 
                headers: {
                    'Content-type': 'application/json; charset=UTF-8' 
                },
                body: JSON.stringify(producto)
            })

            if(!respuesta.ok){
                throw new Error ('Error en la solicitud')
            }

            const data = await respuesta.json()
            console.log("producto agregado", data)
            alert("Producto agregado correctamente")
                    
        } catch (error) {
            console.error("Error al enviar la solicitud", error)
            alert("Error al agregar el producto")            
        }
    }
    

    const actualizarProducto = async (producto) => {
        try {                        
            const respuesta = await fetch(`https://68d41b8f214be68f8c686c74.mockapi.io/api/v1/productos/${producto.id}`, {
                method: 'PUT', 
                headers: {
                    'Content-type': 'application/json; charset=UTF-8' 
                },
                body: JSON.stringify(producto)
            })
            
            if(!respuesta.ok){
                throw new Error ('Error en la solicitud')
            }

            const data = await respuesta.json()
            console.log("producto actualizado", data)
            alert("Producto actualizado correctamente")
                    
        } catch (error) {
            console.error("Error al enviar la solicitud", error)
            alert("Error al actualizar el producto")            
        }
    }

    const eliminarProducto = async(id)=>{

        try {                        
            const respuesta = await fetch(`https://68d41b8f214be68f8c686c74.mockapi.io/api/v1/productos/${id}`, {
                method: 'DELETE'
            })
            
            if(!respuesta.ok){
                throw new Error ('Error en la solicitud')
            }

            console.log("producto eliminado")
            alert("Producto eliminado correctamente")
                    
        } catch (error) {
            console.error(error.message)
            alert("Hubo Error al eliminar el producto")            
        }

    }

    const openModal = (op, id, nombre, descripcion, categoria,imagen, precio,stock)=>{
        setProducto({nombre:'', descripcion:'', categoria:'',imagen:'', precio:'', stock:''})
        setOperacion(op)
        if (Number(op) === 1){
            setTitulo('Registrar Producto')
        }else if (Number (op) === 2){
            setTitulo("Editar Producto")
            setProducto({id:id,nombre:nombre, descripcion:descripcion, categoria:categoria,imagen:imagen, precio:precio, stock:stock})
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
                    <div className='col-12 col-lg-9 offset-0 offset-lg-0 w-100'>
                        <div className='table-responsive'>
                            <table className='table table-bordered w-auto'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th className='col-2'>Nombre</th>
                                        <th className='col-3'>Descripcion</th>
                                        <th>Categoria</th>
                                        <th>Url</th>
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
                                        <td>{prod.imagen}</td>
                                        <td>{prod.precio}</td>
                                        <td className='d-flex justify-content-center'>
                                            <button className='btn btn-outline-primary mx-1' onClick={()=>openModal(2,prod.id, prod.nombre, prod.descripcion,prod.categoria,prod.imagen, prod.precio)} data-bs-toggle='modal' data-bs-target='#modalProducts'>Editar</button>
                                            <button className='btn btn-outline-danger' onClick={()=>eliminarProducto(prod.id)} >Eliminar</button>
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
                    <div className='modal-body d-flex justify-content-center'>
                        <form onSubmit={handlesubmit}>                            
                            <input type="hidden" id= "id" />
                            <div className='input-group mb-2'>
                                <span className='input-group-text'><Gift/></span>
                                <input className='opacity-50 border-1 w-75 p-2' onChange={handleChange} type="text" name='nombre' placeholder='Nombre' value={producto.nombre}  />                            
                                {errores.nombre && <p className='fs-9 mx-5' style={{color:'red'}}>{errores.nombre}</p>}
                            </div>
                            <div className='input-group mb-2'>
                                <span className='input-group-text'><MessageCircle/></span>
                                <textarea className='opacity-50 border-1 w-75 p-2' rows={3} cols={45} name='descripcion'  value={producto.descripcion} onChange={handleChange} placeholder='Descripcion' requerid />
                                {errores.descripcion && <p className='fs-9 mx-5' style={{color:'red'}}>{errores.descripcion}</p>}
                            </div>
                            <div className='input-group mb-2'>
                                <span className='input-group-text'><Layers/></span>
                                <input className='opacity-50 border-1 w-75 p-2' onChange={handleChange} type="text" name='categoria' placeholder='Categoria' value={producto.categoria} />                            
                                {errores.categoria && <p className='fs-9 mx-5' style={{color:'red'}}>{errores.categoria}</p>}
                            </div>
                            <div className='input-group mb-2'>
                                <span className='input-group-text'><UserLockIcon/></span>
                                <input className='opacity-50 border-1 w-75 p-2' onChange={handleChange} type="text" name='imagen' placeholder='Url de imagen' value={producto.imagen} />                            
                            </div>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><DollarSign/></span>
                                <input className='opacity-50 border-1 w-75 p-2' onChange={handleChange} type="number" name='precio' placeholder='Precio' value={producto.precio} />                            
                                {errores.precio && <p className='fs-9 mx-5' style={{color:'red'}}>{errores.precio}</p>}
                            </div>

                            <div className = 'modal-footer d-flex justify-content-center mb-3'>
                                <button type='submit' className='btn btn-primary p-2 w-75'>{Number(operacion)===1?<Save/>:<RotateCcw/>} {Number(operacion)===1 ? "Guardar":"Actualizar"} </button>
                            </div>      
                        </form>
                    </div>
                </div>      
            </div>  
        </div>    
    </div>
    )
}

export default ShowProductsPage
