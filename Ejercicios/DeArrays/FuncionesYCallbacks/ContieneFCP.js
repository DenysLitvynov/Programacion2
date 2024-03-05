//
// Archivo: ContieneFCP.js
// Descripción: Hacer una función que recorre una lista de números para comprobar si contiene un numero
// Fecha: 04/03/2024
// Nombre: Denys Litvynov
//

//
// Lista<N> N (N->()->V/F) -> contiene() -> V/F
//
function contiene(array,num,condicion){
    for(let i=0; i<array.length; i++){
        if(condicion(array,i,num)){
            return true;
        }
    }// for
    return false;
}// ()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarContiene(){
    let array = [1,2,3,4,5];
    let num = 3;
    let res = contiene(array,num, function(arr,i,n){
        if(arr[i]==n){
            return true;
        }
        return false;
    });
    if(res!=true){
        console.log("Esta mal");
    }
}// ()

//--------------------------------------------
// main()
//--------------------------------------------

probarContiene();

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------