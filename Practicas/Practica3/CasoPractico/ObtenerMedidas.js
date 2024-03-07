//
// Archivo: ObtenerMedidas.js
// Descripción: escribir un programa que simule obtener medidas de temperatura y las guarde en un fichero de texto;
// Fecha: 07/03/2024
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
    const temperatura = Math.random() * (20 - 15) + 15;
    // Devolver un objeto JSON con la hora y la temperatura
    return { hora: horaActual, temperatura: temperatura.toFixed(2)};
} // ()

//--------------------------------------------
//--------------------------------------------

// ––––––––––––––––––––––––––––-
// cuantas:N -> tomarMediciones() -> Lista<JSON{hora:N, temperatura:R}>
//
// Toma la cantidad de mediciones indicadas llamando
// cada segundo a medirTemperatura()
// ––––––––––––––––––––––––––––-
function tomarMediciones( cuantas, mediciones, callback ) {
    // si llega a 0 se para ya que ya se habran tomado todas las medidas necesarias y se devuelve el resultado con callback
    if( cuantas == 0 ) {
        callback( mediciones )
        return
    }
    mediciones.push( medirTemperatura() ) // en cada iteración en mediciones se almacena una medición
    setTimeout( function() { // setTimeout para que sea asincrona y las mediciones se tomen cada segundo
        tomarMediciones( cuantas-1, mediciones, callback ) // llamada recursiva hasta que cuantos = 0
    }, 1000 )
} // ()

//--------------------------------------------
// main()
//--------------------------------------------

var medidas = []

tomarMediciones(7, medidas, function(mediciones) {
    // Almacenar las mediciones en el archivo "datos.txt" en formato JSON
    var texto = JSON.stringify(mediciones);
    var fs = require("fs");
    fs.writeFile("datos.txt", texto, function(err) {
        if (err) {
            console.log("hubo un problema al escribir en datos.txt");
        }
    });
});

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------