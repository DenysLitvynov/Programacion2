//
// Archivo: BuscarElMayorFCP.js
// Descripción: hacer una función que recorre los elementos de una lista de números reales para encontrar el mayor de ellos
// Fecha: 04/03/2024
// Nombre: Denys Litvynov
//

//
// Lista<R> (R N R->()->V/F) -> buscarElMayor() -> R
//
function buscarElMayor(array,condicion){
    let res = -1000;
    for(let i=0; i<array.length; i++){
        if(condicion(array,i,res)){
            res = array[i];
        }
    }// for
    return res;
}// ()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarBuscarElMayor(){
    let array = [1,53,74,71,356];
    let res = buscarElMayor(array,function(arr,i,r){
        if(arr[i]>r){
            return true;
        }
        return false;
    });
    if(res!=356){
        console.log("Esta mal");
    }
}//()

//--------------------------------------------
// main()
//--------------------------------------------

probarBuscarElMayor();

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------