//
// función que recibe un número y devuelve verdadero si es primo
// N -> esPrimo() -> V/F
//
function esPrimo(num,condicion){
    for(var i=2; i<num; i++){
        if(condicion(num,i)){
            return false;
        }
    } // for
    return true;
}//()

//
// función que deduce si un numero es divisble por otro o no
// N N -> esDivisible() -> V/F
//
function esDivisible(num, divisor){
    return num%divisor === 0;
}//()
  
//----------------------------------------
// main ()
//----------------------------------------

var res = esPrimo(89,esDivisible)
if(res!=true){
    console.log("Esta mal")
}

//----------------------------------------
//----------------------------------------
//----------------------------------------