// ........................................................
// mainTest1.js
// ........................................................
var request = require ('request')
var assert = require ('assert')
// ........................................................
// ........................................................
const IP_PUERTO="http://localhost:8080"
// ........................................................
// main ()
// ........................................................
describe( "Test 1 : Recuerda arrancar el servidor", function() {
    // ....................................................
    // ....................................................
    it( "probar que GET /prueba responde ¡Funciona!", function( hecho ) {
        request.get(
            { url : IP_PUERTO+"/prueba", headers : {'User-Agent' : 'jordi' }},
            function( err, respuesta, carga ) {
                assert.equal( err, null, "¿ha habido un error?" )
                assert.equal( respuesta.statusCode, 200, "¿El código no es 200 (OK)" )
                assert.equal( carga, "¡Funciona!", "¿La carga no es ¡Funciona!?" )
                hecho()
            } // callback()
        ) // .get
    }) // it
    // ....................................................
    // ....................................................
    // Probar GET /persona/:dni
    it("probar GET /persona/:dni", function(hecho) {
        var dni = "Y5039719L"; 
        request.get(
            { url: IP_PUERTO + "/persona/" + dni, headers: { 'User-Agent': 'jordi' }},
            function(err, respuesta, carga) {
                assert.equal(err, null, "¿ha habido un error?");
                assert.equal(respuesta.statusCode, 200, "¿El código no es 200 (OK)?");
                var persona = JSON.parse(carga);
                assert.equal(persona.dni, dni, "¿El DNI no es el esperado?");
                assert.equal(persona.nombre, "Denys", "¿El nombre no es el esperado?");
                assert.equal(persona.apellidos, "Litvynov", "¿Los apellidos no son los esperados?");
                hecho();
            } // callback
        ) // .get
    }) // it
}) // describe
