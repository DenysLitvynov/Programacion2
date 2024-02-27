//
// Función que recibe un número y devuelve el resultado de multiplicarlo por 3
// R -> porTres() -> R
//
function porTres(num){
    return num*3;
}//()

//
// función que devuelve el resultado con un callback
// callback -> devolverResultado() -> callback
//
function devolverResultado(callback){
    return callback(3);
}//()

//--------------------------------------------
// main()
//--------------------------------------------

// prueba automática
var res = devolverResultado(porTres);
if(res!=9){
    console.log("Esta mal");
}

//----------------------------------------
//----------------------------------------
//----------------------------------------