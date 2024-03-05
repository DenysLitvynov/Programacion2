//
// Archivo: FiltrarPositivosFCP.js
// Descripción: Hacer una función que recorre una lista de números y todos sus elementos positivos los mete en otra lista
// Fecha: 04/03/24
// Nombre: Denys Litvynov
//

//
// Lista<T> (T -> V/F) -> filtrar() -> Lista<T>
//
function filtrarPositivos(array,condicion){
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
function probarFiltrarPositivos(){
    const array = [1,-2,3,-4,5];
    const res = filtrarPositivos(array, function(arr,i){
        if(arr[i]>0){
            return true;
        }
        return false;
    });
    const arrayPrueba = [1,3,5];
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

probarFiltrarPositivos();

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------