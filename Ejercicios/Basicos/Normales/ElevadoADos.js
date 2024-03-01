//
// Función que devuelve el resultado de (x-m)^2
// R R -> elevadoADos() -> R
//
function elevadoADos(num1,num2){
    return (num1-num2)*(num1-num2);
} //()

// prueba automática para la función
function probarElevadoADos(){
    if(elevadoADos(4,2)!=4){
        console.log("Esta mal");
    }
}

//----------------------------------------
// main()
//----------------------------------------

probarElevadoADos();

//----------------------------------------
//----------------------------------------
//----------------------------------------