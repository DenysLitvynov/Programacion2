//
// Archivo: filtrar.js
// Descripción: Implementa la función filtrar(). Pruébala de forma automática 
// seleccionando de una lista de palabras, aquéllas que contengan la letra ’x’.
// Fecha: 20/04/2024
// Nombre: Denys Litvynov
//

//--------------------------------------------
// Lista<T> -> filtrar() -> Lista<T>
//--------------------------------------------
function filtrar(array){
    const filtrado = array.filter(function(elem){
        if(elem.includes("x")){
            return elem;
        }
    })
    return filtrado; 
}//()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarFiltrar(array,arrayPrueba){
    const resultado = filtrar(array);
    for(let i = 0; i<resultado.length; i++){
        if(resultado[i] != arrayPrueba[i]){
            console.log("Esta mal")
            break;
        }
    }// for
}// ()

//--------------------------------------------
// main()
//--------------------------------------------

const arr = ["Elixir","Sintaxis","Hola","Cinco","Matrix"];
const arrPrueba = ["Elixir","Sintaxis","Matrix"];
probarFiltrar(arr,arrPrueba);

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------