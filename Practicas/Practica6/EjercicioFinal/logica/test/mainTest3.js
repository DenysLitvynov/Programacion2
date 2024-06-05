// ........................................................
// mainTest3.js
// ........................................................
const Logica = require( "../Logica.js" )
var assert = require ('assert')

// ........................................................
// main ()
// ........................................................

describe( "Test 3: realizar matricula", function(){
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

    it("puedo realizar una matricula", async function(){
        await laLogica.insertarPersona( {dni: "1234A", nombre: "Pepe", apellidos: "García Pérez" } )
        await laLogica.insertarAsignatura({ codigo: "CS101", nombre: "Economia" });
        await laLogica.realizarMatricula({dni: "1234A", codigo: "CS101"});
        var res = await laLogica.buscarMatriculaPorClave("1234A", "CS101");
        // Verificar que se ha insertado correctamente
        assert.equal(res.length, 1,  "La matrícula no se insertó correctamente");
        assert.equal(res[0].dni, "1234A", "El DNI del estudiante no coincide");
        assert.equal(res[0].codigo, "CS101", "El código de la asignatura no coincide");
    })

    it("cerrar conexión a la base de datos", async function() {
        try {
            await laLogica.cerrar();
        } catch(err) {
            throw new Error("Error al cerrar conexión a BD: " + err);
        }
    })// it
}) // describe