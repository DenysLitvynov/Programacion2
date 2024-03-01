//
// Función a la que se le pase un numero y calcule su fibonacci
// N -> fibonacci() -> N
//
function fibonacci(num){
    if(num<=0){return 0;}
    if(num==1){return 1;}
    let res=0, num1=0, num2=1;
    for(let i=2;i<num;i++){
        res=num1+num2;
        num1=num2;
        num2=res;
        console.log(res);
    }
    return res;
} //()

//------------------------------
// main()
//------------------------------

// prueba automática
if(fibonacci(5)!=3){
    console.log("Esta mal")
}

//------------------------------
//------------------------------
//------------------------------