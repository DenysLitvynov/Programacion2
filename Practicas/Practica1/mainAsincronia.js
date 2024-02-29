//
// Archivo: mainAsincronia.js
// Descripción: Prueba de un código dado de ejemplo para entender el funcionamiento del setTimeOut()
// Fecha: 29/02/2024
// Nombre: Denys Litvynov
//

//
// main ()
//
console.log( " antes " )

setTimeout( function() {
    console.log( " pasaron dos segundos " )
}, 2000)

console.log( " después " )

/* -------------------------------------------------------------------------------------
-¿por qué lo último en escribirse en pantalla es “pasaron dos segundos” y no “después”?

-Por que al utilizar el setTimeout, el contenido que tiene dentro se ejecuta tras pasar 2 segundos,
a su vez el console.log(despues) se ejecuta de inmediato 
------------------------------------------------------------------------------------- */

setTimeout ( function () {
    console.log (" hola 1 ");
    }, 2000 )

setTimeout ( function () {
    console.log (" hola 2 ");
    }, 4000 )

/* -------------------------------------------------------------------------------------
- ¿por qué salen los dos mensajes al mismo tiempo?

- Debido a que los console.log están programados para ejecutarse tras pasar 2 segundos
------------------------------------------------------------------------------------- */

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------