const calcularIMC = () => {
  let inputEdad = document.getElementById("edad");
  const inputPeso = document.getElementById("peso");
  const inputAltura = document.getElementById("altura");
  const resultado = document.getElementById("resultadoImc");
  let edad = parseInt(inputEdad.value);
  const peso = parseFloat(inputPeso.value);
  const altura = parseFloat(inputAltura.value);

  // Valido la edad
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

  // Calcular el IMC con los datos del usuario
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

// Obtengo el formulario
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (event) => {
  event.preventDefault();
});

// Obtengo el boton calcular
const btnCalcular = document.getElementById("calcular");
btnCalcular.addEventListener("click", calcularIMC);
