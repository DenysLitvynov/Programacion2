//
// Hacer una función que recibe un número natural y devuelve verdadero si dicho numero es triangular
// N -> esTriangular() -> V/F
//
function esTriangular(num){
    var res = 0;
    for(let i=1;i<=num;i++){
        res+=i;
        if(res==num){
            return true;
        }
    }//for()
    return false;
}//()

// Prueba automática para la función
function probarEsTriangular(){
    var res = esTriangular(10);
    if(res!=true){
        console.log("Esta mal");
    }
}

//------------------------------
// main()
//------------------------------

probarEsTriangular();

//------------------------------
//------------------------------
//------------------------------