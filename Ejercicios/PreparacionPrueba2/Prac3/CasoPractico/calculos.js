//
// Archivo: calculos.js
// Descripción: Vamos a escribir un programa que simule obtener medidas de temperatura y las guarde en un fichero de texto; y otro que 
// abra el fichero con las temperaturas guardadas y calcule la media de las temperaturas y en qué instante se produjo la máxima y la mínima.ç
// Fecha: 21/04/2024
// Nombre: Denys Litvynov
//

/*
Diseña e implementa un programa que a partir de la información guardada en el fichero "datos.txt" calcule
la media de las temperaturas guardadas y cuál es la máxima y la mínima temperatura registrada y las horas
en que se produjeron.
Este programa debe tener una función distinta para realizar cada cálculo: calcular la media, encontrar la
temperatura máxima y su hora; y encontrar la temperatura mínima y su hora
*/ 

//--------------------------------------------
// nombreFichero: Texto -> leerFichero() -> contenidoFichero: JSON{[]}
//--------------------------------------------
function leerFichero(nombreFichero, callback){
    var fs = require("fs")
    fs.readFile(nombreFichero, "utf8", function(err, contenido){
        if(err){
            callback(null,err);
        } else {
            callback(JSON.parse(contenido), null)
        }
    });
}// ()

//--------------------------------------------
//--------------------------------------------

//--------------------------------------------
// datos: JSON[{hora: texto, temperatura: texto}]
// -> calcularTemperaturaMedia() -> media: R
//--------------------------------------------
function calcularTemperaturaMedia(datos){
    let total = datos.reduce(function(acum,elem){
        return acum += elem.temperatura;
    }, 0)
    return total / datos.length;
}// ()

// Prueba automática para la función 
function probarCalcularTemperaturaMedia(datos, esperado){
    const resultado = calcularTemperaturaMedia(datos);
    if(resultado !== esperado){
        console.log("La función calcularTemperaturaMedia esta mal")
    }
}// ()

//--------------------------------------------
//--------------------------------------------

//--------------------------------------------
// funcion para calcular la temperatura maxima
//--------------------------------------------
function calcularTemperaturaMaxima(){

}

// Prueba automática para la función 
function probarCalcularTemperaturaMaxima(){
    
}

//--------------------------------------------
//--------------------------------------------

//--------------------------------------------
// funcion para calcular la temperatura maxima
//--------------------------------------------
function calcularTemperaturaMinima(){

}

// Prueba automática para la función 
function probarCalcularTemperaturaMinima(){
    
}

//--------------------------------------------
// main()
//--------------------------------------------

leerFichero("datos.txt", function(datos, error){
    if(error){
        console.log("error")
    } else {
        probarCalcularTemperaturaMedia(datos, 17.4);
    }
})

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------