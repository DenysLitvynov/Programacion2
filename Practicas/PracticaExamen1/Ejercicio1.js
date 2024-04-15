//
// Archivo: Ejercicio1.js
// Descripción: Diseña una función insertar() que reciba un real x y una lista de reales (que puede estar vacia)
// ordenados de menor a mayor, e inserte x en la lista en la posición adecuada para que la lista obtenida tmabién 
// este ordenada. Impelementa la función insertar usando reducir(). Pista: usa este objeto {menores:[], mayores:[]}
// como acumulador para reducir() y, luego, crea la lista resultado concatenandno (ejemplo: u=(l1.concat(l2)) lo obtenido.
// Escribe una prueba automática para la función insertar()
// Fecha: 26/03/2024
// Nombre: Denys Litvynov
//

//--------------------------------------------
// lista: [R] x:R -> insertar() -> listaRes:[R]
//--------------------------------------------
function insertar(array, x){
    let objeto = array.reduce(function(acum,elem){
        if (elem < x){
            acum.menores.push(elem);
        }
        else {
            acum.mayores.push(elem);
        }
        return acum;
    },{menores: [], mayores: []});
    objeto.menores.push(x);
    let arrayRes = objeto.menores.concat(objeto.mayores);
    return arrayRes;
}// ()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarInsertar(array, x, arrayEsp){
    const arrayRes = insertar(array,x);
    for(let i = 0; i<arrayRes.length; i++){
        if(arrayRes[i] !== arrayEsp[i]){
            console.log("Esta mal");
            break;
        }
    }// for
}// ()

//--------------------------------------------
// main()
//--------------------------------------------

const array = [1,2,4,5];
const arrayEsp = [1,2,3,4,5];
probarInsertar(array,3, arrayEsp);

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------