// inicializamos con los valores almacenados en el LocalStorage

let productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));

// Definimos la función para renderizar los productos
function renderizarProductosCarrito() {
  const contenedorCarrito = document.getElementById("contenedorCarrito");
  const tabla = document.getElementById("tablaCarrito");
  const bodyCarrito = document.getElementById("bodyCarrito");
  bodyCarrito.className = "table-dark";

  bodyCarrito.innerHTML = ""; // Limpiamos los productos previos del carrito

  productosEnCarrito.forEach((producto) => {
    const tr = document.createElement("tr");
    bodyCarrito.append(tr);

    const tdNombre = document.createElement("td");
    tdNombre.className = "table-success";
    tdNombre.innerText = `${producto.nombre}`;
    tr.append(tdNombre);

    const tdCantidad = document.createElement("td");
    tdCantidad.className = "table-success";
    tdCantidad.innerText = `${producto.cantidad}`;
    tr.append(tdCantidad);

    const tdPrecio = document.createElement("td");
    tdPrecio.className = "table-success";
    tdPrecio.innerText = `$${producto.precio}`;
    tr.append(tdPrecio);

    const tdSubtotal = document.createElement("td");
    tdSubtotal.className = "table-success";
    tdSubtotal.innerText = `$${producto.precio * producto.cantidad}`;
    tr.append(tdSubtotal);

    const botonEliminar = document.createElement("button");
    botonEliminar.className = "btn btn-secondary mx-4 animate__animated animate__pulse";
    botonEliminar.addEventListener("click", () => {
      eliminarProducto(producto.nombre);
    });
    tr.append(botonEliminar);

    const iconoEliminar = document.createElement("i");
    iconoEliminar.className = "bi bi-trash";
    botonEliminar.append(iconoEliminar);
  });
}

renderizarProductosCarrito(); // Renderizamos los productos del carrito

// Creamos un elemento para mostrar el total de la compra y lo añadimos al contenedor del carrito
const total = document.createElement("p");
total.className = "fs-5 fw-bolder";
contenedorCarrito.append(total);

actualizarTotal(); // Actualizamos el total de la compra

// CALCULAR TOTAL
function actualizarTotal() {
  // Calculamos el total de la compra sumando el precio de cada producto multiplicado por su cantidad
  const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
  total.innerText = `EL TOTAL DE SU COMPRA ES DE $${totalCalculado}`;
}

// ELIMINAR PRODUCTO
function eliminarProducto(nombreProducto) {
  // Encuentro el índice del producto a eliminar en el array de productos del carrito
  const index = productosEnCarrito.findIndex((producto) => producto.nombre === nombreProducto);

  // Si el producto existe, lo eliminamos del array y actualizamos el LocalStorage
  if (index !== -1) {
    productosEnCarrito.splice(index, 1);
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

    // Actualizo el total en pantalla y vuelvo a renderizar los productos del carrito
    actualizarTotal();
    renderizarProductosCarrito();
  }
}

// obtenemos los botones finalizar compra y seguir comprando
const botonFinalizarCompra = document.getElementById("FinalizarCompra");
botonFinalizarCompra.addEventListener("click", comprarCarrito);

const botonSeguirComprando = document.getElementById("seguirComprando");
container.append(botonSeguirComprando);

const container = document.getElementById("contenedor");
container.append(contenedorCarrito);

// FINALIZAR COMPRA
function comprarCarrito() {
  productosEnCarrito.length = 0;
  localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

  Swal.fire({
    position: "center",
    icon: "success",
    title: "Su compra ha sido confirmada, muchas gracias.",
    showConfirmButton: true,
    timer: 1500,
  });
}
