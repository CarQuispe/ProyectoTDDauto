import createGrid from "./autoControlador.js";
import { Carro } from "./carro.js";

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
    const car = new  Carro(1, 2, 'N');
    expect(car.x).toBe(1);
    expect(car.y).toBe(2);
    expect(car.direccion).toBe('N'); 
  });

  it('debería crear un auto con posición inicial y señalando Norte', () => {
    const car =  new Carro(1, 2, 'N');
    expect(car.x).toBe(1);
    expect(car.y).toBe(2);
    expect(car.direccion).toBe('N'); 
  });

  it('debería crear un auto con posición inicial y señalando Este', () => {
    const car =  new Carro(1, 2, 'E');
    expect(car.x).toBe(1);
    expect(car.y).toBe(2);
    expect(car.direccion).toBe('E'); 
  });

  it('debería crear un auto con posición inicial y señalando Oeste', () => {
    const car =  new Carro(1, 2, 'O');
    expect(car.x).toBe(1);
    expect(car.y).toBe(2);
    expect(car.direccion).toBe('O'); 
  });
  it('debería crear un auto con posición inicial y señalando Sur', () => {
    const car =  new Carro(1, 2, 'S');
    expect(car.x).toBe(1);
    expect(car.y).toBe(2);
    expect(car.direccion).toBe('S'); 
  });
});

describe("Girar el auto", () => {
  it("Debería girar a la izquierda", () => {
    const car = new Carro(1, 2, 'N'); // Crear un auto en posición (1, 2) mirando al norte
    car.girarIzquierda(); // Función para girar el auto hacia la izquierda
    expect(car.getPosicion()).toEqual("1,2 O");
  });
  it("Debería girar a la izquierda", () => {
    const car = new Carro(1, 2, 'N'); // Crear un auto en posición (1, 2) mirando al norte
    car.girarDerecha(); // Función para girar el auto hacia la Derecha
    expect(car.getPosicion()).toEqual("1,2 E");
  });
});

describe("Girar el auto y avanzar un paso", () => {
  it("Debería girar a la izquierda y avanzar (1,2 N /IA)", () => {
    const car = new Carro(1, 2, 'N'); // Crear un auto en posición (1, 2) mirando al norte
    car.girarIzquierda();// Función para girar el auto hacia la izquierda
    car.moveForward(); //avanzar una posicion 
    expect(car.getPosicion()).toEqual("0,2 O");
  });

});

    




  