//
// Archivo: SubstituirReduce.js
// Descripción: Hacer una función donde le pasemos una lista de números enteros y dos números y nos devuelva otra 
// lista donde se cambien todos las apariciones del primer número por el segundo (manteniendo su posición)
// Fecha: 12/03/2024
// Nombre: Denys Litvynov
//

//
// Lista<T1> (T1->T2) -> substituir() -> Lista<T2>
//
function substituir(array,fnAcumular,acum){
    return array.reduce(fnAcumular);
}// ()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función
function probarSubstituir(array,num1,num2,arrayPrueba){
    const arrayRes = substituir(array,function(acum,n1,n2){
        if(elem == n1){
            acum.push(n2);
        }else{
            acum.push(elem);
        }
        return acum;
    },[]);
    for(let i=0;i<arrayRes.length;i++){
        console.log(arrayRes[i]);
        if(arrayRes[i] != arrayPrueba[i]){
            console.log("Esta mal");
        }
    }// for
}

//--------------------------------------------
// main()
//--------------------------------------------

const array = [3,3,3,3,3];
const arrayPrueba = [5,5,5,5,5];
probarSubstituir(array,3,5,arrayPrueba);

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------