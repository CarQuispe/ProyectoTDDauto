import createGrid from "./autoControlador.js";
import { crearCarro } from "./carro.js";

describe("crear grit de  posiscion", () => {
    it("Deberia crear la matriz ", ()=>{
        const grid = createGrid(5, 5);
        expect(grid).toEqual([
          [0, 0], [0, 1], [0, 2], [0, 3], [0, 4],
          [1, 0], [1, 1], [1, 2], [1, 3], [1, 4],
          [2, 0], [2, 1], [2, 2], [2, 3], [2, 4],
          [3, 0], [3, 1], [3, 2], [3, 3], [3, 4],
          [4, 0], [4, 1], [4, 2], [4, 3], [4, 4],
        ]);

    })

      
});
//const crearCarro = require("./carro.js");
describe('Crear un auto', () => {
  it('debería crear un auto con posición inicial', () => {
    const car = crearCarro(1, 2, 'N');
    expect(car.x).toBe(1);
    expect(car.y).toBe(2);
    expect(car.direccion).toBe('N'); 
  });

  it('debería crear un auto con posición inicial y señalando Norte', () => {
    const car = crearCarro(1, 2, 'N');
    expect(car.x).toBe(1);
    expect(car.y).toBe(2);
    expect(car.direccion).toBe('N'); 
  });
});



  