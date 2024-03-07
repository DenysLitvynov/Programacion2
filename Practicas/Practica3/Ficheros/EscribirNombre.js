//
// Archivo: EscribirNombre.js
// Descripción: Prueba los anteriores ejemplos.
// Fecha: 07/03/2024
// Nombre: Denys Litvynov

var fs = require( "fs" ) 

fs.writeFile( "nombre.txt", "Denys Litvynov", function( err ) {
    if( err ) {
        console.log( "hubo un problema al escribir en nombre.txt" )
    }
})

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------