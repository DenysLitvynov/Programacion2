//
// Archivo: EjemploFichero.js
// Descripción: Prueba los anteriores ejemplos.
// Fecha: 07/03/2024
// Nombre: Denys Litvynov
//

var fs = require( "fs" )
fs.writeFile( "hola.txt", "hola mundo", function( err ) {
    if( err ) {
        console.log( "hubo un problema al escribir en hola.txt" )
    }
})

var fs = require( "fs" )
fs.readFile( "hola.txt", "utf8", function( err, contenido ) {
    if( err ) {
        console.log( "hubo un problema al leer de hola.txt" )
        return
    }
    console.log( contenido )
})


//--------------------------------------------
//--------------------------------------------
//--------------------------------------------