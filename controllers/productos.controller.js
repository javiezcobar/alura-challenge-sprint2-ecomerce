const listaDeProductos = document.querySelector('[data-product-list]')

const crearNuevoProducto = (img, nombre, precio, id) => {
    const item = document.createElement("li");
    item.classList.add("products__item__img");
    item.classList.add("products__item")
    const contenido = `
    <img class="products__item__img"  src="${img}" alt="foto de ${nombre}">
    <h4>${nombre}</h4>
    <span class="products__item__price">$ ${precio}</span>
    <p class="products__item__subtext">#${id}</p>
    <div class="Product__item__edit">
        <a href="../screens/editarProductos.html?id=${id}"><i class="fa-solid fa-pen"></i></a>
        <i class="fa-solid fa-trash"></i> </div>`;
    item.innerHTML = contenido;
    return item;
}

const listaProductos = () => fetch("http://localhost:3000/productos").then(respuesta => respuesta.json());

listaProductos()
.then(data => {
    data.forEach(productos => {
        const Nuevoitem = crearNuevoProducto(productos.imagen, productos.nombre, productos.precio, productos.id);
        listaDeProductos.appendChild(Nuevoitem)
    });
})