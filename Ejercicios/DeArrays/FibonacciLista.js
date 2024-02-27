//
// Archivo: FibonacciLista.js
// Descripción: Hacer una función a la que se le pase un número n y nos
// devuelva los n primeros números de la serie de Fibonacci en una lista
// Fecha: 21/02/2024
// Nombre: Denys Litvynov
//

//
// N -> calcularFibonacci() -> Lista<N>
//
function calcularFibonacci(num){
    if(num<=0){return 0;}
    if(num==1){return 1;}
    let array = new Array(0,1);
    let res=0, num1=0, num2=1;
    for(let i=2;i<num;i++){
        res=num1+num2;
        num1=num2;
        num2=res;
        array[i]=res;
    }//for()
    return array;
} //()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarCalcularFibonacci(){
    let res = calcularFibonacci(7);
    let arrPrueba = new Array(0,1,1,2,3,5,8);
    for(let i=0;i<res.length;i++){
        console.log(res[i]);
        if(res[i]!=arrPrueba[i]){
            console.log("Esta mal");
        }
    }//for()
}//()

//--------------------------------------------
// main()
//--------------------------------------------

probarCalcularFibonacci();

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------