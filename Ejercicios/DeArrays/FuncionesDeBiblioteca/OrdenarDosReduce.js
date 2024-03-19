//
// Archivo: OrdenarDosReduce.js
// Descripción: hacer una función que se le pasen dos números enteros y devolver una 
// lista con todos los números desde el menor hasta el mayor (ambos incluidos). 
// Fecha: 19/03/2024
// Nombre: Denys Litvynov
//

//
// R R -> ordenarDos() -> Lista<R> 
//
function ordenarDos(num1,num2){
    const array = [];
    const res = array.reduce(function(acum,elem){
        if(res[0] > res[1]){
            res[0] = num2;
            res[1] = num1;
        }else{
            res[0] = num1;
            res[1] = num2;
        }
    },[num1,num2])
    return res;
}//()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarOrdenarDos(num1,num2){
    const res = ordenarDos(num1,num2);
    if(res[0]!=num2 || res[1]!=num1){
        console.log("Esta mal");
    }
}// ()

//--------------------------------------------
// main()
//--------------------------------------------

probarOrdenarDos(8,2);

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------