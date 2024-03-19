//
// Archivo: EjemploTexto.js
// Descripción: 2. Escribe un programa que lea el contenido del fichero “nombre.txt”
// Fecha: 14/03/2024
// Nombre: Denys Litvynov
//

var fs = require( "fs" )
fs.readFile( "nombre.txt", "utf8", function( err, contenido ) {
    if( err ) {
        console.log( "hubo un problema al leer de hola.txt" )
        return
    }
    console.log( contenido )
})

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------