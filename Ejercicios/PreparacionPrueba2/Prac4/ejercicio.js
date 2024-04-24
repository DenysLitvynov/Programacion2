//
// Archivo: ejercicio.js
// Descripción: -----
// Fecha: 24/04/2024
// Nombre: Denys Litvynov
//

//--------------------------------------------
// nombreFichero: Texto -> leerFichero() -> contenidoFichero: Texto | Error
//--------------------------------------------
function leerFichero(nombreFichero){
    var fs = require("fs")
    return new Promise(function (resolve, reject){
        fs.readFile(nombreFichero, "utf8", function(err, contenido){
            if(err) {
                reject("Hubo un error" + err)
            }
            else {
                resolve(contenido)
            }
        })
    })
}//()

//--------------------------------------------
//--------------------------------------------

//--------------------------------------------
// nombreFichero: Texto, contenido: Texto -> escribirTexto() -> 0 | Error
//--------------------------------------------
function escribirFichero(nombreFichero, contenido){
    var fs = require("fs")
    return new Promise(function (resolve, reject){
        fs.writeFile(nombreFichero, contenido, function(err){
            if(err){
                reject("Hubo un error" + err)
            }
            else {
                resolve();
            }
        })
    })
}//()

//--------------------------------------------
//--------------------------------------------

//--------------------------------------------
// nombreOrigen1: Texto, nombreOrigen2: Texto, nombreDestino: Texto 
// -> concatenarFicheros() -> 0 | Error
//--------------------------------------------
async function concatenarFicheros(nombreOrigen1, nombreOrigen2, nombreDestino){
    try {
        let contenidoFichero1 = await leerFichero(nombreOrigen1);
        let contenidoFichero2 = await leerFichero(nombreOrigen2);
        let contenidoConcatenado = contenidoFichero1 + contenidoFichero2;
        await escribirFichero(nombreDestino, contenidoConcatenado);
    } catch (error) {
        return error;
    }
}

//--------------------------------------------
// main()
//--------------------------------------------

function main() {
    try{
        concatenarFicheros("texto1.txt", "texto2.txt", "textoConcat.txt");
    } catch (error) {
        console.log("Ha ocurrido un error" + error)
    }
}
main();

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------