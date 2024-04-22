//
// Archivo: map.js
// Descripción: Implementa la función mapear(). Pruébala de forma automática transformado 
// una lista de palabras en una lista con las longitudes de cada palabra de la primera lista.
// Fecha: 20/04/2024
// Nombre: Denys Litvynov
//

//--------------------------------------------
// Lista<T1> (T1->T2) -> mapear() -> Lista<T2>
//--------------------------------------------
function mapear(array,transformar){
    const resultado = [];
    for(let i = 0; i<array.length; i++){
        resultado[i] = transformar(array[i]);
    }// for
    return resultado;
}//()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarMapear(array,arrayPrueba){
    const res = mapear(array, function(elem){
        return elem.length;
    });
    for(let i = 0; i<res.length; i++){
        if(res[i] != arrayPrueba[i]){
            console.log("Esta mal");
        }
    }
}//()

//--------------------------------------------
// main()
//--------------------------------------------

const arr = ["Elixir","Sintaxis","Hola","Cinco","Matrix"];
const arrPrueba = [6,8,4,5,6];
probarMapear(arr,arrPrueba);

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------