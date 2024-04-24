function leerMediciones(nombre) {
    return new Promise(function (resolve, reject) {
        fs.readFile(nombre, "utf8", function (err, contenido) {

            if (err) {

                console.log("Hubo un problema al leer el archivo " + nombre);

                reject(err);

            }

            else {

                try {

                    const ubicaciones = JSON.parse(contenido);

                    resolve(ubicaciones);

                }

                catch (error) {

                    console.log("El contenido del archivo no es válido JSON.");

                    reject(error);

                }

            }

        });

    });

}


/*---------------------------------------------------------------------------------------------------------
Diseño:

        mediciones:[objetos] -> listaSensores() -> [sensores]

----------------------------------------------------------------------------------------------------------*/

function listaSensores(mediciones) {
    return mediciones.reduce(function (resultado, sensor) {

        if (resultado.includes(sensor.id_sensor)) {

            return resultado

        }

        else {

            resultado.push(sensor.id_sensor)

        }

        return resultado

    }, [])

}

/*---------------------------------------------------------------------------------------------------------
Diseño:

mediciones:[objetos]->
                       UltimaMedidaSensor() -> N
   txt:nombre->

----------------------------------------------------------------------------------------------------------*/

function ultimaMedidaSensor(mediciones, nameSensor) {
    return mediciones.reduce(function (resultado, sensor) {

        if (sensor.id_sensor === nameSensor) {

            if (sensor.cuando > resultado) {

                resultado = sensor.cuando;

            }

        }

        return resultado

    }, 0)

}

/*---------------------------------------------------------------------------------------------------------
Diseño:

            mediciones:[objetos]-> ultimaMedidCadaSensor() -> objeto:[sensores]

----------------------------------------------------------------------------------------------------------*/

function ultimaMedidaCadaSensor(mediciones) {

    let listSensores = listaSensores(mediciones)
    return listSensores.map(function (sensor) {

        return { id_Sensor: sensor, cuando: ultimaMedidaSensor(mediciones, sensor) }

    })

}

async function main() {

    try {
       

        const nombreArchivo = "mediciones.json";

        const mediciones = await leerMediciones(nombreArchivo);

        const resultadoEsperado = [

            { id_Sensor: 'sens-1', cuando: 1002 },

            { id_Sensor: 'sens-2', cuando: 1020 },

            { id_Sensor: 'sens-3', cuando: 1020 }

        ];

        const resultadoObtenido = ultimaMedidaCadaSensor(mediciones);

        if (JSON.stringify(resultadoEsperado) === JSON.stringify(resultadoObtenido)) {


            console.log("La prueba pasó correctamente.");

        }

        else {

            console.log("La prueba falló. El resultado obtenido es:", resultadoObtenido);

        }

    }

    catch (error) {

        console.error("Hubo un error:", error);

    }

}

main();