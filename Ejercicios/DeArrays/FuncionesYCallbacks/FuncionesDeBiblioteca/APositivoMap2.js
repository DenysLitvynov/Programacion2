//
// Archivo: APositivoMap2.js
// Descripción: Hacer una función que convierte todos los números de una lista en positivos, utilizando el método de biblioteca .map
// Fecha: 13/03/2024
// Nombre: Denys Litvynov
//

//
// Lista<T1> function() -> aPositivo() -> Lista<T2>
//
function aPositivo(array){
    return array.map(function(elem){
        Math.abs(numero);
    })
}// ()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarAPositivo(array){
    const arrayRes = aPositivo(array);
    for(let i=0;i<arrayRes.length;i++){
        if(arrayRes[i]<0){
            console.log("Esta mal");
        }
    }// for
}

//--------------------------------------------
// main()
//--------------------------------------------

const array = [-1,-2,-3,-4,-5];
probarAPositivo(array);

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------