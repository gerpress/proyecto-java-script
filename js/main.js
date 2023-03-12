//CLASES PRODUTOS

class Producto {
  constructor(nombre, descripcion, imagen, precio) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.precio = precio;
  }
}

class ProductoCarrito {
  constructor(nombre, precio, cantidad = 1) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }
}

const sectionProductos = document.getElementById("section-productos"); // obtener elemento section
document.body.append(sectionProductos);

const numerito = document.getElementById("numerito");

// CARGAR LOS PRODUCTOS Y OBTENER ELEMENTOS

function cargarProductos(listaDeProductos) {
  listaDeProductos.innerHTML = "";

  for (const productoDeLista of listaDeProductos) {
    const listaProductos = document.getElementById("listaProductos"); // Obtengo elemento div
    sectionProductos.append(listaProductos);

    const divCol = document.getElementById("divCol"); // Obtengo elemento div
    listaProductos.append(divCol);

    const divProducto = document.getElementById("divProducto"); // Obtengo elemento div
    divCol.append(divProducto);

    const imagenProducto = document.getElementById("productoImagen"); // Obtengo elemento img
    imagenProducto.src = productoDeLista.imagen;
    divProducto.append(imagenProducto);

    const divProductoDetalles = document.getElementById("divProductoDetalles"); // Obtengo elemento div
    divProducto.append(divProductoDetalles);

    const tituloProducto = document.getElementById("tituloProducto"); // Obtengo elemento h5
    tituloProducto.innerHTML = productoDeLista.nombre;
    divProductoDetalles.append(tituloProducto);

    const descripcionProducto = document.getElementById("descripcionProducto"); // Obtengo elemento p
    descripcionProducto.innerHTML = productoDeLista.descripcion;
    divProductoDetalles.append(descripcionProducto);

    const precioProducto = document.getElementById("precioProducto"); // Obtengo elemento h2
    precioProducto.innerHTML = `$${productoDeLista.precio}`;
    divProductoDetalles.append(precioProducto);

    const botonAgregar = document.getElementById("botonAgregar"); // Obtengo elemento button

    divProductoDetalles.append(botonAgregar);
    botonAgregar.addEventListener("click", () => {
      agregarAlCarrito(productoDeLista);
    });
  }
}

// OBTENGO PRODUCTOS DEL JSON

function obtenerProductosDelJSON() {
  fetch("./productos.json")
    .then((response) => response.json())
    .then((productosJSON) => {
      for (const productoJSON of productosJSON) {
        productos.push(new Producto(productoJSON.nombre, productoJSON.descripcion, productoJSON.imagen, productoJSON.precio, productoJSON.stock));
      }

      cargarProductos(productos);
    });
}

// AGREGO PRODUCTO AL CARRITO

function agregarAlCarrito(productoAAgregar) {
  const productoEnCarrito = carrito.findIndex((prodcutoCarrito) => prodcutoCarrito.nombre === productoAAgregar.nombre);

  if (productoEnCarrito === -1) {
    carrito.push(new ProductoCarrito(productoAAgregar.nombre, productoAAgregar.precio));
  } else {
    carrito[productoEnCarrito].cantidad++;
  }

  actualizarNumerito();

  // Agrego los productos del carrito al localstorage
  localStorage.setItem("productos-en-carrito", JSON.stringify(carrito));
}

obtenerProductosDelJSON();

let productos = [];
let carrito;

// Obtengo los productos del localstorage
let productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));
// lo comparo para que se actualice el numerito
if (productosEnCarritoLS) {
  carrito = productosEnCarritoLS;
  actualizarNumerito();
} else {
  carrito = [];
}

// ACTUALIZAR NUMERITO DEL HEADER

function actualizarNumerito() {
  let nuevoNumerito = carrito.reduce((acc, productos) => acc + productos.cantidad, 0);
  numerito.innerText = nuevoNumerito;
}
