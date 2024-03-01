//
// Caclula la suma de los números entre 1 y n que cumplan una condición .La condición se evalúa mediante una función que se recibe.
// N -> filtrar() -> N
//
function filtrar( n, cumple ) {
	var res = 0
	for (var i=1; i<=n; i++) {
		if ( cumple( i ) ) {
			res = res + i
		}
	}
	return res
} // ()

//------------------------------
// main()
//------------------------------

// prueba automática
var res = filtrar( 10, function(e) {
	if (e%2==0) {
		return true
	}
	return false
})

if(res!=30){
    console.log("Esta mal")
}

//---------------------------------
//---------------------------------
//---------------------------------