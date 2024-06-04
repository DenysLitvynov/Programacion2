// .....................................................................
// ReglasREST.js
// .....................................................................
module.exports.cargar = function( servidorExpress ) {

    // .......................................................
    // GET /prueba
    // .......................................................
    servidorExpress.get('/prueba/', function( peticion, respuesta ){
        console.log( " * GET /prueba " )
        respuesta.send( "¡Funciona!" )
    }) // get /prueba

    // .......................................................
    // GET /longitud/<palabra>
    // .......................................................
    servidorExpress.get(
        '/longitud/:palabra',
        function( peticion, respuesta ){
            console.log( " * GET /longitud " )
            var palabra = peticion.params.palabra
            var solucion = { palabra : palabra, longitud : palabra.length }
            respuesta.send( JSON.stringify( solucion ) )
    }) // get /longitud

    // .......................................................
    // GET /dividir?a=<num>&b=<num>
    // .......................................................
    servidorExpress.get(
        '/dividir',
        function( peticion, respuesta ){
            console.log( " * GET /dividir " )
            var a = peticion.query.a
            var b = peticion.query.b
            if( isNaN(a) || isNaN(b) || b == 0 ) {
                // si a o b no son números, o b es 0
                // no se puede dividir
                // (400 = bad request)
                respuesta.status(400).send(" no puedo dividir ");
                return
            }
            var solucion = { a : a, b : b, division : a/b }
            respuesta.send( JSON.stringify( solucion ) )
    }) // get /dividir

    // .......................................................
    // POST /alta
    // .......................................................
    servidorExpress.post(
        '/alta',
        function( peticion, respuesta ){
            console.log( " * POST /alta " )
            var datos = JSON.parse( peticion.body )
            console.log( datos.dni )
            console.log( datos.nombre )
            console.log( datos.apellidos )
            // supuesto procesamiento
            if( datos.dni == "1234A" ) {
                respuesta.send( "OK" )
            } else {
                // 404 = not found
                respuesta.status( 404 ).send( "no acertaste con el dni" )
            }
    }) // get /dividir
    // POST /division
    servidorExpress.post('/division', function(peticion, respuesta) {
        console.log(" * POST /division");
        var datos = JSON.parse(peticion.body);
        var a = parseFloat(datos.a);
        var b = parseFloat(datos.b);
        if (isNaN(a) || isNaN(b) || b === 0) {
            respuesta.status(400).send("No se puede dividir. Asegúrate de proporcionar dos números válidos y que el divisor no sea cero.");
            return;
        }
        var resultado = a / b;
        respuesta.json({ resultado: resultado });
    }) // post / division
} // ()

// .....................................................................
// .....................................................................            
// .....................................................................
// .....................................................................