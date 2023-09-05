import createGrid from "./autoControlador.js";
import { Carro } from "./carro.js";

// Obtén el formulario y el div donde se muestra el grid
const carForm = document.querySelector("#car-form");
const gridDiv = document.querySelector("#grid-div");

// Función para renderizar el grid
function renderGrid(car) {
  // Asegúrate de que tengas información sobre la posición del carro (por ejemplo, propiedades x, y y direccion)
  const { x, y, direccion } = car;

  // Limpia el contenido anterior del div
  gridDiv.innerHTML = "";

  // Crea una tabla para mostrar el grid
  const table = document.createElement("table");
  const gridSize = 5; // Tamaño de la matriz
  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < gridSize; j++) {
      const cell = document.createElement("td");

      // Marca la posición del carro en el grid si coincide con x e y
      if (i === y && j === x) {
        cell.textContent = direccion; // Muestra la dirección del carro en la posición
      }

      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  // Agrega la tabla al div
  gridDiv.appendChild(table);
}

// Agrega un evento de envío al formulario
carForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que se recargue la página

  // Obtiene la posición ingresada por el usuario desde el campo de entrada
  const posicionInput = document.querySelector("#posicion");
  const posicion = posicionInput.value;

  try {
    // Separa las instrucciones del formato dado
    const [tamano, posicionInicial, instrucciones] = parsePosicion(posicion);
    const [gridSizeX, gridSizeY] = tamano.split(",").map(Number);

    // Crea un objeto Carro con la posición inicial
    const [x, y, direccionInicial] = parsePosicionInicial(posicionInicial);
    const car = new Carro(x, y, direccionInicial);

    // Ejecuta las instrucciones en el carro
    for (const instruccion of instrucciones) {
      if (instruccion === "A") {
        car.moveForward();
      } else if (instruccion === "I") {
        car.girarIzquierda();
      } else if (instruccion === "D") {
        car.girarDerecha();
      }
    }

    // Actualiza el grid con la nueva posición del carro
    renderGrid(car);

  } catch (error) {
    // Maneja los errores, por ejemplo, mostrando un mensaje de error al usuario
    alert("Error: " + error.message);
  }
});

// Función para analizar la posición ingresada por el usuario
function parsePosicion(posicion) {
  const partes = posicion.split("/");
  if (partes.length !== 3) {
    throw new Error("Formato de posición incorrecto.");
  }
  return partes;
}

// Función para analizar la posición inicial del carro
function parsePosicionInicial(posicionInicial) {
  const partes = posicionInicial.split(" ");
  if (partes.length !== 2) {
    throw new Error("Formato de posición inicial incorrecto.");
  }
  const [x, y] = partes[0].split(",").map(Number);
  const direccion = partes[1];

  if (!["N", "S", "E", "O"].includes(direccion)) {
    throw new Error("Dirección no válida. Debe ser N, S, E u O.");
  }

  return [x, y, direccion];
}

