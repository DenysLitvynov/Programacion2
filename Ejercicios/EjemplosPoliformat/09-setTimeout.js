
//--------------------------------------------------
// node 01.2-mainPorDosAsincrono.js
//--------------------------------------------------

//--------------------------------------------------
//
// Numero -> porDos() -> Numero
//
//
// (Versión asíncrona. Pero el diseño es el mismo siempre)
//
//--------------------------------------------------
function pp() {
   setTimeout (
	function () {console.log( "hola" ) } ,
	2000
   )
   console.log( "Fin del final" )
} // ()

//--------------------------------------------------
// main ()
//--------------------------------------------------

//
// Calculamos (25·2) + (8·2)
// llamando dos veces a porDos().
//
// Sale la famosa "pyramid of doom" o "callback hell"
//
pp()








