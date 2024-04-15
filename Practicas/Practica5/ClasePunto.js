//
// Archivo: ClasePunto.js
// Descripción: Prueba el anterior código
// Fecha: 15/04/2024
// Nombre: Denys Litvynov
//

class Punto {
    // - - - - - - - - - - - - - -
    // x:R, y:R –> f() –>
    // - - - - - - - - - - - - - -
    constructor( x, y ) {
        this.x = x
        this.y = y
    }

    // - - - - - - - - - - - - - -
    // R <– f() <–
    // - - - - - - - - - - - - - -
    getX () {
        return this.x
    }

    // - - - - - - - - - - - - - -
    // R <– f() <–
    // - - - - - - - - - - - - - -
    getY () {
        return this.y
    }

    // - - - - - - - - - - - - - -
    // Punto –> 
    //          f() <– 
    // R <–
    // - - - - - - - - - - - - - -
    distancia( otro ) {
        var dx = this.x - otro.x
        var dy = this.y - otro.y
        return Math.sqrt( (dx*dx) + (dy*dy) )
    }

} // class

// ––––––––––––––––
// main
// ––––––––––––––––

var p1 = new Punto( 0, 0 )
var p2 = new Punto( 3, 4 )
var d = p1.distancia( p2 )
console.log( d )

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------