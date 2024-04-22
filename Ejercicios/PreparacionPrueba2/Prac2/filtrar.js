//
// Archivo: filtrar.js
// Descripción: Implementa la función filtrar(). Pruébala de forma automática 
// seleccionando de una lista de palabras, aquéllas que contengan la letra ’x’.
// Fecha: 20/04/2024
// Nombre: Denys Litvynov
//

//--------------------------------------------
// Lista<T> T->V/F -> filtrar() -> Lista<T>
//--------------------------------------------
function filtrar(array,condicion){
    const resultado = [];
    for(let i = 0; i < array.length; i++){
        if(condicion(array[i])){
            resultado.push(array[i]);
        }
    }// for
    return resultado;
}//()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarFiltrar(array, arrayPrueba){
    const res = filtrar(array, function(elem){
        if(elem.includes("x")){
            return true;
        }
        return false;
    });
    for(let i = 0; i<res.length; i++){
        if(array[i] != arrayPrueba[i]){
            console.log("Esta mal")
            break;
        }
    }// for
}//()

//--------------------------------------------
// main()
//--------------------------------------------

const arr = ["Elixir","Sintaxis","Hola","Cinco","Matrix"];
const arrPrueba = ["Elixir","Sintaxis","Matrix"];
probarFiltrar(arr,arrPrueba);

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------