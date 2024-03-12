
//--------------------------------------------------
// node 03-mainFiltrarNumeros.js
//--------------------------------------------------

//--------------------------------------------------
// 
// Caclula la suma de los números
// entre 1 y n que cumplan una condición
// La condición se evalúa mediante
// una función que se recibe.
//
//
// n:Numero
// ( Numero -> cumple() -> V/F )
// -->
// sumatorio()
// -->
// Numero
//
//
//--------------------------------------------------
function sumatorio( n, cumple ) {

	var res = 0
	for (var i=1; i<=n; i++) {
		if ( cumple( i ) ) {
			res = res + i
		}
	}
	return res
	
} // ()

//--------------------------------------------------
// main ()
//--------------------------------------------------

// 
// suma todos, porque todos cumplen la condición
// 
var a = sumatorio( 10, function( q ) {
	return true
})

console.log( a )

// 
// suma los pares
// 
a = sumatorio( 10, function( q ) {
	if ( q % 2 == 0 ) {
		return true
	}
	return false
})

console.log( a )

