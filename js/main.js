const calcularIMC = () => {
  let inputEdad = document.getElementById("Edad");

  const inputPeso = document.getElementById("Peso");

  const inputAltura = document.getElementById("Altura");

  const resultado = document.getElementById("resultadoImc");

  let edad = parseInt(inputEdad.value);
  const peso = parseFloat(inputPeso.value);
  const altura = parseFloat(inputAltura.value);

  if (edad <= 19) {
    Swal.fire({
      title: "Error!",
      text: "Este cálculo es solo para adultos, ingrese una edad mayor a 20",
      icon: "error",
      confirmButtonText: "ok",
    });

    inputEdad.value = "";
    return;
  }

  const imc = (peso / (altura * altura)).toFixed(2);

  if (imc < 18.5) {
    resultado.innerText = `Su IMC es: ${imc} Se encuentra dentro del rango de peso insuficiente`;
  } else if (imc > 18.5 && imc < 24.99) {
    resultado.innerText = `Su IMC es: ${imc} se encuentra dentro del rango de peso normal o saludable`;
  } else if (imc > 25.0 && imc < 29.99) {
    resultado.innerText = `Su IMC es: ${imc} se encuentra dentro del rango de sobrepeso`;
  } else if (imc >= 30) {
    resultado.innerText = `Su IMC es: ${imc} se encuentra dentro del rango de obesidad`;
  }

  // Almacenar los datos del formulario en localStorage
  const datosFormulario = { edad, peso, altura, imc };
  localStorage.setItem("datosFormulario", JSON.stringify(datosFormulario));
};

const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (event) => {
  event.preventDefault();
});

const btnCalcular = document.getElementById("calcular");
btnCalcular.addEventListener("click", calcularIMC);

//CLASES PRODUTOS

class Producto {
  constructor(nombre, descripcion, imagen, precio, stock) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.precio = precio;
    this.cantidad = stock;
  }
}

let productos = [new Producto("MUSCLE MAX X 90 TBS", "FAVORECE DESARROLLO DE MASA MUSCULAR Y LA RECUPERACIÓN.", "./imagenes/producto-1.png", 1820, 6), new Producto("ULTRA MASS X 1500 GRS", "ALTO EN CALORÍAS PARA EL AUMENTO DE PESO Y LA MASA MUSCULAR", "./imagenes/producto-2.png", 4680, 8), new Producto("CREATINA MICRONIZADA X 300 GRS", "MEJORA LA POTENCIA MUSCULAR. RETRASA LA FATIGA MUSCULAR.", "./imagenes/producto-3.png", 7500, 10), new Producto("PRE WAR (CON CAFEINA)", "ENERGÍA + CONCENTRACIÓN + RESISTENCIA", "./imagenes/producto-4.png", 3850, 5), new Producto("WHEY X PRO - 1 LB", "NUEVA PRESENTACIÓN 1 LIBRA. FÓRMULA MEJORADA.", "./imagenes/producto-5.png", 4320, 4), new Producto("WHEY PROTEIN TRUE MADE X 2.05 LB", "BLEND DE MÁXIMA PUREZA. RÁPIDA ABSORCIÓN Y MÁXIMA CALIDAD.", "./imagenes/producto-6.png", 6500, 7)];

function cargarProductos() {
  const sectionProductos = document.getElementById("section-productos"); // obtener elemento section
  sectionProductos.className = "bg-dark p-5 text-center text-sm-center";
  document.body.append(sectionProductos);

  const listaProductos = document.createElement("div"); // Crear un nuevo elemento div
  listaProductos.className = "row row-cols-1  row-cols-md-3 g-4  lista-productos";
  sectionProductos.append(listaProductos);

  productos.forEach((producto) => {
    const divCol = document.createElement("div"); // Crear un nuevo elemento div
    divCol.className = "col ";
    listaProductos.append(divCol);

    const divProducto = document.createElement("div"); // Crear un nuevo elemento div
    divProducto.className = "card  h-100  bg-secondary producto";
    divCol.append(divProducto);

    const imagenProducto = document.createElement("img"); // Crear un nuevo elemento img
    imagenProducto.src = producto.imagen;
    imagenProducto.className = "card-img-top producto-imagen";
    divProducto.append(imagenProducto);

    const divProductoDetalles = document.createElement("div"); // Crear un nuevo elemento div
    divProductoDetalles.className = "card-body producto-detalles";
    divProducto.append(divProductoDetalles);

    const tituloProducto = document.createElement("h5"); // Crear un nuevo elemento h5
    tituloProducto.className = "card-title text-white producto-titulo";
    tituloProducto.innerHTML = producto.nombre;
    divProductoDetalles.append(tituloProducto);

    const descripcionProducto = document.createElement("p"); // Crear un nuevo elemento p
    descripcionProducto.className = "card-text producto-descripcion";
    descripcionProducto.innerHTML = producto.descripcion;
    divProductoDetalles.append(descripcionProducto);

    const precioProducto = document.createElement("h2"); // Crear un nuevo elemento h2
    precioProducto.className = "text-white producto-precio";
    precioProducto.innerHTML = `$${producto.precio}`;
    divProductoDetalles.append(precioProducto);

    const botonAgregar = document.createElement("button"); // Crear un nuevo elemento button
    botonAgregar.className = "my-5 btn btn-dark producto-agregar animate__animated animate__pulse";
    botonAgregar.innerText = "Agregar al carrito";
    divProductoDetalles.append(botonAgregar);
  });
}
cargarProductos();
