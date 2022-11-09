const crearProducto = (imagen, categoria, nombre, precio, descripcion) => {
    return fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({imagen, categoria, nombre, precio, descripcion, id: uuid.v4() })
    })
}

async function encodeImg(file){
    return new Promise(resolve => {
        const reader = new FileReader();
        reader.addEventListener('loadend', () => {
            resolve(reader.result);
        });
        reader.readAsDataURL(file)
    });
};


export const productServices = {
    crearProducto,
    encodeImg
}