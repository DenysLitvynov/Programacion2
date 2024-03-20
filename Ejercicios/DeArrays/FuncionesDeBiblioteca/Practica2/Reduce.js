//
// Archivo: Reduce.js
// Descripción: Por ejemplo, podemos reducir 1, 2, 3, 4, 5 a su suma 15 utilizando la operación + y un primer valor 0
// Fecha: 19/03/2024
// Nombre: Denys Litvynov
//

//--------------------------------------------
// Lista<R> -> reducirAUnElemento() -> R
//--------------------------------------------
function reducirAUnElemento(array){
    return array.reduce(function(acum,elem){
        return acum + elem;
    },0)
}// ()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarReducirAUnElemento(array,esperado){
    const resultado = reducirAUnElemento(array);
    if(resultado != esperado){
        console.log("Esta mal");
    }
}// ()

//--------------------------------------------
// main()
//--------------------------------------------

const array = [1,2,3,4,5];
const esperado = 15;
probarReducirAUnElemento(array,esperado);

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------