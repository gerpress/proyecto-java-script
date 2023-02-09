// let edad = parseInt(prompt("Ingrese su edad"));

// while (edad <= 19) {
//   alert("Este cálculo es solo para adultos");
//   edad = parseInt(prompt("Ingrese una edad mayor o igual a 20"));
// }
// alert("Usted puede calcular su IMC");

// const peso = parseFloat(prompt("Ingrese su peso"));
// const altura = parseFloat(prompt("Ingrese su altura"));
// const espacio = " ";

// const IMC = peso / (altura * altura);
// alert("Su IMC es:" + espacio + IMC);

// if (IMC < 18.5) {
//   alert("Se encuentra dentro del rango de peso insuficiente");
// } else if (IMC > 18.5 && IMC < 24.9) {
//   alert("se encuentra dentro del rango de peso normal o saludable");
// } else if (IMC > 25.0 && IMC < 29.9) {
//   alert("se encuentra dentro del rango de sobrepeso");
// } else if (IMC >= 30) {
//   alert("se encuentra dentro del rango de sobrepeso");
// }

// console.log("finaliza el programa");

//CALCULO DE IMC

// function Usuario(edad, peso, altura) {
//   this.edad = edad;
//   this.peso = peso;
//   this.altura = altura;
// }

// let edad = parseInt(prompt("Ingrese una edad mayor o igual a 20"));

// while (edad <= 19) {
//   alert("Este cálculo es solo para adultos");
//   edad = parseInt(prompt("Ingrese una edad mayor o igual a 20"));
// }
// alert("Usted puede calcular su IMC");

// const peso = parseInt(prompt("Ingrese su peso en kg"));
// const altura = parseFloat(prompt("Ingrese su altura"));
// const espacio = " ";

// const IMC = peso / (altura * altura);
// alert("Su IMC es:" + espacio + IMC);

// if (IMC < 18.5) {
//   alert("Se encuentra dentro del rango de peso insuficiente");
// } else if (IMC > 18.5 && IMC < 24.9) {
//   alert("se encuentra dentro del rango de peso normal o saludable");
// } else if (IMC > 25.0 && IMC < 29.9) {
//   alert("se encuentra dentro del rango de sobrepeso");
// } else if (IMC >= 30) {
//   alert("se encuentra dentro del rango de sobrepeso");
// }

// const datosUsuario = new Usuario(edad, peso, altura);

// console.log(datosUsuario);
// console.log("finaliza el programa");

//CLASES PRODUTOS

class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.vendido = false;
    this.subtotal = 0;
  }

  sumaEnvio() {
    this.precio = this.precio + costoDelEnvio;
  }
}

const Productos = [new Producto("MUSCLE MAX X 90 TBS", 1820, 4), new Producto("ULTRA MASS X 1500 GRS", 4680, 4), new Producto("CREATINA MICRONIZADA X 300 GRS", 7500, 4), new Producto("PRE WAR (CON CAFEINA)", 3850, 4), new Producto("WHEY X PRO - 1 LB", 4320, 4), new Producto("WHEY PROTEIN TRUE MADE X 2.05 LB", 6500, 4)];

console.log(Productos);

//FUNCIONES

function obtenerProducto(nombre) {
  return Productos.find((Producto) => {
    return Producto.nombre === nombre;
  });
}

//COMPRA

let productoAComprar = prompt("Ingrese el producto que desea comprar. Ingrese SALIR si quiere salir del programa");

while (productoAComprar !== "SALIR") {
  const Productos = obtenerProducto(productoAComprar);

  console.log(Productos);
  //   if (Productos !== undefined) {
  //     let cantidadDeProductos = parseInt(prompt("Ingrese la cantidad que desea comprar:"));

  //     while (cantidadDeProductos <= 0) {
  //       cantidadDeProductos = parseInt(prompt("Ingrese la cantidad que desea comprar:"));
  //     }
  //   } else "Producto Inválido";

  //   //SE LE VUELVE A PEDIR QUE INFRESE UN PRODUCTO
  //   productoAComprar = prompt("Ingrese el producto que desea comprar. Ingrese SALIR si quiere salir del programa");
}

// //COSTO POR ZONA ENVIO

// const zonaDeEnvio = prompt("Ingrese el lugar donde quiere recibir los productos para calcular el envio:");

// let costoDelEnvio = 0;

// switch (zonaDeEnvio) {
//   case "Ciudad de Buenos Aires":
//     costoDelEnvio = 1200;
//     break;

//   default:
//     costoDelEnvio = 3500;
//     break;
// }

// console.log("El costo del envio es: $" + costoDelEnvio);

// //FUNCIONES

// function obtenerProducto(cantidad) {
//   return Productos.find((Producto) => {
//     return Producto.cantidad === cantidad;
//   });
// }

// function subtotal() {
//   for (const Producto of Productos) {
//     Producto.sumaEnvio();
//     Producto.subtotal = Producto.precio + costoDelEnvio * Producto.cantidad;
//     Producto.vendido = true;
//   }
// }

// subtotal();

// // const total = calcularTotalProducto(Producto, cantidadDeProductos);
