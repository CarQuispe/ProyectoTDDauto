
function createGrid(filas, columnas) {
    const grid = [];
    for (let i = 0; i < filas; i++) {
      for (let j = 0; j < columnas; j++) {
        grid.push([i, j]);
      }
    }
    return grid;
}
export default createGrid; 
