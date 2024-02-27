//
// Archivo: ElementosIncluidos.js
// Descripción: Hacer una función a la que se le pasen dos listas y nos 
// diga si los elementos de la primera estan inlcuidos en la segunda
// Fecha: 21/02/2024
// Nombre: Denys Litvynov
//

//
// Lista<R> Lista<R> -> estanIncluidos() -> V/F
//
function estanIncluidos(array1,array2){
    let res = false;
    let contador = 0;
    for(let i=0;i<array1.length;i++){
        for(let j=0;j<array2.length;j++){
            if(array2[j]==array1[i]){
                contador++;
            }
        }//for.interior()
    }//for.exterior()
    if(contador==array1.length){
        res = true;
    }
    return res;
}//()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarEstanIncluidos(){
    let array1 = new Array(1,3,5);
    let array2 = new Array(1,2,3,4,5);
    let res = estanIncluidos(array1,array2);
    if(res!=true){
        console.log("Esta mal");
    }
}//()

//--------------------------------------------
// main()
//--------------------------------------------

probarEstanIncluidos();

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------
