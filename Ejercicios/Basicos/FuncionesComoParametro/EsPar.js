//
// Función que recibe un numero y devuelve verdadero si es par
// N -> esPar() -> V/F
//
function esPar(num,condicion){
    if(condicion(num)){
        return true;
    }
    return false;
}//()

//
// condicion para utilizar un callback
//
function condicion(num){
    if(num%2===0){
        return true;
    }
    return false;
}//()

//-------------------------------------
// main()
//-------------------------------------

var res = esPar(2,condicion);
// prueba automática
if(res!=true){
    console.log("Esta mal");
}//()

//-------------------------------------
//-------------------------------------
//-------------------------------------