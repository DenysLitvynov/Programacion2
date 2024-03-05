//
// Archivo: MediaFCP.js
// Descripción: Hacer una función que calcula la media de una lista de números
// Fecha: 04/03/2024
// Nombre: Denys Litvynov
//

//
// Lista<T1> T2 T2,T1->()->T2 -> calcularMedia() -> T2
//
function calcularMedia(array,operacion){
    let suma = 0;
    for(let i = 0; i<array.length; i++){
        suma = operacion(array,suma,i);
    }// for
    let res = suma/array.length;
    return res;
}// ()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarCalcularMedia(array){
    const res = calcularMedia(array, function(arr,result,i){
        result += arr[i];
        return result;
    });
    if(res != 3){
        console.log("Esta mal");
    }
}// ()

//--------------------------------------------
// main()
//--------------------------------------------

const array = [1,2,3,4,5];
probarCalcularMedia(array);

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------