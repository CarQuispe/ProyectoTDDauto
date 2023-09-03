import createGrid from "./autoControlador.js";
import { crearCarro } from "./carro.js";


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
  for (let i = 0; i < 5; i++) { // Tamaño de ejemplo (5x5), puedes ajustarlo según tu necesidad
    const row = document.createElement("tr");
    for (let j = 0; j < 5; j++) { // Tamaño de ejemplo (5x5), puedes ajustarlo según tu necesidad
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
    // Crea un objeto Carro con la posición ingresada
    const [x, y, direccion] = parsePosicion(posicion); // Implementa la función parsePosicion
    const car = crearCarro(x, y, direccion);

    // Actualiza el grid con la nueva posición del carro
    renderGrid(car);

  } catch (error) {
    // Maneja los errores, por ejemplo, mostrando un mensaje de error al usuario
    alert("Error: " + error.message);
  }
});

// Función para analizar la posición ingresada por el usuario
function parsePosicion(posicion) {
  // Implementa la lógica para analizar la posición y separar x, y y dirección
  // Ejemplo: "1,2 N" -> [1, 2, "N"]
  const partes = posicion.split(" ");
  if (partes.length !== 2) {
    throw new Error("Formato de posición incorrecto.");
  }
  const [x, y] = partes[0].split(",").map(Number);
  const direccion = partes[1];
  return [x, y, direccion];
}
