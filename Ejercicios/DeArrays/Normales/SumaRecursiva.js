//
// Hacer una función que recibe una lista de números y suma sus elementos
// Lista<R> -> sumar() -> R
//
function sumar(array) {
    if (array.length === 0) {
        return 0; 
    }
    return array[0] + sumar(array.slice(1));
}
//------------------------------
// main()
//------------------------------

var array = new Array(1,2,3,4,5);
var res = sumar(array);// Llamada a la función

// Prueba automática para la función
if(res!=15){
    console.log("Esta mal");
}

//------------------------------
//------------------------------
//------------------------------