
//--------------------------------------------------
// node 01.1-mainUsoBasicoArray.js
//--------------------------------------------------

//--------------------------------------------------
// main ()
//--------------------------------------------------

//
// creo un array "vacío"
//
var lista1 = []

console.log( "tamaño = " + lista1.length )

//
// añado tres casillas
//
lista1.push( 1)
lista1.push( 22 )
lista1.push( 333 )
lista1.push( 4444 )
lista1.push( 55555 )

console.log( "tamaño = " + lista1.length )

//
// muestro las casillas
//
console.log( "------------------------")
for (var i=0; i<=lista1.length-1; i++) {
	console.log( "casilla " +  i + " == " +  lista1[i] )
}
console.log( "------------------------")

//
// elimino la primera casilla
//
var casillaEliminada = lista1.shift()

console.log( "tamaño ahora = " + lista1.length )

console.log( "he quitado: " + casillaEliminada )

console.log( lista1 )

console.log( "------------------------")
//
// añado casilla al principio
//
lista1.unshift(8888)

console.log( "tamaño ahora = " + lista1.length )

console.log( lista1 )

console.log( "------------------------")
//
// elimino la ultima casilla
//
casillaEliminada = lista1.pop()

console.log( "tamaño ahora = " + lista1.length )

console.log( "he quitado: " + casillaEliminada )

console.log( lista1 )
