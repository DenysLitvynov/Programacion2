//
// Archivo: Dividir.js
// Descripción: Hacer una función que calcule el cociente y 
// el resto de la división de dos números, sin utilizar / ni % 
// Fecha: 21/02/2024
// Nombre: Denys Litvynov
//

//
// R R -> dividir() -> Lista<R>
//
function dividir(dividendo, divisor){
    let resto = dividendo;
    let cociente = 0;
    let res = new Array();
    while(resto>=divisor){
        resto-=divisor;
        cociente++;
    }//while()
    res[0]=cociente;
    res[1]=resto;
    return res;
}//()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarDividir(){
    let res = dividir(6,3);
    console.log(res[0]," ",res[1]);
    if(res[0]!=2 || res[1]!=0){
        console.log("Esta mal");
    }
}//()

//--------------------------------------------
// main()
//--------------------------------------------

probarDividir();

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------