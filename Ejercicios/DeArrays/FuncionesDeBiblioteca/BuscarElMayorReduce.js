//
// Hacer una función que recorre los elementos de una lista de números reales para encontrar el mayor de ellos
// Lista<R> -> buscarElMayor() -> R
//
function buscarElMayor(array){
    const res = array.reduce(function(acum,elem){
        if(acum < elem){
            acum = elem;
        }
        return acum;
    },0); // acum representara el numero maximo
    return res;
}

//------------------------------
// main()
//------------------------------

var array = new Array(-5,12,634,1,-999);
var res=buscarElMayor(array); // Llamada a la función

// Prueba automática para la función
if(res!=634){
    console.log("Esta mal");
}

//------------------------------
//------------------------------
//------------------------------