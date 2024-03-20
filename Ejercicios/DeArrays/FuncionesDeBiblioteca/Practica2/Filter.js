//
// Archivo: Filter.js
// Descripción: Pruébala de forma automática seleccionando de una lista de palabras, aquéllas que contengan la letra ’x’.
// Fecha: 19/03/2024
// Nombre: Denys Litvynov
//

//--------------------------------------------
// Filtrar de una lista de palabras aquellas que tengan X
// Lista<Palabras> -> filtrarConX() -> Lista<PalabrasConX>
//--------------------------------------------
function filtrarConX(array){
    return array.filter(function(elem){
        return elem.includes('x');
    })
}// ()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarFiltrarConX(array,arrayPrueba){
    const resultado = filtrarConX(array);
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
const arrayPrueba = ["Explosion", "Elexir"];
probarFiltrarConX(array,arrayPrueba);

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------