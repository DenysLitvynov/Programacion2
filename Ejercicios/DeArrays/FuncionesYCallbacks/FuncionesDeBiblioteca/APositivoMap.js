//
// Archivo: APositivoMap.js
// Descripción: Hacer una función que convierte todos los números de una lista en positivos, utilizando el método de biblioteca .map
// Fecha: 12/03/2024
// Nombre: Denys Litvynov
//

//
// Lista<T1> function() -> aPositivo() -> Lista<T2>
//
function aPositivo(array,funcion){
    return array.map(funcion);
}// ()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarAPositivo(){
    const array = [-1,-2,-3,-4,-5];
    const arrayRes = aPositivo(array,function(numero){
        return Math.abs(numero);
    });
    for(let i=0;i<arrayRes.length;i++){
        if(arrayRes[i]<0){
            console.log("Esta mal");
        }
    }// for
}// ()

//--------------------------------------------
// main()
//--------------------------------------------

probarAPositivo();

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------