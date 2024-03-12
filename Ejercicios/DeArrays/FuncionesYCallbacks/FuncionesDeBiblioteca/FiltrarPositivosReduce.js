//
// Archivo: FiltrarPositivosReduce.js
// Descripción: Hacer una función que recorre una lista de números y todos sus elementos positivos los mete en otra lista
// Fecha: 12/03/2024
// Nombre: Denys Litvynov
//

//
// Lista<T> (T -> V/F) -> filtrar() -> Lista<T>
//
function filtrar(array,fnAcomular){
    return array.reduce(fnAcomular);
}

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarFiltrar(array){
    const arrayRes = filtrar(array, function(acom,elem){
        if(elem>0){
            acom.push(elem);
        }
        return acom;
    },[])
}

//--------------------------------------------
// main()
//--------------------------------------------

const array = [-1,2,-3,4,-5];
probarFiltrar(array);

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------