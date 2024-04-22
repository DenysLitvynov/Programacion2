//
// Archivo: reducir.js
// Descripción: Implementa la función reducir(). Pruébala de forma automática con el anterior ejemplo.
// Fecha: 20/04/2024
// Nombre: Denys Litvynov
//

//--------------------------------------------
// Lista<T1> T2 T2,T1->T2 -> reducir() -> T2
//--------------------------------------------
function reducir(array,operacion){
    let acum = 0;
    for(let i = 0; i<array.length; i++){
        acum = operacion(acum,array[i]);
    }
    return acum;
}//()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarReducir(array,esperado){
    const res = reducir(array, function(result, elem){
        result += elem;
        return result; 
    });
    if(res != esperado){
        console.log("Esta mal")
    }
}

//--------------------------------------------
// main()
//--------------------------------------------

const arr = [1,2,3,4,5];
const esper = 15;
probarReducir(arr, esper);

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------