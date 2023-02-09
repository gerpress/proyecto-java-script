//CALCULO DE IMC

function Usuario(edad, peso, altura) {
  this.edad = edad;
  this.peso = peso;
  this.altura = altura;
}

let edad = parseInt(prompt("Ingrese una edad mayor o igual a 20"));

while (edad <= 19) {
  alert("Este cálculo es solo para adultos");
  edad = parseInt(prompt("Ingrese una edad mayor o igual a 20"));
}
alert("Usted puede calcular su IMC");

const peso = parseInt(prompt("Ingrese su peso en kg"));
const altura = parseFloat(prompt("Ingrese su altura"));
const espacio = " ";

const IMC = peso / (altura * altura);
alert("Su IMC es:" + espacio + IMC);

if (IMC < 18.5) {
  alert("Se encuentra dentro del rango de peso insuficiente");
} else if (IMC > 18.5 && IMC < 24.9) {
  alert("se encuentra dentro del rango de peso normal o saludable");
} else if (IMC > 25.0 && IMC < 29.9) {
  alert("se encuentra dentro del rango de sobrepeso");
} else if (IMC >= 30) {
  alert("se encuentra dentro del rango de sobrepeso");
}

const datosUsuario = new Usuario(edad, peso, altura);

console.log(datosUsuario);
console.log("finaliza el programa");

//CLASES PRODUTOS

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.vendido = false;
  }
}

//FUNCIONES

function obtenerProducto(nombre) {
  return listaDeProductos.find((producto) => producto.nombre === nombre);
}

const listaDeProductos = [new Producto("MUSCLE MAX X 90 TBS", 1820), new Producto("ULTRA MASS X 1500 GRS", 4680), new Producto("CREATINA MICRONIZADA X 300 GRS", 7500), new Producto("PRE WAR (CON CAFEINA)", 3850), new Producto("WHEY X PRO - 1 LB", 4320), new Producto("WHEY PROTEIN TRUE MADE X 2.05 LB", 6500)];

let productoAComprar = prompt("Ingrese el producto que desea comprar. Ingrese SALIR si no desea agregar mas productos");

while (productoAComprar !== "SALIR") {
  let producto = obtenerProducto(productoAComprar);

  console.log(producto);

  let costoDelEnvio = 0;

  if (producto !== undefined) {
    //COSTO POR ZONA ENVIO

    const zonaDeEnvio = prompt("Ingrese el lugar donde quiere recibir los productos para calcular el envio:");

    switch (zonaDeEnvio) {
      case "Ciudad de Buenos Aires":
        costoDelEnvio = 1200;
        break;

      default:
        costoDelEnvio = 3500;
        break;
    }

    console.log("El costo del envio es: $" + costoDelEnvio);
  }

  productoAComprar = prompt("Ingrese el producto que desea comprar. Ingrese SALIR si quiere salir del programa");

  let total = 0;
  for (let producto of listaDeProductos) {
    total += producto.precio + costoDelEnvio;
  }

  console.log("Total a pagar:" + total);

  // subtotal();

  // function subtotal() {
  //   for (const producto of listaDeProductos) {
  //     Producto.sumaEnvio();
  //     Producto.subtotal = producto.precio + costoDelEnvio;
  //     Producto.vendido = true;
  //   }
  // }
}
