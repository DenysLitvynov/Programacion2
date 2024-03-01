//
// función que calcula el factorial de un numero
// R -> factorial() -> R
//
function factorial(num){
    res=1;
    for(var i=1;i<=num;i++){
        res*=i;
    }
    return res;
} //()

//--------------------------
// main()
//--------------------------

// prueba automática
if(factorial(4)!=24){
    console.log("Esta mal");
}

//--------------------------
//--------------------------
//--------------------------