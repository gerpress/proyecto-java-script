const edad = parseInt(prompt("Ingrese su edad"));

while (edad <= 19) {
  alert("Este cálculo es solo para adultos");
  edad = parseInt(prompt("Ingrese una edad mayor o igual a 20"));
}
alert("Usted puede calcular su IMC");

const peso = parseFloat(prompt("Ingrese su peso"));
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

console.log("finaliza el programa");
