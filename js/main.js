// //CALCULO DE IMC

// function Usuario(edad, peso, altura) {
//   this.edad = edad;
//   this.peso = peso;
//   this.altura = altura;
// }

const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  let inputEdad = document.getElementById("Edad");
  const inputPeso = document.getElementById("Peso");
  const inputAltura = document.getElementById("Altura");
  const resultado = document.getElementById("resultadoImc");

  //Obtengo los input

  let edad = parseInt(inputEdad.value);
  const peso = parseFloat(inputPeso.value);
  const altura = parseFloat(inputAltura.value);

  while (edad <= 19) {
    alert("Este cálculo es solo para adultos, ingrese una edad mayor a 20");
    inputEdad.value = "";
    return;
  }
  alert("Usted puede calcular su IMC");

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
});

// const datosUsuario = new Usuario(edad, peso, altura);

// console.log(datosUsuario);
// console.log("finaliza el programa");

//CLASES PRODUTOS

class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }
}

let listaDeProductos = [new Producto("MUSCLE MAX X 90 TBS", 1820, 6), new Producto("ULTRA MASS X 1500 GRS", 4680, 8), new Producto("CREATINA MICRONIZADA X 300 GRS", 7500, 10), new Producto("PRE WAR (CON CAFEINA)", 3850, 5), new Producto("WHEY X PRO - 1 LB", 4320, 4), new Producto("WHEY PROTEIN TRUE MADE X 2.05 LB", 6500, 7)];

//FUNCIONES

function agregarAlCarrito(carrito, nombre, cantidad) {
  // Buscar el producto en la lista de productos
  let producto = listaDeProductos.find((producto) => producto.nombre === nombre);

  // Validar que el producto exista y que haya suficiente stock
  if (producto && producto.cantidad >= cantidad) {
    // Agregar el producto al carrito
    carrito.push({ nombre, cantidad, precio: producto.precio });
    // Actualizar el stock del producto
    producto.cantidad -= cantidad;
    console.log(`Se agregó ${cantidad} ${nombre} al carrito.`);
  } else {
    console.log(`No hay suficiente stock de ${nombre}.`);
  }
}

// Calcular el costo de envío
function calcularCostoEnvio(ciudad) {
  let costo = 0;
  switch (ciudad) {
    case "Ciudad de Buenos Aires":
      costo = 1200;
      break;

    default:
      costo = 3500;
  }
  return costo;
}

// INICIA PROGRAMA

let carrito = [];

let continuarComprando = true;
while (continuarComprando) {
  let productoAComprar = prompt("Ingrese el producto que desea comprar:");
  let cantidadDeProducto = parseInt(prompt("Ingrese la cantidad que desea comprar:"));
  agregarAlCarrito(carrito, productoAComprar, cantidadDeProducto);

  let continuar = prompt("¿Desea seguir comprando? (s/n)");
  continuarComprando = continuar === "s";
}
// Pedir al usuario que ingrese la ciudad de envío
let ciudadEnvio = prompt("Ingrese la ciudad de envío:");

// Calcular el costo de envío
let costoEnvio = calcularCostoEnvio(ciudadEnvio);

carrito.forEach((producto) => {
  console.log(`- ${producto.cantidad} ${producto.nombre}(s) a S/ ${producto.precio} cada uno.`);
});
console.log(`Costo de envío a ${ciudadEnvio}: S/ ${costoEnvio}`);
let total = carrito.reduce((sum, producto) => sum + producto.cantidad * producto.precio, 0) + costoEnvio;

console.log(total);
