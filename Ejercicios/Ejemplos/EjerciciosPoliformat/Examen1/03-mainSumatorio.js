
//--------------------------------------------------
// node 01-mainSumatorio.js
//--------------------------------------------------

//--------------------------------------------------
// 
// Caclula 1+2+3+ ... + n
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
		res = res + i
	}
	return res
	
} // ()
//--------------------------------------------------
function sumatorioConWhile( n ) {
	var res = 0
	var i=1;
	while ( i<=n ) {
		res = res + i
		i++
	}
	return res
	
} // ()

//--------------------------------------------------
// main ()
//--------------------------------------------------

var a = sumatorio( 10 )

console.log( a )

a = sumatorioConWhile( 10 )

console.log( a )
