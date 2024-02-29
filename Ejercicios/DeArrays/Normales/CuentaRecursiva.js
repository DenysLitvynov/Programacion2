//
// Hacer una función que reciba una lista de números 
// y devuelva la cantidad de elementos que contiene
// Lista<R> -> contar() -> N
//
function contar(array){
    if (array.length === 0) {
        return 0; 
    }
    return 1 + contar(array.slice(1));
}

//------------------------------
// main()
//------------------------------

var array = new Array(1,2,3,4,5);
var res = contar(array);// Llamada a la función

// Prueba automática para la función
if(res!=5){
    console.log("Esta mal");
}

//------------------------------
//------------------------------
//------------------------------