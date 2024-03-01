//
// Archivo: Reductores.js
// Descripción: Implementa la función reducir(). Pruébala de forma automática con el anterior ejemplo.
// Fecha: 01/03/2024
// Nombre: Denys Litvynov
//

//
// Lista<T1> T2 T2,T1->T2 -> reducir() -> T2
//
function reducir(array,operacion){
    let res = 0;
    for(let i = 0; i<array.length; i++){
        res = operacion(array,res,i);
    }// for
    return res;
}// ()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarReducir(){
    const array = [1,2,3,4,5];
    const res = reducir(array, function(arr,result,i){
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

probarReducir();

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------