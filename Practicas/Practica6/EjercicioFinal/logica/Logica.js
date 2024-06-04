// ----------------------------------------------
// Logica.js
// ----------------------------------------------
const sqlite3 = require( "sqlite3" );

// ----------------------------------------------
// ----------------------------------------------

module.exports = class Logica {

    // ----------------------------------------------
    // nombreBD: Texto
    // --> 
    // constructor() -->
    // ----------------------------------------------
    constructor( nombreBD, cb) {
        this.laConexion = new sqlite3.Database(nombreBD, (err) => {
            if(!err){
                this.laConexion.run( "PRAGMA foreign_keys = ON")
            }
            cb(err);
        })
    }// ()

    // ----------------------------------------------
    // nombreTabla: Texto
    // --> 
    // borrarFilasDe() -->
    // ----------------------------------------------
    borrarFilasDe( tabla ){
        return new Promise( (resolve, reject) => {
            this.laConexion.run(
                "delete from " + tabla + ";", (err) => (err ? reject(err) : resolve() )
            )
        })
    }// ()

    // .................................................................
    // borrarFilasDeTodasLasTablas() -->
    //
    // borra todas las filas de todas las tablas, no devuelve nada
    // .................................................................
    async borrarFilasDeTodasLasTablas() {
        await this.borrarFilasDe( "Matricula" )
        await this.borrarFilasDe( "Asignatura" )
        await this.borrarFilasDe( "Persona" )
    } // ()

    // .................................................................
    // dni:Texto
    // -->
    // buscarPersonaPorDNI() <--
    // <--
    // {dni:Texto, nombre:Texto: apellidos:Texto}
    // 
    // recibe el DNI de una persona y en el caso que este en la tabla devuelve todos sus datos
    // si no esta devuelve un error con una promesa
    // .................................................................
    buscarPersonaConDNI( dni ) {
        var textoSQL = "select * from Persona where dni=$dni";
        var valoresParaSQL = { $dni: dni }
        return new Promise( (resolver, rechazar) => {
            this.laConexion.all( textoSQL, valoresParaSQL,( err, res ) => {
                ( err ? rechazar(err) : resolver(res) )
            })
        })
    } // ()

    // ----------------------------------------------
    // cerrar() --> 
    // ----------------------------------------------
    cerrar() {
        return new Promise( (resolve, reject) => {
            this.laConexion.close( (err)=>{
                (err ? reject(err) : resolve())
            })
        })
    }// ()

}// class

// ----------------------------------------------
// ----------------------------------------------
