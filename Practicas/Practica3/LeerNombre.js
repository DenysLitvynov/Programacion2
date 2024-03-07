//
// Archivo: LeerNombre.js
// Descripción: Prueba los anteriores ejemplos.
// Fecha: 07/03/2024
// Nombre: Denys Litvynov

var fs = require( "fs" ) 

fs.readFile( "nombre.txt", "utf8", function( err, contenido ) {
    if( err ) {
        console.log( "hubo un problema al leer de nombre.txt" )
        return
    }
    console.log( contenido )
})


//--------------------------------------------
//--------------------------------------------
//--------------------------------------------