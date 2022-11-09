import { productServices } from "../services/products-services.js";

const formulario = document.querySelector('[data-form]')

formulario.addEventListener("submit",async e => {
    e.preventDefault();

let form = new FormData(formulario);

    const img = await productServices.encodeImg(form.get("imagen"));
    console.log(img)

    productServices
        .crearProducto(
         img,
         form.get("categoria"),
         form.get("nombre"),
         form.get("precio"), 
         form.get("descripcion"))
        .then((respuesta) => {
            console.log(respuesta);
        })
        .catch((err) => console.log(err));
});