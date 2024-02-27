//
// Hacer una función que recorre una lista de números 
// y todos sus elementos positivos los mete en otra lista
// Lista1<R> -> filtrarPositivos() -> Lista2<R>
//
function filtrarPositivos(array1){
    var array2 = new Array();
    for(var i=0;i<array1.length;i++){
        if(array1[i]>0){ // si es mayor que 0 lo incluimos en el otro array
            array2.push(array1[i]);
        }
    }//for()
    return array2;
}//()

//------------------------------
// main()
//------------------------------

var array1 = new Array(-1,-5,6,2,7);
var arrayPrueba = new Array(6,2,7);
var arrayRes = filtrarPositivos(array1); // Llamada a la función

// Prueba automática para la función
for(var i=0;i<arrayRes.length;i++){
    //console.log(arrayRes[i]);
    if(arrayRes[i]!=arrayPrueba[i]){
        console.log("Esta mal");
        break;
    }
}

//------------------------------
//------------------------------
//------------------------------