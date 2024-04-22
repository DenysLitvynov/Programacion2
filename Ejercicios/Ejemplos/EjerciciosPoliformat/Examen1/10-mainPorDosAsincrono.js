
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
function porDos( n, f ) {
   var res = 2 * n

   setTimeout (
	function () { f( res ) } ,
	2000
   )
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
porDos( 25, 
	function (resul1) { 
		// ya tenemos en resul1 = 25 * 2	
		porDos( 8, 
			function (resul2) { 
				// ya tenemos en resul2 = 8 * 2
				console.log( "total = " + (resul1 + resul2) )
			}  // (resul2)
		) // porDos( 8
	} // (resul1)
)  // porDos( 25








