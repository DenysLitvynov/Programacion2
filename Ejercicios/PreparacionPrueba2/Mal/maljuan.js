/*---------------------------------------------------------------------------------------------------------

Alumno: Juan Bta. Peris Fontestad

Curso: 1º GTI

--------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------------------------------------

Ejercicio 2: Diseña una función que reciba una lista x de números reales y un polinomio ( función pasada como parámetro a otra) y devuelva el valor del polinomio para cada número de la lista x.

implementa esta función usando mapear().

escribe una prueba automática para esta función.

--------------------------------------------------------------------------------------------------------*/
function mapear(lista, transformacion) {

    const resultado = [];

    for (let i = 0; i < lista.length; i++) {

        resultado.push(transformacion(lista[i]));

    }

    return resultado;

}

/-----------------------------------------------------------------------------------------------------------------------/
function valorPolinomio(listaNumeros, polinomio) {

    const resultados = [];

    for (let i = 0; i < listaNumeros.length; i++){

        resultados.push(polinomio(listaNumeros[i]));

    }

    return resultados;

}

// Prueba automática
function pruebavalorPolinomio() {

    const listaNumeros = [1, 2, 3, 4, 5];

    const resultados = valorPolinomio(listaNumeros, (x) => x * x + 2 * x + 1);

    const resultadosEsperados = [4, 9, 16, 25, 36];

    let pruebaExitosa = true;

    for (let i = 0; i < listaNumeros.length; i++) {

        if (resultados[i] !== resultadosEsperados[i]) {

            pruebaExitosa = false;

            break;

        }

    }

    if (!pruebaExitosa) {

        console.log("Error en los valores del polinomio, compruebe el codigo.");

    }

    else {

        console.log("valores del Polinomio OK");

    }
}

pruebavalorPolinomio();