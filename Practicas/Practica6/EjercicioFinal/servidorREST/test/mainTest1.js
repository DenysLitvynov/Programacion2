// ----------------------------------------------
// mainTest1.js
// ----------------------------------------------
var request = require( 'request' )
var assert = require ( 'assert' )
// ----------------------------------------------
// ----------------------------------------------
const IP_PUERTO = "http://localhost:8080"
// ----------------------------------------------
// main()
// ----------------------------------------------
describe("Test 1 : Recuerda arrancar el servidor", function(){
    // ----------------------------------------------
    // ----------------------------------------------
    it("probar que GET/prueba responde ¡Funciona!", function(hecho){
        request.get(
            {url: IP_PUERTO+"/prueba", headers : {'User-Agent' : 'jordi'}},
            function(err, respuesta, carga) {
                assert.equal( err, null, "¿ha habido un error? ")
                assert.equal(respuesta.statusCode, 200, "¿El código no es 200 (OK)")
                assert.equal(carga, "¡Funciona!", "¿La cargan no es ¡Funciona!?")
                hecho();
            }// callback()
        )//.get
    })// it

    it("debería obtener un error 404 desde GET /persona con un DNI inexistente", function (hecho) {
        request.get(
            { url: IP_PUERTO + "/persona/12345678Z", headers: { 'User-Agent': 'jordi' } },
            function (err, respuesta) {
                assert.equal(err, null, "¿ha habido un error?");
                assert.equal(respuesta.statusCode, 404, "¿El código no es 404 (No encontrado)?");
                hecho();
            }
        );
    });

    it("debería obtener un error 404 desde GET /asignatura/:codigo con un código inexistente", function (hecho) {
        request.get(
            { url: IP_PUERTO + "/asignatura/123", headers: { 'User-Agent': 'jordi' } },
            function (err, respuesta) {
                assert.equal(err, null, "¿ha habido un error?");
                assert.equal(respuesta.statusCode, 404, "¿El código no es 404 (No encontrado)?");
                hecho();
            }
        );
    });

    it("debería obtener un error 404 desde GET /matricula/:dni/:codigo con DNI y código inexistentes", function (hecho) {
        request.get(
            { url: IP_PUERTO + "/matricula/12345678Z/123", headers: { 'User-Agent': 'jordi' } },
            function (err, respuesta) {
                assert.equal(err, null, "¿ha habido un error?");
                assert.equal(respuesta.statusCode, 404, "¿El código no es 404 (No encontrado)?");
                hecho();
            }
        );
    });

    it("debería obtener un error 404 desde GET /asignaturas/:apellidos con apellidos inexistentes", function (hecho) {
        request.get(
            { url: IP_PUERTO + "/asignaturas/ApellidoInexistente", headers: { 'User-Agent': 'jordi' } },
            function (err, respuesta) {
                assert.equal(err, null, "¿ha habido un error?");
                assert.equal(respuesta.statusCode, 404, "¿El código no es 404 (No encontrado)?");
                hecho();
            }
        );
    });
})// describe
