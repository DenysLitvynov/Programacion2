//
// Archivo: Pregunta1.js
// Descripción: Diseña una función que dada una lista que contiene números 
// enteros(entre 0 y 9) devuelva cual es el que se repite más veces
// Fecha: 20/03/2024
// Nombre: Denys Litvynov
//

//--------------------------------------------
// ArrayEnteros[Z] -> encontrarElMasRepetido() -> Resultado:{numero: Z, rep: Z}
//--------------------------------------------
function encontrarElMasRepetido(arrayEnteros){
    let arrayRepeticiones = arrayEnteros.reduce(function(acum,elem){
        acum[elem] += 1;
    },[0,0,0,0,0,0,0,0,0,0]);
    let objetoResultado = arrayRepeticiones.reduce(function(acum,elem,index){
        if(acum.rep < elem){
            acum.numero = index;
            acum.rep = elem;
        }
    },{numero: 0, rep: 0});
    return objetoResultado;
}// ()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarEncontrarElMasRepetido(arrayEnteros,numEsperado,repeticiones){
    let resultado = encontrarElMasRepetido(arrayEnteros);
    if(resultado.numero != numEsperado || resultado.rep != repeticiones){
        console.log("La función encontrarElMasRepetido() esta mal");
    }
}// ()

//--------------------------------------------
// main()
//--------------------------------------------

const arrayEnteros = [1,1,2,2,3,3,3,3,4,5,6,7,8,9,10];
probarEncontrarElMasRepetido(arrayEnteros,3,4);

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------