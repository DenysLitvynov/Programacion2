// .....................................................................
// Logica.js
// .....................................................................
const sqlite3 = require( "sqlite3" )

// .....................................................................
// .....................................................................

module.exports = class Logica {

    // .................................................................
    // nombreBD: Texto
    // -->
    // constructor () -->
    //
    // recibe el nombre de la tabla deseada y inicia una conexion con ella, 
    // en el caso de que haya un error lo deevuelve con un callback
    // .................................................................
    constructor( nombreBD, cb ) {
        this.laConexion = new sqlite3.Database(nombreBD,( err ) => {
            if( ! err ) {
                this.laConexion.run( "PRAGMA foreign_keys = ON" )
            }
            cb( err)
        })
    } // ()

    // .................................................................
    // nombreTabla:Texto
    // -->
    // borrarFilasDe() -->
    //
    // borra todas las filas de la tabla deseada, en el caso de que hubiera un error lo deevuelve con una promesa
    // .................................................................
    borrarFilasDe( tabla ) {
        return new Promise( (resolver, rechazar) => {
            this.laConexion.run(
                "delete from " + tabla + ";",(err) => ( err ? rechazar(err) : resolver() )
            )
        })
    } // ()

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
    // datos:{dni:Texto, nombre:Texto: apellidos:Texto}
    // -->
    // insertarPersona() -->
    // 
    // recibe todos los datos necesarios para la tabla Persona y los inserta en ella, 
    // en el caso de que haya un error lo devuelve como una promesa
    // .................................................................
    insertarPersona( datos ) {
        var textoSQL = 'insert into Persona values( $dni, $nombre, $apellidos );'
        var valoresParaSQL = { $dni: datos.dni, $nombre: datos.nombre, $apellidos: datos.apellidos }
        return new Promise( (resolver, rechazar) => {
            this.laConexion.run( textoSQL, valoresParaSQL, function( err ) {
                ( err ? rechazar(err) : resolver() )
            })
        })
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
    
    // .................................................................
    // cerrar() -->
    // 
    // simplemente cierra la conexion con la base de datos, ni recibe ni devuelve nada
    // .................................................................
    cerrar() {
        return new Promise( (resolver, rechazar) => {
            this.laConexion.close( (err)=>{
                ( err ? rechazar(err) : resolver() )
            })
        })
    } // ()

} // class

// .....................................................................
// .....................................................................
      