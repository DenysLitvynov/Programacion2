//
// Archivo: EjemploTexto.js
// Descripción: 1. Escribe un programa que escriba tu nombre en un fichero de texto llamado “nombre.txt”.
// Fecha: 14/03/2024
// Nombre: Denys Litvynov
//

var fs = require( "fs" )
fs.writeFile( "nombre.txt", "juanba se les menja saanseretes", function( err ) {
    if( err ) {
        console.log( "hubo un problema al escribir en hola.txt" )
    }
})

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------