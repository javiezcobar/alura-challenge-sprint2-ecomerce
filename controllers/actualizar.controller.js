import { productServices } from "../services/products-services.js";
import { imageServices } from "../services/image-services.js";

const formulario = document.querySelector('[data-form]')



const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id")
    if (id === null) { window.location.href = "../screens/productos.html" }

    //selectores del form
    const imagen = document.querySelector('[data-imagen]')
    const categoria = document.querySelector('[data-categoria]')
    const nombre = document.querySelector('[data-nombre]')
    const precio = document.querySelector('[data-precio]')
    const descripcion = document.querySelector('[data-descripcion]')




    productServices.detalleProducto(id).then(async producto => {
        
        const img = await imageServices.decodeImg(producto.imagen, producto.nombre);
        categoria.value = producto.categoria
        nombre.value = producto.nombre
        precio.value = producto.precio
        descripcion.value = producto.descripcion
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(img);
        imagen.files = dataTransfer.files;
    });
}

obtenerInformacion()

formulario.addEventListener("submit", async e => {
    e.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id")
    const form = new FormData(formulario);
    const img = await imageServices.encodeImg(form.get("imagen"));

    productServices
        .actualizarProducto(
            img,
            form.get("categoria"),
            form.get("nombre"),
            form.get("precio"),
            form.get("descripcion"),
            id)
        .then((respuesta) => {
            console.log(respuesta);
        })
        .catch((err) => console.log(err));
});