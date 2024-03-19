//
// Archivo: SubstituirFCP.js
// Descripción: Hacer una función donde le pasemos una lista de números enteros y dos números y nos devuelva otra 
// lista donde se cambien todos las apariciones del primer número por el segundo (manteniendo su posición)
// Fecha: 04/03/2024
// Nombre: Denys Litvynov
//

//
// Lista<T1> (T1->T2) -> substituir() -> Lista<T2>
//
function substituir(array,transformar,n1,n2){
    const resultado = [];
    for(let i = 0; i<array.length; i++){
        resultado[i] = transformar(array[i],n1,n2);
    }// for
    return resultado;
}// ()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función
function probarSubstituir(array,arrayPrueba,n1,n2){
    const res = substituir(array, function(elem,n1,n2){
        if(elem==n1){ 
            elem=n2; 
        } 
        return elem;
    },n1,n2);
    for(let i = 0; i<res.length; i++){
        //console.log(res[i], " ", arrayPrueba[i]);
        if(res[i] != arrayPrueba[i]){
            console.log("Esta mal");
        }
    }// for
}// ()

//--------------------------------------------
// main()
//--------------------------------------------

const array = [3,3,3,3,3];
const arrayPrueba = [5,5,5,5,5];
probarSubstituir(array,arrayPrueba,3,5);

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------