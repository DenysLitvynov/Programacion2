//
// Función a la que se le pase un numero y calcule su fibonacci
// N -> fibonacci() -> N
//
function fibonacci(num){
    if(num<=0){return 0;}
    if(num==1){return 1;}
    let res=0, num1=0; num2=1;
    let i=2;
    while(i<num){
        res=num1+num2;
        num1=num2;
        num2=res;
        i++;
    }
    return res;
} //()

// prueba automática para la función
function probarFibonacci(){
    if(fibonacci(5)!=3){
        console.log("Esta mal")
    }
}

//------------------------------
// main()
//------------------------------

probarFibonacci();

//---------------------------------
//---------------------------------
//---------------------------------