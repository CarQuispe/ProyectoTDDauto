import createGrid from "./autoControlador.js";
import { Carro } from "./carro.js";

describe("crear grid de posición", () => {
  it("Debería crear la matriz", () => {
    const grid = createGrid(5, 5);
    expect(grid.length).toBe(5); // Verifica que haya 5 filas
    grid.forEach((row) => {
      expect(row.length).toBe(5); // Verifica que cada fila tenga 5 columnas
      row.forEach((cell) => {
        expect(cell).toBe(0); // Verifica que cada celda tenga el valor 0
      });
    });
  });
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
  it("Debería colocar el auto en la matriz correctamente", () => {
    const grid = createGrid(5, 5); // Crea una matriz de 5x5
    const car = new Carro(1, 1, "N", grid); // Pasa la matriz como argumento al carro
    car.colocarEnMatriz();
    // Verifica que la celda correspondiente en la matriz tenga el valor 'A' después de colocar el auto
    expect(grid[1][1]).toBe("A");
  });
  

});

    




  