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
    return { hora: horaActual, temperatura: temperatura };
} // ()
    
// Prueba automática para la función 


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
    
// Prueba automática para la función 


//--------------------------------------------
// main()
//--------------------------------------------

var medidas = []
//
// completar: llamar a tomarMediciones() para que nos devuelva
// 7 medidas de temperatura y guardar lo que nos devuelve
// en el ficheor "datos.txt" (habiendo convertido los datos
// a JSON previamente)
//
var resultado = tomarMediciones(7,medidas, function(mediciones){
    if(medidas.length!=7){
        console.log("Esta mal")
    }
});
var texto = JSON.stringify(resultado);

// Importa el módulo 'fs' (File System) proporcionado por Node.js
var fs = require( "fs" ) 

// Escribe en el archivo "hola.txt" el contenido "hola mundo"
fs.writeFile( "datos.txt", texto, function( err ) {
    // Comprueba si hubo un error al escribir en el archivo
    if( err ) {
        console.log( "hubo un problema al escribir en hola.txt" )
    }
})

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------