// ----------------------------------------------
// mainTest1.js
// ----------------------------------------------
const Logica = require( "../Logica.js" )
var assert = require ('assert')

// ----------------------------------------------
// main()
// ----------------------------------------------
describe( "Test 1: insertar una persona", function() {
    // ----------------------------------------------
    // ----------------------------------------------
    var laLogica = null;
    // ----------------------------------------------
    // ----------------------------------------------
    it( "conectar a la base de datos", function( hecho ) {
        laLogica = new Logica(
            "../bd/datos.bd",
            function( err ) {
                if(err){
                    throw new Error ("No he podido conectar con datos.bd")
                }
                hecho()
            }
        )
    })// it

    // ----------------------------------------------
    // ----------------------------------------------
    // ----------------------------------------------
    it( "cerrar conexión a la base de datos",
        async function() {
            try{
                await laLogica.cerrar()
            } catch( err ){
                throw new Error("cerrar conexión a BD fallada: " + err)
            }
        }
    )// it
})// describe