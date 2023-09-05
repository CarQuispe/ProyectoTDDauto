
export function createGrid(filas, columnas) {
  const grid = [];
  for (let i = 0; i < filas; i++) {
    const row = [];
    for (let j = 0; j < columnas; j++) {
      row.push(0); // Inicializa cada celda con 0
    }
    grid.push(row);
  }
  return grid;
}
export default createGrid; 
