//
// Archivo: HacerCalculos.js
// Descripción: Diseña e implementa un programa que a partir de la información guardada en el fichero "datos.txt" calcule
// la media de las temperaturas guardadas y cuál es la máxima y la mínima temperatura registrada y las horas en que se produjeron.
// Fecha: 19/03/2024
// Nombre: Denys Litvynov 
//

//--------------------------------------------
// nombreFicheroTexto: Texto -> leerArchivoDeTexto() -> objetoRes: Lista<JSON{ hora: N, temperatura: R }
//--------------------------------------------
function leerArchivoDeTexto(nombreFicheroTexto, callback){
    var fs = require("fs");
    fs.readFile(nombreFicheroTexto, "utf8", function(err, contenido){
        if(err){
            callback(null,err);
        }else{
            callback(JSON.parse(contenido),null);
        }
    })
}// ()

//--------------------------------------------
//--------------------------------------------

//--------------------------------------------
// objeto: Lista<JSON{ hora: N, temperatura: R } -> 
// calcularTemperaturaMedia() -> temperaturaMedia: R
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
    if(resultado !== "17.01"){
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
    if(resultado.hora !== '10:15:21' || resultado.temperatura !== '18.75'){
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
    if(resultado.hora !== '10:15:24' || resultado.temperatura !== '15.14'){
        console.log("calcularTemperaturaMinima() esta mal")
    }
}

//--------------------------------------------
// main()
//--------------------------------------------

leerArchivoDeTexto("datos.txt", function(datos, err){
    if(err){
        console.log("Ha habido un error" + err);
    }else{
        probarCalcularTemperaturaMedia(datos);
        probarCalcularTemperaturaMaxima(datos);
        probarCalcularTemperaturaMinima(datos);
    }
});

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------