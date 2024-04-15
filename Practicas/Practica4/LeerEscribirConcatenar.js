//
// Archivo: LeerEscribirConcatenar.js
// Descripción: Escribe un programa que tenga funciones para leer, escribir y concatenar ficheros
// Fecha: 15/04/2024
// Nombre: Denys Litvynov
//

//--------------------------------------------
// nombreFichero: Texto -> leerFichero() -> contenidoFichero: Texto | Error 
//--------------------------------------------
function leerFichero(nombreFichero){
    var fs = require("fs")
    return new Promise(function (resolve, reject) {
        fs.readFile(nombreFichero, "utf8", function(err, contenido) {
            if(err) {
                reject("Hubo un error" + err)
            }
            else {
                console.log("Fichero leido")
                resolve(contenido)
            }
        })
    })
}

//--------------------------------------------
//--------------------------------------------

//--------------------------------------------
// nombreFichero: Texto , contenido: Texto -> escribirTexto() -> 0 | Error
//--------------------------------------------
function escribirFichero(nombreFichero, contenido){
    var fs = require("fs")
    return new Promise(function (resolve, reject) {
        fs.writeFile(nombreFichero, contenido, function(err){
            if(err){
                reject("Hubo un error" + err)
            }
            else {
                console.log("Fichero escrito")
                resolve()
            }
        })
    })
}

// Prueba automática para la función 


//--------------------------------------------
//--------------------------------------------

//--------------------------------------------
// nombreOrigen1: Texto, nombreOrigen2: Texto, nombreOrigen3: Texto -> concatenarFicheros() -> 0 | Error
//--------------------------------------------


// Prueba automática para la función 


//--------------------------------------------
//--------------------------------------------

//--------------------------------------------
// main()
//--------------------------------------------



//--------------------------------------------
//--------------------------------------------
//--------------------------------------------