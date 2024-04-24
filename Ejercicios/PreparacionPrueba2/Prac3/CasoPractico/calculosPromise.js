//
// Archivo: calculosConPromise.js
// Descripción: -----
// Fecha: 24/04/2024
// Nombre: Denys Litvynov
//

//--------------------------------------------
// nombreFichero: Texto -> leerFichero() -> datos:[{hora: texto, temperatura: texto}] | Error
//--------------------------------------------
function leerFichero(nombreFichero){
    var fs = require("fs");
    return new Promise(function(resolve, reject){
        fs.readFile(nombreFichero, "utf8", function(err, contenido){
            if(err){
                reject("Hubo un error" + err)
            } else {
                resolve(JSON.parse(contenido))
            }
        })
    })
}// ()

//--------------------------------------------
//--------------------------------------------

//--------------------------------------------
// datos: JSON[{hora: texto, temperatura: texto}]
// -> calcularTemperaturaMedia() -> media: R
//--------------------------------------------
function calcularTemperaturaMedia(datos){
    const temperaturaMedia = datos.reduce(function(acum, elem){
        // Convierte la temperatura a un número decimal antes de sumarla
        return acum + parseFloat(elem.temperatura);
    }, 0) / datos.length;
    return temperaturaMedia.toFixed(2); // Redondea el resultado a 2 decimales
}

// Prueba automática para la función 
function probarCalcularTemperaturaMedia(datos){
    const resultado = calcularTemperaturaMedia(datos);
    console.log("La temperatura media es: " + resultado);
    if(resultado !== '16.87'){
        console.log("calcularTemperaturaMedia() esta mal");
    }
}// ()

//--------------------------------------------
//--------------------------------------------

//--------------------------------------------
// objeto: Lista<JSON{ hora: N, temperatura: R } 
//      -> calcularTemperaturaMaxima() -> 
// objetoMaxima: JSON{hora: N , temperatura: R}
//--------------------------------------------
function calcularTemperaturaMaxima(datos){
    const temperaturaMaxima = datos.reduce(function(acum,elem){
        if(acum.temperatura < elem.temperatura){
            acum.temperatura = elem.temperatura;
            acum.hora = elem.hora;
        }
        return acum;
    },{hora: ' ', temperatura: -Infinity});
    return temperaturaMaxima;
}// ()

// Prueba automática para la función 
function probarCalcularTemperaturaMaxima(datos){
    const resultado = calcularTemperaturaMaxima(datos);
    console.log(resultado);
    if(resultado.hora !== '18:05:42' || resultado.temperatura !== '18.36'){
        console.log("calcularTemperaturaMaxima() esta mal")
    }
}// ()

//--------------------------------------------
//--------------------------------------------

//--------------------------------------------
// objeto: Lista<JSON{ hora: N, temperatura: R } 
//       -> calcularTemperaturaMinima() -> 
// objetoMinima: JSON{hora: N , temperatura: R}
//--------------------------------------------
function calcularTemperaturaMinima(datos){
    const temperaturaMinima = datos.reduce(function(acum,elem){
        if(acum.temperatura > elem.temperatura){
            acum.temperatura = elem.temperatura;
            acum.hora = elem.hora;
        }
        return acum;
    },{hora: ' ', temperatura: Infinity});
    return temperaturaMinima;
}

// Prueba automática para la función 
function probarCalcularTemperaturaMinima(datos){
    const resultado = calcularTemperaturaMinima(datos);
    console.log(resultado);
    if(resultado.hora !== '18:05:44' || resultado.temperatura !== '15.29'){
        console.log("calcularTemperaturaMinima() esta mal")
    }
}

//--------------------------------------------
// main()
//--------------------------------------------

async function main(){
    var datos = await leerFichero("datos.txt");
    probarCalcularTemperaturaMedia(datos);
    probarCalcularTemperaturaMaxima(datos);
    probarCalcularTemperaturaMinima(datos);
}   
main();

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------