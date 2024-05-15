// ........................................................
// mainTest2.js
// ........................................................
const Logica = require( "../Logica.js" )
var assert = require ('assert')

// ........................................................
// main ()
// ........................................................

describe( "Test 2: dar de alta una asignatura", function(){
    // ....................................................
    // ....................................................
    var laLogica = null
    // ....................................................
    // ....................................................
    it( "conectar a la base de datos", function( hecho ) {
        laLogica = new Logica(
        "../bd/datos.bd",
        function( err ) {
            if ( err ) {
                throw new Error ("No he podido conectar con datos.db")
            }
        hecho()
        })
    }) // it

    // ....................................................
    // ....................................................
    it( "borrar todas las filas", async function() {
        await laLogica.borrarFilasDeTodasLasTablas()
    }) // it

    it("puedo insertar una asignatura", async function() {
        await laLogica.insertarAsignatura({ codigo: "CS101", nombre: "Economia" });
        var res = await laLogica.buscarAsignaturaPorCodigo("CS101");
        assert.equal(res.length, 1, "¿no hay un resultado?");
        assert.equal(res[0].codigo, "CS101", "¿no es CS101?");
        assert.equal(res[0].nombre, "Economia", "¿no es Economia?");
    })// it

    it("cerrar conexión a la base de datos", async function() {
        try {
            await laLogica.cerrar();
        } catch(err) {
            throw new Error("Error al cerrar conexión a BD: " + err);
        }
    })// it
}) // describe