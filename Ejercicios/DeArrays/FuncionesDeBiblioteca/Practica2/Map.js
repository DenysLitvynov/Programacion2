//
// Archivo: Map.js
// Descripción:  Pruébala de forma automática transformado una lista de palabras en una lista con las longitudes de cada palabra de la primera lista.
// Fecha: 19/03/2024
// Nombre: Denys Litvynov
//

//--------------------------------------------
// Lista<Palabras: texto> -> calcularLongitudPalabras() -> Lista<Longitudes: N>
//--------------------------------------------
function calcularLongitudPalabras(array){
    return array.map(function(elem){
        return elem.length;
    })
}

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarCalcularLongitudPalabras(array,arrayPrueba){
    const resultado = calcularLongitudPalabras(array);
    for(let elem of resultado){
        if(!arrayPrueba.includes(elem)){
            console.log("Esta mal");
            break;
        }
    }// for
}// ()

//--------------------------------------------
// main()
//--------------------------------------------

const array = ["Juan", "Explosion", "Elexir", "Hola"];
const arrayPrueba = [4,9,6,4];
probarCalcularLongitudPalabras(array,arrayPrueba);

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------