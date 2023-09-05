import createGrid from "./autoControlador.js";

export class Carro {
  constructor(x, y, direccion) {
    this.x = x;
    this.y = y;
    this.grid = createGrid(5, 5);
    if (direccion == 'E' || direccion == 'O' || direccion == 'N' || direccion == 'S') {
      this.direccion = direccion;
    } else {
      throw new Error('Dirección no válida. Debe ser E, O, N o S.');
    }
  }
  static parsePosicionInicial(posicionInicial) {
    const partes = posicionInicial.split("/");
    if (partes.length !== 2) {
      throw new Error("Formato de posición inicial incorrecto.");
    }
    const [x, y, direccion] = partes[0].split(",").map((value, index) => {
      if (index === 2) {
        if (!["N", "S", "E", "O"].includes(value)) {
          throw new Error("Dirección no válida. Debe ser N, S, E u O.");
        }
        return value;
      }
      return parseInt(value, 10);
    });

    return [x, y, direccion];
  }
  girarIzquierda() {
    if (this.direccion === "N") {
      this.direccion = "O";
    } else if (this.direccion === "O") {
      this.direccion = "S";
    } else if (this.direccion === "S") {
      this.direccion = "E";
    } else if (this.direccion === "E") {
      this.direccion = "N";
    }
  }

  girarDerecha() {
    if (this.direccion === "N") {
      this.direccion = "E";
    } else if (this.direccion === "E") {
      this.direccion = "S";
    } else if (this.direccion === "S") {
      this.direccion = "O";
    } else if (this.direccion === "O") {
      this.direccion = "N";
    }
  }

  getPosicion() {
    return `${this.x},${this.y} ${this.direccion}`;
  }

  moveForward() {
    if (this.direccion === "N") {
      this.y++;
    } else if (this.direccion === "S") {
      this.y--;
    } else if (this.direccion === "E") {
      this.x++;
    } else if (this.direccion === "O") {
      this.x--;
    }
  }

  // Función para colocar el auto en la matriz
  colocarEnMatriz() {
    if (this.x >= 0 && this.x < this.grid.length && this.y >= 0 && this.y < this.grid[0].length) {
      this.grid[this.x][this.y] = 'A'; // 'A' representa la posición del auto en la matriz
    }
  }

  // Función para mover el auto en la matriz
  moverEnMatriz() {
    this.grid[this.x][this.y] = 0; // Borrar la posición anterior del auto en la matriz
  }
}
