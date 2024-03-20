//
// Archivo: ElementosIncluidos.js
// Descripción: Hacer una función a la que se le pasen dos listas y nos 
// diga si los elementos de la primera estan inlcuidos en la segunda
// Fecha: 19/03/2024
// Nombre: Denys Litvynov
//

//
// Lista<R> Lista<R> -> estanIncluidos() -> V/F
//
function estanIncluidos(array1,array2){
    return array1.filter(function(elem){
        if(array2.includes(elem)){
            return elem;
        }
    })
}//()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarEstanIncluidos(array1,array2){
    let res = estanIncluidos(array1,array2);
    for(let elem of res){
        if(!array1.includes(elem)){
            console.log("Esta mal");
        }
    }// for
}//()

//--------------------------------------------
// main()
//--------------------------------------------

let array1 = [1,3,5];
let array2 = [1,2,3,4,5];
probarEstanIncluidos(array1,array2);

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------
