//
// Archivo: FiltrarPositivosFilter.js
// Descripción: Hacer una función que recorre una lista de números y todos sus elementos positivos los mete en otra lista
// Fecha: 12/03/2024
// Nombre: Denys Litvynov
//

//
// Lista<T> (T -> V/F) -> filtrar() -> Lista<T>
//
function filtrar(array,fnComprobar){
    return array.filter(fnComprobar);
}// ()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarFiltrar(array){
    const arrayRes = filtrar(array, function(elem){
        if(elem<0){
            return false;
        }
        return true;
    });
    for(let i=0; i<arrayRes.length; i++){
        //console.log(arrayRes[i]);
        if(arrayRes[i]<0){
            console.log("Esta mal")
        }
    }// for
}// ()

//--------------------------------------------
// main()
//--------------------------------------------

const array = [-1,2,-3,4,-5];
probarFiltrar(array);

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------