//
// Hacer una función que suma todos los elementos de una lista
// Lista<R> -> sumarLista() -> R
//
function sumarLista(array){
    var suma=0;
    for(var i=0;i<array.length;i++){
        suma+=array[i];
    }//for()
    return suma;
}//()

//------------------------------
// main()
//------------------------------

var array = new Array(1,2,3,4,5);
var res = sumarLista(array);// Llamada a la función

// Prueba automática para la función
if(res!=15){
    console.log("Esta mal");
}

//------------------------------
//------------------------------
//------------------------------