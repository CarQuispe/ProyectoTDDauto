// Definición de la clase Carro
class Carro {
  constructor(x, y, direccion) {
    this.x = x;
    this.y = y;
    
    if (direccion === 'E' || direccion === 'O' || direccion === 'N' || direccion === 'S') {
      this.direccion = direccion;
    } else {
      throw new Error('Dirección no válida. Debe ser E, O, N o S.');
    }
  }
}

// Función para crear un carro
function crearCarro(x, y, direccion) {
  return new Carro(x, y, direccion);
}

// Exportar la función y la clase
module.exports = { crearCarro, Carro };

