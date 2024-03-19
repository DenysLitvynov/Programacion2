//
// Archivo: MediaReduce2.js
// Descripción: Hacer una función que calcula la media de una lista de números
// Fecha: 13/03/2024
// Nombre: Denys Litvynov
//

//
// Lista<T1> T2 T2,T1->()->T2 -> calcularMedia() -> T2
//
function calcularMedia(array){
    return array.reduce(function(acum,elem){
        return acum+elem;
    },0) / array.length;
}// ()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarCalcularMedia(array){
    const media = calcularMedia(array);
    if(media != 3){
        console.log("Esta mal")
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