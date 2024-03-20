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
    const palabraConX = array.filter(function(elem){
        if(elem.includes('x')){
            palabraConX.push(elem);
        }
        return palabraConX;
    });
}// ()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarFiltrarConX(array,arrayPrueba){
    const resultado = filtrarConX(array);
    for(let elem of resultado){
        if(elem != arrayPrueba.elem){
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