//
// Archivo: DividirCB.js
// Descripción: Hacer una función que calcule el cociente y 
// el resto de la división de dos números, sin utilizar / ni % 
// Fecha: 05/03/2024
// Nombre: Denys Litvynov
//

//
// R R -> dividir() -> Lista<R>
//
function dividir(dividendo, divisor, cb){
    let resto = dividendo;
    let cociente = 0;
    let res = [];
    while(resto>=divisor){
        resto-=divisor;
        cociente++;
    }//while()
    res[0]=cociente;
    res[1]=resto;
    cb(res);
}//()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarDividir(dividendo,divisor){
    let res = dividir(dividendo,divisor, (res) =>{
        if(res[0]!=2 || res[1]!=0){
            console.log("Esta mal");
        }
    })
}// ()

//--------------------------------------------
// main()
//--------------------------------------------

probarDividir(6,3);

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------