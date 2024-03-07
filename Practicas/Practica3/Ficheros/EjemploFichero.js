//
// Archivo: EjemploFichero.js
// Descripción: Prueba los anteriores ejemplos.
// Fecha: 07/03/2024
// Nombre: Denys Litvynov

// Importa el módulo 'fs' (File System) proporcionado por Node.js
var fs = require( "fs" ) 

// Escribe en el archivo "hola.txt" el contenido "hola mundo"
fs.writeFile( "hola.txt", "hola mundo", function( err ) {
    // Comprueba si hubo un error al escribir en el archivo
    if( err ) {
        console.log( "hubo un problema al escribir en hola.txt" )
    }
})

// Lee el contenido del archivo "hola.txt" codificado en UTF-8
fs.readFile( "hola.txt", "utf8", function( err, contenido ) {
    // Comprueba si hubo un error al leer el archivo
    if( err ) {
        console.log( "hubo un problema al leer de hola.txt" )
        return
    }
    // Muestra el contenido leído del archivo en la consola
    console.log( contenido )
})


//--------------------------------------------
//--------------------------------------------
//--------------------------------------------