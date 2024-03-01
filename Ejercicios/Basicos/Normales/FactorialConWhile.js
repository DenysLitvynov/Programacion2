//
// función que calcula el factorial de un numero
// R -> factorial() -> R
//
function factorial(num){
    var res = 1, i=1;
    while(i<=num){
        res*=i;
        i++;
    }
    return res;
} //()

// prueba automática para la función
function probarFactorial(){
    if(factorial(4)!=24){
        console.log("Esta mal");
    }
}

//---------------------------------
// main()
//---------------------------------

probarFactorial();

//---------------------------------
//---------------------------------
//---------------------------------