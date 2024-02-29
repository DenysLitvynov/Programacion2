//
// main ()
//
console.log( " antes " )

setTimeout( function() {
    console.log( " pasaron dos segundos " )
}, 2000)

console.log( " después " )

//¿por qué lo último en escribirse en pantalla es “pasaron dos segundos” y no “después”?
//
// porque debido a la función setTimeout el código es asincrono, es decir no se ejecuta seguido,
// la función se ejecuta tras pasar los 2 segundos indicados 

setTimeout ( function () {
    console.log (" hola 1 ");
}, 2000 )

setTimeout ( function () {
    console.log (" hola 2 ");
}, 4000 )

// ¿por qué salen los dos mensajes al mismo tiempo?
//
// porque para ambas funciones se ha indicado el tiempo de espera de 2 segundos