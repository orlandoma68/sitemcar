
import data from "../data/products.json"


export const pedirProductos = ()=>{
    return new Promise ((resolve, reject) =>{
        resolve(data)
    })
}

export const pedirProductosId = (id)=>{

    return new Promise ((resolve, reject)=>{
        const itemId = data.find((item) => item.id === id);
        if (itemId){
            resolve(itemId)
        }else{
            reject("error al traer la data")
        }
    })
}

export const pedirProductosCategoria = (categoria)=>{

    return new Promise ((resolve, reject)=>{
        const itemCategoria = data.filter((itemCategoria) => itemCategoria.categoria === categoria);
        if (itemCategoria){
            resolve(itemCategoria)
        }else{
            reject("error al traer la data")
        }
    })
}

export const pedirProductosNombre = (data, nombre)=>{
    return new Promise ((resolve, reject)=>{
        const itemNombre =data.filter((prod)=>prod.nombre.toLowerCase().includes(nombre.toLowerCase()));
        if (itemNombre){
            resolve(itemNombre)
        }else{
            reject("error al traer la data")
        }
    })
}
