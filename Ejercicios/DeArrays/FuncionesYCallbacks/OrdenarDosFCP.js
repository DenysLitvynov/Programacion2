//
// Archivo: OrdenarDosFCP.js
// Descripción: Hacer una función que se le pasen dos números y devolver 
// una lista con todos los números ordenados de menor a mayor 
// Fecha: 05/03/2024
// Nombre: Denys Litvynov
//

//
// R R (R R->()->V/F) -> ordenarDos() -> Lista<R>
//
function ordenarDos(num1,num2,condicion){
    let array = [];
    if(condicion(num1,num2)){
        array[0]=num2;
        array[1]=num1;
    }else{
        array[0]=num1;
        array[1]=num2;
    }
    return array;
}// ()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarOrdenarDos(num1,num2){
    let res = ordenarDos(num1,num2, function(n1,n2){
        if(n1>n2){
            return true;
        }
        return false;
    });
    if(res[0]!=1 || res[1]!=9){
        console.log("Esta mal");
    }
}// ()

//--------------------------------------------
// main()
//--------------------------------------------

probarOrdenarDos(1,9);

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------