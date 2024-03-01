//
// Caclula la suma de los números entre 1 y n que cumplan una condición .La condición se evalúa mediante una función que se recibe.
// N -> filtrar() -> N
//
function filtrar( n, cumple ) {
	var res = 0
    var i=1;
    while(i<=n){
        if ( cumple( i ) ) {
			res = res + i
		}
        i++;
    }
	return res
} // ()

// prueba automática para la función filtrarNumeros
function probarFiltrar(){
	var res = filtrar( 10, function(e) {
		if (e%2==0) {
			return true
		}
		return false
	})
	
	if(res!=30){
		console.log("Esta mal")
	}
}

//------------------------------
// main()
//------------------------------

probarFiltrar();

//---------------------------------
//---------------------------------
//---------------------------------