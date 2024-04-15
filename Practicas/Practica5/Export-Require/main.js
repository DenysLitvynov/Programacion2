//
// Archivo: main.js
// Descripción: pruebas para funciones de bib.js y punto.js
// Fecha: 15/04/2024
// Nombre: Denys Litvynov
//

// ––––––––––––––-
// requires
// ––––––––––––––-
var bib = require( "./bib.js" )
const Punto = require( "./punto.js" )

// ––––––––––––––-
// main ()
// ––––––––––––––-
var a = bib.porDos( 8 )
console.log( a )
console.log( bib.porTres( 3 ) )

var p1 = new Punto( 3, 4 )
var p2 = new Punto( 1, 1 )
console.log( p1.getX() )

var pPrueba = p1.diferencia(p2);
console.log(pPrueba.getX(),pPrueba.getY());

if(pPrueba.getX() != 2 || pPrueba.getY() != 3){
    console.log("El metodo diferencia esta mal");
}


//--------------------------------------------
//--------------------------------------------
//--------------------------------------------