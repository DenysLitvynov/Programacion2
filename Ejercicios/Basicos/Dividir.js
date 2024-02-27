//
// Función que calcula el resultado de dividir un número por otro
// R R -> dividir() -> R
//
function dividir(dividendo,divisor,callback){
    if ( divisor == 0 ) {
        callback( "division por 0", null)
        return
        }
        // else
        var resultado = dividendo/divisor
        callback( null, resultado )
} // ()

//------------------------------
// main()
//------------------------------

// prueba automática
dividir( 7, 0, function (error, resultado) {
	if (error) {
		console.log( "la division falló: " + error )
		return
	}
	console.log( " el resulado es: " + resultado )
}) //()


//------------------------------
//------------------------------
//------------------------------