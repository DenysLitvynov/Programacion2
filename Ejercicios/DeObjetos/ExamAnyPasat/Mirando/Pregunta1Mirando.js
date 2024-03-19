//
// Archivo: Pregunta1.js
// Descripción: Diseña una función que, dada una lista que contiene numeros enteros entre 0 y 9,
// devuelva cual es el que más se repite
// Fecha: 18/03/2024
// Nombre: Denys Litvynov
//

// --------------------------------------------
// array:N -> cualSeRepiteMas() -> resultado: JSON{numero: N, rep: N}
// --------------------------------------------
function cualSeRepiteMas(array){
    // Parte 1: Contar las repeticiones de cada número y almacenarlas en un nuevo array
    let arrayVeces = array.reduce(function(acum, elem){
        acum[elem] += 1; // en cada iteración del bucle a la casilla a la que corresponde el numero se le suma 1 
        return acum;
    }, [0,0,0,0,0,0,0,0,0,0]);

    // Parte 2: Determinar que número se repite más y cuantas veces se repite
    let objetoRes = arrayVeces.reduce(function(acum, elem, index){
        if(acum.rep < elem){ // si un numero se ha repetido mas veces que el actual lo almacenamos en el objeto
            acum.rep = elem;
            acum.numero = index; // ya que cada casilla contiene cuantas veces se repite su numero de casilla en la lista original, "index" es igual al elemento más repetido 
        }
        return acum;
    }, {numero: 0, rep: 0});
    return objetoRes;
}// ()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarCualSeRepiteMas(array){
    const res = cualSeRepiteMas(array);
    if(res.numero != 3 || res.rep != 3){
        console.log("Esta mal");
    }
}// ()

//--------------------------------------------
// main()
//--------------------------------------------

const arrayOriginal = [0,1,3,2,3,3,4,5,6,7,8,9];
probarCualSeRepiteMas(arrayOriginal);

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------