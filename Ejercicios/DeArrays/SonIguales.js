//
// Hacer una función que se le pasen dos listas y nos diga si son iguales o no
// Lista1<N> Lista2<N> -> sonIguales() -> V/F
//
function sonIguales(array1,array2){
    var tam = 0;
    if(array1.length!=array2.length){ // si no son igual de largas, no son iguales
        return false;
    }
    for(var i=0;i<array1.length;i++){
        if(array1[i]!=array2[i]){// si algún elemento no coincide, no son iguales
            return false;
        }
    }//for()
    return true;
}//()

//------------------------------
// main()
//------------------------------

var array1 = new Array(1,2,3,4,5,6);
var array2 = new Array(1,2,3,4,5);
var res = sonIguales(array1,array2);// Llamada a la función

// Prueba automática para la función
if(res!=false){
    console.log("Esta mal");
}

//------------------------------
//------------------------------
//------------------------------