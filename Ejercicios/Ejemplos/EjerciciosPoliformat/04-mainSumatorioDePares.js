
//--------------------------------------------------
// node 02-mainSumatorioDePares.js
//--------------------------------------------------

//--------------------------------------------------
// 
// Caclula 2+4+6 ... + n
//
// n:Numero
// -->
// sumatorio()
// -->
// Numero
//
//
//--------------------------------------------------
function sumatorio( n ) {

	var res = 0
	for (var i=1; i<=n; i++) {
		if ( i % 2 == 0 ) {
			res = res + i
		}
	}
	return res
	
} // ()
//--------------------------------------------------
function sumatorioSinIf( n ) {
	var res = 0
	for (var i=2; i<=n; i=i+2) {
		res = res + i
	}
	return res
} // ()

//--------------------------------------------------
// main ()
//--------------------------------------------------

var a = sumatorio( 10 )

console.log( a )

a = sumatorioSinIf( 10 )

console.log( a )
