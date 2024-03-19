 // Esta funci�n recibe una lista de n�meros y devuelve el que m�s se repite.

 function reducir(lista, reduccion, transformacion) {
    for (i = 0; i < lista.length; i++) {
        reduccion = transformacion(reduccion, lista[i]);
    }
    return reduccion;
}

function numeroMasRepetido(lista) {
    console.log(lista);

    let listarepetidos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    const red1 = reducir(lista, listarepetidos, function (l, n) {
        l[n]++;
        return l;
    });

    console.log('----' + red1);

    let posicionMax = 0;
    const red2 = reducir(red1, 0, function (pos, n) {

        if (n > red1[posicionMax]) {
            posicionMax = pos;
        }
        pos++;
        return pos;
    });
    console.log('>>>>' + posicionMax);
    return { numero: posicionMax, veces: red1[posicionMax] };
}

function main() {

    // Se crea una lista de prueba y se llama a la funci�n numeroMasRepetido


    const listaEjemplo = [1, 2, 3, 1, 2, 3, 1, 2, 3, 2, 2, 9, 9, 9, 9, 9, 9, 9, 5, 3, 3, 3, 3, 3, 3, 3];

    const numeroMasRepetidoEnEjemplo = numeroMasRepetido(listaEjemplo);

    // Muestra el resultado.

    console.log('En la lista, el numero que mas se repite es: ' + numeroMasRepetidoEnEjemplo.numero + ', que se repite ' + numeroMasRepetidoEnEjemplo.veces + ' veces');
}

main();