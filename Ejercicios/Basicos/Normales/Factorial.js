//
// función que calcula el factorial de un numero
// R -> factorial() -> R
//
function factorial(num){
    var res=1;
    for(let i=1;i<=num;i++){
        res*=i;
    }
    return res;
} //()

// prueba automática para la función
function probarFactorial(){
    if(factorial(4)!=24){
        console.log("Esta mal");
    }
}

//--------------------------
// main()
//--------------------------

probarFactorial();

//--------------------------
//--------------------------
//--------------------------