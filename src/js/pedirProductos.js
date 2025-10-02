
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

export const pedirProductosCategoria = (datos, categoria)=>{

    return new Promise ((resolve, reject)=>{
        const itemCategoria = datos.filter((itemCategoria) => itemCategoria.categoria === categoria);
        if (itemCategoria){
            resolve(itemCategoria)
        }else{
            reject("error al traer la data")
        }
    })
}

export const pedirProductosCategoriaUnicos = (datos)=>{

    return new Promise ((resolve, reject)=>{

        const categoriasUnicos = datos.filter((producto, index, self) =>
        index === self.findIndex(p => p.categoria === producto.categoria));
        
        if (categoriasUnicos){
            resolve(categoriasUnicos)
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
