//
// Función que recibe un número y devuelve el resultado de multiplicarlo por 3
// R -> porTres() -> R
//
function porTres(num) {
    return num * 3;
}//()

//
// función que devuelve el resultado con un callback
// callback -> devolverResultado() -> callback
//
function devolverResultado(callback) {
    setTimeout(function() {
        var res = callback(3);
        if (res !== 9) {
            console.log("Esta mal");
        }
    }, 3000);
}//()

//--------------------------------------------
// main()
//--------------------------------------------

// prueba automática
devolverResultado(porTres);

//----------------------------------------
//----------------------------------------
//----------------------------------------