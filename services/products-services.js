async function encodeImg(file){
    return new Promise(resolve => {
        const reader = new FileReader();
        reader.addEventListener('loadend', () => {
            resolve(reader.result);
        });
        reader.readAsDataURL(file)
    });
};

async function decodeImg(dataurl, filename) {
    const res = await fetch(dataurl);
    const blob = await res.blob();
    const file = new File([blob], filename, { type: "image/png" });
    return file
}

const crearProducto = (imagen, categoria, nombre, precio, descripcion) => {
    return fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({imagen, categoria, nombre, precio, descripcion, id: uuid.v4() })
    })
}

const detalleProducto = id => fetch(`http://localhost:3000/productos/${id}`).then(resp => resp.json());


const actualizarProducto = (imagen, categoria, nombre, precio, descripcion, id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({imagen, categoria, nombre, precio, descripcion, id })
    })
}


export const productServices = {
    decodeImg,
    encodeImg,
    crearProducto,
    detalleProducto,
    actualizarProducto
}