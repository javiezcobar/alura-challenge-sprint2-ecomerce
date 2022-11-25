const display = document.querySelector("[data-list-principal]");
const categorias = ["Star Wars", "Consolas", "Diversos"];

//conecta al servidor y trae filtrados los productos
const listaPorCategorias = async (categoria, limite) => {
  const resp = await fetch(
    `http://localhost:3000/productos?categoria_like=${categoria}&_limit=${limite}`
  );
  return resp.json();
};

const crearItemPorCategoria = (img, nombre, precio) => {
  const item = document.createElement("li");
  item.classList.add("products__item");
  const contenido = `
      <img class="products__item__img"  src="${img}" alt="foto de ${nombre}">
      <h4>${nombre}</h4>
      <span class="products__item__price">$ ${precio}</span>
      <a class="products__item__link" href="screens/producto.html">Ver producto</a>`;
  item.innerHTML = contenido;
  return item;
};

const crearModuloCategoria = async (categoria) => {
  const contenedor = document.createElement("div");
  contenedor.classList.add("products__line");

  let listaDeProductos = document.createElement("ul");
  listaDeProductos.classList.add("products__list");

  await listaPorCategorias(categoria, 6).then((data) => {
    data.forEach((productos) => {
      const Nuevoitem = crearItemPorCategoria(
        productos.imagen,
        productos.nombre,
        productos.precio
      );
      listaDeProductos.appendChild(Nuevoitem);
    });
  });

  const contenido = `<div class="products__line__head">
      <h3 class="products__line__title">${categoria}</h3>
      <button class="products__line__button">Ver todo <i class="fa-solid fa-arrow-right"></i></button>
   </div>
  ${listaDeProductos.outerHTML}
   `;

  contenedor.innerHTML = contenido;

  return contenedor;
};

crearModuloCategoria(categorias[0]).then((data) => {
  display.appendChild(data);
});
crearModuloCategoria(categorias[1]).then((data) => {
  display.appendChild(data);
});
crearModuloCategoria(categorias[2]).then((data) => {
  display.appendChild(data);
});
