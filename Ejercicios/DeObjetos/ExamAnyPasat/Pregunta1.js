//
// Archivo: Pregunta1.js
// Descripción: Diseña una función que, dada una lista que contiene numeros enteros entre 0 y 9,
// devuelva cual es el que más se repite
// Fecha: 18/03/2024
// Nombre: Denys Litvynov
//

// --------------------------------------------
// array:N -> cualSeRepiteMas() -> resultado: JSON{numero: N, rep: N}
// --------------------------------------------
function cualSeRepiteMas(array){
    // Parte 1: Contar las repeticiones de cada número y almacenarlas en un nuevo array
    let arrayVeces = array.reduce(function(acum, elem){
        acum[elem] += 1;
        return acum;
    }, [0,0,0,0,0,0,0,0,0,0]);

    console.log(arrayVeces);
}

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 

//--------------------------------------------
// main()
//--------------------------------------------

const arrayOriginal = [0,1,1,2,3,3,4,5];
cualSeRepiteMas(arrayOriginal);

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------