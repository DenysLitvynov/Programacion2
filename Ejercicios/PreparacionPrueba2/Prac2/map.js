//
// Archivo: map.js
// Descripción: Implementa la función mapear(). Pruébala de forma automática transformado 
// una lista de palabras en una lista con las longitudes de cada palabra de la primera lista.
// Fecha: 20/04/2024
// Nombre: Denys Litvynov
//

//--------------------------------------------
// Lista<T1> -> mapear() -> Lista<T2>
//--------------------------------------------
function mapear(array){
    const transformado = array.map(function(elem){
        console.log(elem.length)
        return elem.length; 
    })
    return transformado;
}// ()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarMapear(array,arrayPrueba){
    const resultado = mapear(array);
    for(let i = 0; i < resultado.length; i++){
        if(resultado[i] != arrayPrueba[i]){
            console.log("Esta mal")
            break;
        }
    }// for
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