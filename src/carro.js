import createGrid from "./autoControlador.js";

export class Carro { // Cambio en la exportación
  constructor(x, y, direccion) {
    this.x = x;
    this.y = y;

    if (direccion == 'E' || direccion == 'O' || direccion == 'N' || direccion == 'S') {
      this.direccion = direccion;
    } else {
      throw new Error('Dirección no válida. Debe ser E, O, N o S.');
    }
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
}




