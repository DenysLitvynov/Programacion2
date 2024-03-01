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
}// ()

function probarEsPrimo(){
    var res = esPrimo(89,function(num,divisor){
        return num%divisor === 0;
    })
    if(res!=true){
        console.log("Esta mal")
    }
}// ()
  
//----------------------------------------
// main ()
//----------------------------------------

probarEsPrimo();

//----------------------------------------
//----------------------------------------
//----------------------------------------