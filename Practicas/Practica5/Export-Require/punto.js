//
// Archivo: punto.js
// Descripción: Diseña y añade un nuevo método a la clase Punto (en el fichero Punto.js) que devuelva un nuevo punto el
// cuál sea la diferencia de otros dos a y b, siendo nuevo = ((a.x − b.x),(a.y − b.y)). 
// (Nota: al implementarlo, evidentemente, uno de los puntos será: this.
// Fecha: 15/04/2024
// Nombre: Denys Litvynov
//

// ––––––––––––––––-
// Punto.js
// ––––––––––––––––-

module.exports = class Punto {
    // - - - - - - - - - - - - - - -
    // - - - - - - - - - - - - - - -
    constructor( x, y ) {
        this.x = x
        this.y = y
    }

    // - - - - - - - - - - - - - - -
    // - - - - - - - - - - - - - - -
    getX () {
        return this.x
    }

    // - - - - - - - - - - - - - - -
    // - - - - - - - - - - - - - - -
    getY () {
        return this.y
    }
} // class

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------