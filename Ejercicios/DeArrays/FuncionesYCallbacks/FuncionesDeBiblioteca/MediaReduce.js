//
// Archivo: MediaReduce.js
// Descripción: Hacer una función que calcula la media de una lista de números
// Fecha: 12/03/2024
// Nombre: Denys Litvynov
//

//
// Lista<T1> T2 T2,T1->()->T2 -> calcularMedia() -> T2
//
function calcularMedia(array,fnAcumular,acum){
    return array.reduce(fnAcumular,acum)/array.length;
}// ()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarCalcularMedia(array){
    const media = calcularMedia(array,function(acum,elem){
        return acum+elem;
    },0);
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