//
// Archivo: Filtros.js
// Descripción: Implementa la función filtrar(). Pruébala de forma automática 
// seleccionando de una lista de palabras, aquéllas que contengan la letra ’x’.
// Fecha: 01/03/2024 
// Nombre: Denys Litvynov
//

//
// Lista<T> (T -> V/F) -> filtrar() -> Lista<T>
//
function filtrar(array,condicion){
    const resultado = [];
    for(let i = 0; i < array.length; i++){
        if(condicion(array,i)){
            resultado.push(array[i]);
        }
    }// for
    return resultado;
}// ()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función filtrar()
function probarFiltrar(){
    const array = ["Elixir","Sintaxis","Hola","Cinco","Matrix"];
    const res = filtrar(array, function(arr,i){
        if(arr[i].includes("x")){
            return true;
        }
        return false;
    });
    const arrayPrueba = ["Elixir","Sintaxis","Matrix"];
    for(let i = 0; i<res.length; i++){
        //console.log(res[i], " ", arrayPrueba[i]);
        if(res[i]!=arrayPrueba[i]){
            console.log("Esta mal");
        }
    }// for
}// ()

//--------------------------------------------
// main()
//--------------------------------------------

probarFiltrar();

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------