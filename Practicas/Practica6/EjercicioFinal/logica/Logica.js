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

    // ----------------------------------------------
    // borrarFilasDeTodasLasTablas() -->
    // ----------------------------------------------
    async borrarFilasDeTodasLasTablas() {
        await this.borrarFilasDe( "Matricula" )
        await this.borrarFilasDe( "Asignatura" )
        await this.borrarFilasDe( "Persona" )
    } // ()

    // ----------------------------------------------
    // datos:{dni:Texto, nombre:Texto: apellidos: Texto}
    // -->
    // insertarPersona() 
    // ----------------------------------------------
    insertarPersona( datos ){
        var textoSQL = 'insert into Persona values ( $dni, $nombre, $apellidos );'
        var valoresParaSQL = { $dni: datos.dni, $nombre: datos.nombre, $apellidos: datos.apellidos }
        return new Promise( (resolve, reject) => {
            this.laConexion.run( textoSQL, valoresParaSQL, function( err ) {
                ( err ? reject(err) : resolve() )
            })
        })
    }//()

    // .................................................................
    // asignatura:{codigo:Texto, nombre:Texto}
    // -->
    // insertarAsignatura() -->
    // .................................................................
    insertarAsignatura(asignatura){
        var textoSQL = 'insert into Asignatura values( $codigo, $nombre);'
        var valoresParaSQL = {$codigo: asignatura.codigo, $nombre: asignatura.nombre};
        return new Promise((resolve, reject) => {
            this.laConexion.run( textoSQL, valoresParaSQL, function(err) {
                (err ? reject(err) : resolve())
            })
        })
    }//()

    // .................................................................
    // matricula:{dni:Texto, codigo:Texto}
    // -->
    // realizarMatricula() -->
    // .................................................................
    realizarMatricula(matricula){
        var textoSQL = 'insert into Matricula values($dni, $codigo);'
        var valoresParaSQL = {$dni: matricula.dni, $codigo: matricula.codigo};
        return new Promise((resolve, reject) => {
            this.laConexion.run( textoSQL, valoresParaSQL, function(err){
                (err ? reject(err) : resolve())
            })
        })
    }//()

    // ----------------------------------------------
    // dni:Texto
    // -->
    // buscarPersonaPorDNI() <--
    // <--
    // {dni:Texto, nombre:Texto: apellidos:Texto}
    // ----------------------------------------------
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
    // codigo:Texto
    // -->
    // buscarAsignaturaPorCodigo() <--
    // <--
    // {codigo:Texto, nombre:Texto}
    // ----------------------------------------------
    buscarAsignaturaPorCodigo( codigo ) {
        var textoSQL = "select * from Asignatura where codigo=$codigo";
        var valoresParaSQL = {$codigo: codigo}
        return new Promise((resolve, reject) => {
            this.laConexion.all(textoSQL, valoresParaSQL,(err, res) => {
                (err ? reject(err) : resolve(res) )
            })
        })
    }// ()

    // ----------------------------------------------
    // apellidos: Texto
    // -->
    // obtenerAsignaturas() <--
    // <--
    // codigos:[Texto]
    // ----------------------------------------------
    obtenerAsignaturasPorApellidos(apellidos) {
        var textoSQL = "select Matricula.codigo from Matricula inner join Persona on Matricula.dni = Persona.dni where Persona.apellidos = $apellidos";
        var valoresParaSQL = { $apellidos: apellidos };
        return new Promise((resolver, rechazar) => {
            this.laConexion.all(textoSQL, valoresParaSQL, (err, res) => {
                if (err) {
                    rechazar(err);
                } else {
                    // Extraer solo los códigos de las asignaturas de los resultados.
                    var codigos = res.map(row => row.codigo);
                    resolver(codigos);
                }
            });
        });
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
