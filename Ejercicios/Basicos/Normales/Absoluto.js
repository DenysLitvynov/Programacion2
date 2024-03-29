//
// función que calcula el valor absoluto de un numero
// R -> absoluto() -> R
//
function absoluto(num){
    if(num<0){
        num*=-1;
    }
    return num;
} //()

// prueba automatica para la func absoluto()
function probarAbsoluto(){
    if(absoluto(-5)!=5){
        console.log("Esta mal");
    }
}

//--------------------------------------------------
//--------------------------------------------------

//
// función que compara dos numeros en su valor absoluto y devuelve verdadero si es el mismo
// R R -> absolutosIguales() -> V/F
//
function absolutosIguales(num1,num2){
    if(absoluto(num1)==absoluto(num2)){
        return true;
    }
    return false;
} //()

// prueba automatica para la func absolutosIguales()
function probarAbsolutosIguales(){
    if(absolutosIguales(-5,5)!=true){
        console.log("Esta mal");
    }
}

//--------------------------------------------------
// main()
//--------------------------------------------------

probarAbsoluto();
probarAbsolutosIguales();

//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------