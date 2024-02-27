//
// Hacer una función que recibe un número natural y devuelve verdadero si dicho numero es triangular
// N -> esTriangular() -> V/F
//
function esTriangular(num){
    var res = 0;
    for(var i=1;i<=num;i++){
        res+=i;
        if(res==num){
            return true;
        }
    }//for()
    return false;
}//()

//------------------------------
// main()
//------------------------------

// Llamada a la función
var res = esTriangular(10);
// Prueba automática para la función
if(res!=true){
    console.log("Esta mal");
}

//------------------------------
//------------------------------
//------------------------------