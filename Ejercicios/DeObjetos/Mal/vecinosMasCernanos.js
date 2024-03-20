function encontrarLosKVecinosCercanos(k, puntoBusqueda, puntos) {

    const calcularDistancia = (punto1, punto2) => {

        const dx = punto1.x - punto2.x;

        const dy = punto1.y - punto2.y;

        return Math.sqrt(dx * dx + dy * dy);

    };

    const distancias = [];

    for (let i = 0; i < puntos.length; i++) {

        const distancia = calcularDistancia(puntoBusqueda, puntos[i]);

        distancias.push({

            punto: puntos[i],

            distancia: distancia

        });
                                                                                                                                                                                           
    }

    distancias.sort((a, b) => a.distancia - b.distancia);

    const vecinosCercanos = [];

    for (let i = 0; i < k && i < distancias.length; i++) {

        vecinosCercanos.push(distancias[i].punto);

    }
    
    return vecinosCercanos;

}

function pruebaEncontrarLosKVecinosCercanos() {

    const puntos = [
        { "x": 1, "y": 2 },
        { "x": 3, "y": 4 },
        { "x": 5, "y": 6 },
        { "x": 7, "y": 8 },
        { "x": 9, "y": 10 },
        { "x": 11, "y": 12 },
        { "x": 13, "y": 14 },
        { "x": 15, "y": 16 },
        { "x": 17, "y": 18 },
        { "x": 19, "y": 20 },
        { "x": 20, "y": 21 },
        { "x": 21, "y": 22 },
        { "x": 23, "y": 24 },
    ];

    const puntoBusqueda = { x: 22, y: 23 };

    const cantidadVecinos = 3;

    const resultadoActual = encontrarLosKVecinosCercanos(cantidadVecinos, puntoBusqueda, puntos);

    const resultadoEsperado = [

        { "x": 21, "y": 22 },
        { "x": 23, "y": 24 },
        { "x": 20, "y": 21 }

    ];

    if (JSON.stringify(resultadoActual) !== JSON.stringify(resultadoEsperado)) {

        console.log('Error, compruebe el código.');

    }

    else {

        console.log('OK');

    }

}
  
pruebaEncontrarLosKVecinosCercanos();