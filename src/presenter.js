import { createGrid } from "./autoControlador.js";
import { Carro } from "./carro.js";

const carForm = document.querySelector("#car-form");
const gridDiv = document.querySelector("#grid-div");
const posicionFinalParaMostrar = document.querySelector("#posicion-final"); // Elemento para mostrar la posición final
const posicionInicialParaMostrar = document.querySelector("#posicion-inicial"); // Elemento para mostrar la posición inicial
const comandosParaMostrar = document.querySelector("#comandos"); // Elemento para mostrar los comandos

function renderGrid(car) {
  const { x, y, direccion } = car;
  gridDiv.innerHTML = "";

  const table = document.createElement("table");
  const gridSize = 5;

  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < gridSize; j++) {
      const cell = document.createElement("td");
      if (i === y && j === x) {
        cell.textContent = direccion;
      }
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  gridDiv.appendChild(table);
}

function parsePosicion(posicion) {
  const partes = posicion.split("/");
  if (partes.length !== 2) {
    throw new Error("Formato de posición incorrecto.");
  }
  return partes;
}

function parsePosicionInicial(posicionInicial) {
  const [coordenadas, direccion] = posicionInicial.match(/^(\d+,\d+)\s*([NSEW])$/).slice(1);

  if (!["N", "S", "E", "O"].includes(direccion)) {
    throw new Error("Dirección no válida. Debe ser N, S, E u O.");
  }

  const [x, y] = coordenadas.split(",").map(Number);

  return [x, y, direccion];
}

carForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const posicionInput = document.querySelector("#posicion");
  const posicion = posicionInput.value;

  try {
    const [posicionInicial, instrucciones] = parsePosicion(posicion);

    const [x, y, direccionInicial] = parsePosicionInicial(posicionInicial);
    const grid = createGrid(5, 5); // Tamaño de la cuadrícula por defecto
    const car = new Carro(x, y, direccionInicial, grid);

    // Mostrar la posición inicial y los comandos
    posicionInicialParaMostrar.textContent = `Posición inicial: ${posicionInicial}`;
    comandosParaMostrar.textContent = `Comandos: ${instrucciones}`;
    for (const instruccion of instrucciones) {
      if (instruccion === "A") {
        car.moveForward();
      } else if (instruccion === "I") {
        car.girarIzquierda();
      } else if (instruccion === "D") {
        car.girarDerecha();
      }
    }

    renderGrid(car);
     // Mostrar la posición final en el párrafo
     posicionFinalParaMostrar.textContent = `Posición final: ${car.getPosicion()}`;
  } catch (error) {
    alert("Error: " + error.message);
  }
});


