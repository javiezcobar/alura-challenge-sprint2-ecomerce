const crearProducto = (imagen, categoria, nombre, precio, descripcion) => {
    return fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ imagen, categoria, nombre, precio, descripcion, id: uuid.v4() })
    })
}

const detalleProducto = id => fetch(`http://localhost:3000/productos/${id}`).then(resp => resp.json());


const actualizarProducto = (imagen, categoria, nombre, precio, descripcion, id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ imagen, categoria, nombre, precio, descripcion, id })
    })
}

const borrarProductos = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: "DELETE"
    })
}


export const productServices = {
    crearProducto,
    detalleProducto,
    actualizarProducto,
    borrarProductos,
}