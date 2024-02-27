//
// Hacer una función que dadas dos listas de números enteros 
// devuelve el índice de la primera casilla que contenga un valor 
// distinto en cada una de las dos listas o -1 si las listas son iguales
// Lista1<N> Lista2<N> -> sonDistintas() -> N
//
function sonDistintas(array1,array2){
    var tam = 0, cas = -1;
    if(array1.length>=array2.length){
        tam = array1.length;
    }else{
        tam = array2.length;
    }
    for(var i=0;i<tam;i++){
        if(array1[i]!=array2[i]){
            cas = i;
        }
    }//for()
    return cas;
}//()

//------------------------------
// main()
//------------------------------

var array1 = new Array(1,2,3,4,5);
var array2 = new Array(1,2,3,4,5);
var res = sonDistintas(array1,array2);// Llamada a la función

// Prueba automática para la función
if(res!=-1){
    console.log("Esta mal");
}

//------------------------------
//------------------------------
//------------------------------