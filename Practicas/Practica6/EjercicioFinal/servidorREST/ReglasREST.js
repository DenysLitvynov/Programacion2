// ----------------------------------------------
// ReglasREST.js
// ----------------------------------------------
// Esta línea exporta una función llamada "cargar"
// La función recibe dos parámetros: "servidorExpress" y "laLogica".
module.exports.cargar = function(servidorExpress, laLogica){
    // ----------------------------------------------
    // GET / prueba
    // ----------------------------------------------
    servidorExpress.get('/prueba', function (peticion, respuesta){
        console.log(" * GET / prueba")
        respuesta.send("¡Funciona!")
    }) // get / prueba

    // .......................................................
    // GET /persona/<dni>
    // .......................................................
    servidorExpress.get(
        '/persona/:dni',
        async function( peticion, respuesta ){
            console.log( " * GET /persona " )
            // averiguo el dni
            var dni = peticion.params.dni
            // llamo a la función adecuada de la lógica
            var res = await laLogica.buscarPersonaConDNI( dni )
            // si el array de resultados no tiene una casilla ...
            if( res.length != 1 ) {
                // 404: not found
                respuesta.status(404).send( "no encontré dni: " + dni )
                return
            }
            // todo ok
            respuesta.send( JSON.stringify( res[0] ) )
    }) // get /persona

    // ----------------------------------------------
    // DELETE /borrar/:tabla
    // ----------------------------------------------
    servidorExpress.delete('/borrar/:tabla', async function (peticion, respuesta) {
        console.log(" * DELETE /borrar/" + peticion.params.tabla)
        try {
            await laLogica.borrarFilasDe(peticion.params.tabla);
            respuesta.send({ resultado: "ok" });
        } catch (error) {
            console.error("Error al borrar filas:", error);
            respuesta.status(500).send({ error: "Error al borrar filas" });
        }
    }); // delete /borrar/:tabla


}// cargar()
    
// ----------------------------------------------
// ----------------------------------------------
