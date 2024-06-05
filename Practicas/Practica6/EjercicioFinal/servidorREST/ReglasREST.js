// ----------------------------------------------
// ReglasREST.js
// ----------------------------------------------
// Esta línea exporta una función llamada "cargar"
// La función recibe dos parámetros: "servidorExpress" y "laLogica".
const bodyParser = require('body-parser');

// Esta línea exporta una función llamada "cargar"
// La función recibe dos parámetros: "servidorExpress" y "laLogica".
module.exports.cargar = function(servidorExpress, laLogica){
    // Configurar el servidor para manejar JSON
    servidorExpress.use(bodyParser.json());
    servidorExpress.use(bodyParser.urlencoded({ extended: true }));

    // ----------------------------------------------
    // GET / prueba
    // ----------------------------------------------
    servidorExpress.get('/prueba', function (peticion, respuesta){
        console.log(" * GET / prueba")
        respuesta.send("¡Funciona!")
    }) // get / prueba

    // ----------------------------------------------
    // GET /persona/<dni>
    // ----------------------------------------------
    servidorExpress.get('/persona/:dni', async function(peticion, respuesta){
        console.log(" * GET /persona ")
        var dni = peticion.params.dni
        try {
            var res = await laLogica.buscarPersonaConDNI(dni)
            if (res.length != 1) {
                respuesta.status(404).send("no encontré dni: " + dni)
                return
            }
            respuesta.send(JSON.stringify(res[0]))
        } catch (error) {
            console.error("Error al buscar persona:", error);
            respuesta.status(500).send({ error: "Error al buscar persona" });
        }
    }) // get /persona

    // ----------------------------------------------
    // DELETE /borrar/:tabla
    // ----------------------------------------------
    servidorExpress.delete('/borrar/:tabla', async function(peticion, respuesta) {
        console.log(" * DELETE /borrar/" + peticion.params.tabla)
        try {
            await laLogica.borrarFilasDe(peticion.params.tabla);
            respuesta.send({ resultado: "ok" });
        } catch (error) {
            console.error("Error al borrar filas:", error);
            respuesta.status(500).send({ error: "Error al borrar filas" });
        }
    }); // delete /borrar/:tabla

    // ----------------------------------------------
    // POST /persona
    // ----------------------------------------------
    servidorExpress.post('/persona', async function(peticion, respuesta) {
        console.log(" * POST /persona con datos: ", peticion.body);

        // Desestructurar los campos esperados del cuerpo de la solicitud
        const { dni, nombre, apellidos } = peticion.body;

        // Verificar si los datos son válidos y no están vacíos
        if (!dni || !nombre || !apellidos) {
            console.error("Faltan datos obligatorios:", { dni, nombre, apellidos });
            respuesta.status(400).send({ error: "Faltan datos obligatorios" });
            return;
        }

        try {
            console.log("Insertando persona con dni:", dni, "nombre:", nombre, "apellidos:", apellidos);
            await laLogica.insertarPersona(peticion.body);
            respuesta.send({ resultado: "ok" });
        } catch (error) {
            console.error("Error al insertar persona:", error);
            respuesta.status(500).send({ error: "Error al insertar persona" });
        }
    }); // post /persona

    // ----------------------------------------------
    // POST /asignatura
    // ----------------------------------------------
    servidorExpress.post('/asignatura', async function(peticion, respuesta) {
        console.log(" * POST /asignatura");
        const { codigo, nombre } = peticion.body;

        if (!codigo || !nombre) {
            respuesta.status(400).send({ error: "Faltan datos obligatorios (codigo, nombre)" });
            return;
        }

        try {
            await laLogica.insertarAsignatura(peticion.body);
            respuesta.send({ resultado: "ok" });
        } catch (error) {
            console.error("Error al insertar asignatura:", error);
            respuesta.status(500).send({ error: "Error al insertar asignatura" });
        }
    }); // post /asignatura

    // ----------------------------------------------
    // POST /matricula
    // ----------------------------------------------
    servidorExpress.post('/matricula', async function(peticion, respuesta) {
        console.log(" * POST /matricula")
        
        // Desestructurar los campos esperados del cuerpo de la solicitud
        const { dni, codigo } = peticion.body;

        // Verificar si los datos son válidos y no están vacíos
        if (!dni || !codigo) {
            console.error("Faltan datos obligatorios:", { dni, codigo });
            respuesta.status(400).send({ error: "Faltan datos obligatorios" });
            return;
        }

        try {
            await laLogica.realizarMatricula(peticion.body);
            respuesta.send({ resultado: "ok" });
        } catch (error) {
            console.error("Error al realizar matrícula:", error);
            respuesta.status(500).send({ error: "Error al realizar matrícula" });
        }
    }); // post /matricula

    // ----------------------------------------------
    // GET /asignatura/:codigo
    // ----------------------------------------------
    servidorExpress.get('/asignatura/:codigo', async function(peticion, respuesta) {
        console.log(" * GET /asignatura")
        var codigo = peticion.params.codigo
        try {
            var res = await laLogica.buscarAsignaturaPorCodigo(codigo);
            if (res.length != 1) {
                respuesta.status(404).send("No encontré código: " + codigo);
                return;
            }
            respuesta.send(JSON.stringify(res[0]));
        } catch (error) {
            console.error("Error al buscar asignatura:", error);
            respuesta.status(500).send({ error: "Error al buscar asignatura" });
        }
    }); // get /asignatura

    // ----------------------------------------------
    // GET /asignaturas/:apellidos
    // ----------------------------------------------
    servidorExpress.get('/asignaturas/:apellidos', async function(peticion, respuesta) {
        console.log(" * GET /asignaturas");
        var apellidos = peticion.params.apellidos;

        try {
            var res = await laLogica.obtenerAsignaturasPorApellidos(apellidos);

            if (res.length === 0) {
                respuesta.status(404).send("No se encontraron asignaturas para los apellidos proporcionados");
                return;
            }

            respuesta.send(JSON.stringify(res));
        } catch (error) {
            console.error("Error al obtener asignaturas:", error);
            respuesta.status(500).send({ error: "Error al obtener asignaturas" });
        }
    }); // get /asignaturas

}// cargar()
