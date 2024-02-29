//
// Hacer una función que se le pasen dos números y devolver 
// una lista con todos los números ordenados de menor a mayor 
// R R -> ordenarDos() -> Lista<R> 
//
function ordenarDos(num1,num2){
    var array = new Array();
    if(num1>num2){
        array[0]=num2;
        array[1]=num1;
    }else{
        array[0]=num1;
        array[1]=num2;
    }
    return array;
}//()

//------------------------------
// main()
//------------------------------

var res = ordenarDos(624,2);// Llamada a la función

// Prueba automática para la función
if(res[0]!=2 || res[1]!=624){
    console.log("Esta mal");
}

//------------------------------
//------------------------------
//------------------------------