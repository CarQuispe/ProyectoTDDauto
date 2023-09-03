import createGrid from "./autoControlador.js";

function renderGrid(grid) {
  const gridDiv = document.querySelector("#grid-div");

  gridDiv.innerHTML = "<table>";
  for (let i = 0; i < grid.length; i++) {
    gridDiv.innerHTML += "<tr>";
    for (let j = 0; j < grid[i].length; j++) {
      gridDiv.innerHTML += `<td>${grid[i][j]}</td>`;
    }
    gridDiv.innerHTML += "</tr>";
  }
  gridDiv.innerHTML += "</table>";
}

export default renderGrid;
