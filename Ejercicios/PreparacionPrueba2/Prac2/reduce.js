//
// Archivo: reduce.js
// Descripción: Implementa la función reducir(). Pruébala de forma automática con el anterior ejemplo.
// Fecha: 20/04/2024
// Nombre: Denys Litvynov
//

//--------------------------------------------
// Lista<T1> -> reducir() -> T2
//--------------------------------------------
function reducir(array){
    const reducido = array.reduce(function(acum,elem){
        acum += elem;
        console.log(acum)
        return acum;
    }, 0)
    return reducido; 
}//()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarReducir(array, esperado){
    const resultado = reducir(array);
    if(resultado !== esperado){
        console.log("Esta mal");
    }
}//()

//--------------------------------------------
// main()
//--------------------------------------------

const arr = [1,2,3,4,5];
const esper = 15;
probarReducir(arr, esper);

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------