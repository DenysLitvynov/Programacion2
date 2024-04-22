//
// Archivo: EjemploConPromesa.js
// Descripción: Ejemplo de como sería un caso utilizando las promesas
// Fecha: 19/04/2024
// Nombre: Denys Litvynov
//

//--------------------------------------------
// R -> porDos() -> R (versión con promesa)
//--------------------------------------------
function porDos( n ) {
    var prom = new Promise( function( resolver, rechazar ) {
        setTimeout( function() {
            resolver( n*2 )
        }, 1000)
    })
    return prom
} // ()

//--------------------------------------------
// main()
//--------------------------------------------

// declaramos las variables necesarias
var a
var b
var c

// llamamos a la función porDos(3) para obtener el resultado de la multiplicación en forma de promesa
porDos( 3 ) // pido calcular 2*3 

// sacamos el resultado de la promesa anterior utilizando el metodo .then que ademas devuelve otra promesa nueva
.then( function(r) { // cuando este...
    a = r // guardo el resultado
    return porDos(4) // pido calcular 2*4
})

// sacamos el resultado de la promesa anterior utilizando el metodo .then que ademas devuelve otra promesa nueva
.then( function(r) { // cuando este...
    b = r // guardo el resultado
    return porDos(5) // pido calcular 2*5
})

// sacamos el resultado de la promesa anterior utilizando el metodo .then que ademas devuelve otra promesa nueva
.then( function(r) { // cuando este...
    c = r // guardo el resultado
    return (a+b+c) // hago la suma de todo y devuelvo el valor
})

// sacamos el resultado de la promesa anterior utilizando el metodo .then y lo mostramos por pantalla
.then( function(total){ // cuando este...
    console.log( "total = " + total)
})

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------