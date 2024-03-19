//Hecho por Juan Diaz

// ––––––––––––––––––––––––––––-------------------------------------------------------------------------------
//  listaEntero: [Z] ----> cualNumeroslistaSeRepiteMas()-----> objetoDevolver: JSON{numero:Z , rep: N}
// ––––––––––––––––––––––––––––-------------------------------------------------------------------------------
function cualNumeroslistaSeRepitemas(listaEnteros) {
    // Parte 1: Contar las repeticiones de cada número y almacenarlas en un nuevo arreglo.
    let listaEnteros10casillas = listaEnteros.reduce(function (acum, currentValue) {
        // Incrementar el conteo de repeticiones del número actual en el arreglo acumulador.
        acum[currentValue] += 1;
        // Devolver el arreglo acumulador modificado para la siguiente iteración.
        return acum;
    }, [0,0,0,0,0,0,0,0,0,0]);

    // Parte 2: Determinar qué número se repite más y cuántas veces se repite.
    let objetoDevolver = listaEnteros10casillas.reduce(function (acum, currentValue, currentIndex) {
        // Comprobar si el número actual tiene más repeticiones que el registrado anteriormente.
        if (acum.rep < currentValue) {
            // Si el número actual tiene más repeticiones, actualizar el objeto acumulador.
            acum.rep = currentValue; // Actualizar la cantidad máxima de repeticiones.
            acum.numero = currentIndex; // Actualizar el número que más se repite.
        }
        // Devolver el objeto acumulador modificado para la siguiente iteración.
        console.log(acum);
        return acum;
    }, { numero: 0, rep: 0 });

    // Devolver el objeto que contiene el número más repetido y la cantidad de repeticiones.
    return objetoDevolver;
}


// main()

let listaOutPrueba = [1, 5, 5, 2, 7, 8, 9, 5, 4, 2, 3, 5]; //Lista 1 para hacer la prueba
//let listaOutPrueba2 = [1,9,3,2,4,5,9,9,1]// Lista 2 para hacer la prueba

let numeroCorrectoPrueba = 2;
//let numeroCorrectoPrueba2 = 9;

let objetoOut = cualNumeroslistaSeRepitemas(listaOutPrueba);
//let objetoOut2 = cualNumeroslistaSeRepitemas(listaOutPrueba2);


if (objetoOut.numero === 2) {
    console.log("Esta bien")
}
else {
    console.log("Esta mal")
}