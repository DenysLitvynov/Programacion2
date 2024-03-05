//
// Archivo: SumarListaFCP.js
// Descripción: Hacer una función que suma todos los elementos de una lista
// Fecha: 04/03/2024
// Nombre: Denys Litvynov
//

//
// Lista<T1> T2 T2,T1->T2 -> sumarLista() -> T2
//
function sumarLista(array,operacion){
    let res = 0;
    for(let i = 0; i<array.length; i++){
        res = operacion(array,res,i);
    }// for
    return res;
}// ()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarSumarLista(array){
    const res = sumarLista(array, function(arr,result,i){
        result += arr[i];
        return result;
    });
    if(res != 15){
        console.log("Esta mal");
    }
}// ()

//--------------------------------------------
// main()
//--------------------------------------------

const array = [1,2,3,4,5];
probarSumarLista(array);

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------