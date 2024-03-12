
//--------------------------------------------------
// node 01-mainPorDos.js
//--------------------------------------------------

//--------------------------------------------------
// Recordemos que hay dos tipos de funciones
// (mútuamente excluyentes):
// 
// 1. las que sólo hacen calculos
//  (reciben valores como parametros y
//   devuelve resultados)
// Nunca escriben en pantalla (salvo depuración,
// cuando ok, se elimina el console.log() )
// Nunca leen de teclado: nunca Jamás.
// 
// 2. Las de entrada salida.
//  Escriben cosas en pantalla (o en ficheros) y leen
//  información del teclado (o de fichero)
// Nunca hacen cálculos. Nunca. Jamás.
// 
//  El que no respete esto: suspendido. ;-)
// 
//--------------------------------------------------

//--------------------------------------------------
//
// Numero -> porDos() -> Numero
//
// ................................
// Numero puede ser Entero, Real
//--------------------------------------------------
function porDos( n ) {
    return n * 2
} // ()

//--------------------------------------------------
// main ()
//--------------------------------------------------

var a = porDos( 8 )

console.log( a )
