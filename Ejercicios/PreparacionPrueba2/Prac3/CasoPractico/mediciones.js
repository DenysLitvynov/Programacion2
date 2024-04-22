//
// Archivo: mediciones.js
// Descripción: Vamos a escribir un programa que simule obtener medidas de temperatura y las guarde en un fichero de texto; y otro que 
// abra el fichero con las temperaturas guardadas y calcule la media de las temperaturas y en qué instante se produjo la máxima y la mínima.
// Fecha: 21/04/2024
// Nombre: Denys Litvynov
//

// –––––––––––––––––––––––––
// medirTemperatura() -> JSON{ hora: N, temperatura: R }
//
// Realiza una medida de temperatura y
// devuelve el valor junto con la hora
// –––––––––––––––––––––––––
function medirTemperatura() {
    // Obtener la hora actual
    const horaActual = new Date().toLocaleTimeString();
    // Generar un valor aleatorio entre 15 y 20 para la temperatura
    const temperatura = Math.random() * (20 - 15) + 15
    // Devolver un objeto JSON con la hora y la temperatura
    return { hora: horaActual, temperatura: temperatura.toFixed(2)};
} // ()
    
// ––––––––––––––––––––––––––––-
// cuantas:N -> tomarMediciones() -> Lista<JSON{hora:N, temperatura:R}>
//
// Toma la cantidad de mediciones indicadas llamando
// cada segundo a medirTemperatura()
// ––––––––––––––––––––––––––––-
function tomarMediciones( cuantas, mediciones, callback ) {
    if( cuantas == 0 ) {
        callback( mediciones )
        return
    }
    mediciones.push( medirTemperatura() )
    setTimeout( function() {
        tomarMediciones( cuantas-1, mediciones, callback )
    }, 1000 )
} // ()

// –––––––––––––––––––––––––
// main()
// –––––––––––––––––––––––––
var medidas = []
tomarMediciones(7,medidas, function(medidas){
    console.log(medidas);
    // convertimos el objeto a JSON
    var datos = JSON.stringify(medidas);
    // escribmos el contenido del objeto en el archivo de texto
    var fs = require("fs");
    fs.writeFile("datos.txt", datos, function(err){
        if(err){
            console.log("hubo un problema al escribir en datos.txt")
        }
    })
})// ()

//
// completar: llamar a tomarMediciones() para que nos devuelva
// 7 medidas de temperatura y guardar lo que nos devuelve
// en el ficheor "datos.txt" (habiendo convertido los datos
// a JSON previamente)
//


//--------------------------------------------
//--------------------------------------------
//--------------------------------------------