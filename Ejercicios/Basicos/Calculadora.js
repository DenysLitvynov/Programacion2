//
// función que se le pasen 3 valores, 2  sean dos números y el tercero un número del 1 al 4,donde si es un 1 
// haremos una suma con los números, si es un 2 una resta, si es un 3 una multiplicación y si es un 4 una división
// R R N -> calculadora() -> R
//
function calculadora(num1,num2,num3){
    switch(num3){
        case 1:
            res = num1+num2;
            break;
        case 2:
            res = num1-num2;
            break;
        case 3:
            res = num1*num2;
            break;
        case 4:
            res = num1/num2;
            break;
        default:
            res = 0;
    }
    return res;
} //()

//-----------------------------------
// main()
//-----------------------------------

// pruebas automáticas
if(calculadora(4,2,1)!=6){
    console.log("Esta mal");
}

if(calculadora(4,2,2)!=2){
    console.log("Esta mal");
}

if(calculadora(4,2,3)!=8){
    console.log("Esta mal");
}

if(calculadora(4,2,4)!=2){
    console.log("Esta mal");
}

//-----------------------------------
//-----------------------------------
//-----------------------------------