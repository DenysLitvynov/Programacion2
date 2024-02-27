//
// Hacer una función que calcula la media de una lista de números
// Lista<R> -> calcularMedia() -> R
//
function calcularMedia(array){
    var suma=0;
    for(var i=0;i<array.length;i++){
        suma+=array[i];
    }//for()
    var res = suma/array.length;
    return res;
}//()

//------------------------------
// main()
//------------------------------

var array = new Array(1,2,3,4,5);
var res = calcularMedia(array);// Llamada a la función

// Prueba automática para la función
if(res!=3){
    console.log("Esta mal");
}

//------------------------------
//------------------------------
//------------------------------