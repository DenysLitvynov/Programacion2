//
// Archivo: SonIgualesFCP.js
// Descripción: Hacer una función que se le pasen dos listas y nos diga si son iguales o no
// Fecha: 04/03/2024
// Nombre: Denys Litvynov
//

//
// Lista1<N> Lista2<N> (N N->()->V/F) -> sonIguales() -> V/F
//
function sonIguales(array1,array2,condicion){ 
    if(array1.length != array2.length){
        return false;
    }
    for(let i=0; i<array1.length; i++){
        if(condicion(array1,array2,i)){
            return false;
        }
    }// for
    return true;
}// ()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarSonIguales(array1,array2){
    let res = sonIguales(array1,array2, function(arr1,arr2,i){
        if(arr1[i]!=arr2[i]){
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

let array1 = [1,2,3,4,5];
let array2 = [1,2,3,4,5];
probarSonIguales(array1,array2);

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------