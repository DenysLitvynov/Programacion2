// ----------------------------------------------
// mainTest2.js
// ----------------------------------------------
var request = require( 'request' )
var assert = require ( 'assert' )
// ----------------------------------------------
// ----------------------------------------------
const IP_PUERTO = "http://localhost:8080"
// ----------------------------------------------
// main()
// ----------------------------------------------
describe("Test 2 : Recuerda arrancar el servidor", function(){
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

    it("debería obtener un error 500 desde POST /persona con datos faltantes", function (hecho) {
        request.post(
            {
                url: IP_PUERTO + "/persona",
                headers: { 'User-Agent': 'jordi' },
                json: { dni: "12345678Z", apellidos: "Apellido" }
            },
            function (err, respuesta) {
                assert.equal(err, null, "¿ha habido un error?");
                assert.equal(respuesta.statusCode, 400, "¿El código no es 400 (Solicitud incorrecta)?");
                hecho();
            }
        );
    });

    it("debería obtener un error 400 desde POST /matricula con datos faltantes", function (hecho) {
        request.post(
            {
                url: IP_PUERTO + "/matricula",
                headers: { 'User-Agent': 'jordi' },
                json: { dni: "", codigo: "" } // Datos faltantes
            },
            function (err, respuesta) {
                assert.equal(err, null, "¿ha habido un error?");
                assert.equal(respuesta.statusCode, 400, "¿El código no es 400 (Solicitud incorrecta)?");
                hecho();
            }
        );
    });

    it("debería obtener un error 500 desde POST /asignatura con datos faltantes", function (hecho) {
        request.post(
            {
                url: IP_PUERTO + "/asignatura",
                headers: { 'User-Agent': 'jordi' },
                json: { codigo: "123" }
            },
            function (err, respuesta) {
                assert.equal(err, null, "¿ha habido un error?");
                assert.equal(respuesta.statusCode, 400, "¿El código no es 400 (Solicitud incorrecta)?");
                hecho();
            }
        );
    });

    it("debería obtener un error 500 desde DELETE /borrar/todas cuando no hay tablas existentes", function (hecho) {
        request.delete(
            { url: IP_PUERTO + "/borrar/todas", headers: { 'User-Agent': 'jordi' } },
            function (err, respuesta) {
                assert.equal(err, null, "¿ha habido un error?");
                assert.equal(respuesta.statusCode, 500, "¿El código no es 500 (Error interno del servidor)?");
                hecho();
            }
        );
    });
})// describe