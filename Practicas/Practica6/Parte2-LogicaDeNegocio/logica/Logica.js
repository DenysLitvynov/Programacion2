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
    // asignatura:{codigo:Texto, nombre:Texto}
    // -->
    // insertarAsignatura() -->
    // 
    // recibe todos los datos necesarios para la tabla Asignatura de una asignatura (su codigo y nombre) 
    // y lo inserta en la tabla (la da de alta)
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
    // 
    // Recibe el codigo de una asignatura y el dni de una persona y realiza la matricula
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
    // codigo:Texto
    // -->
    // buscarAsignaturaPorCodigo() <--
    // <--
    // {codigo:Texto, nombre:Texto}
    // 
    // Recibe el código de una asignatura y, en caso de que exista en la tabla, devuelve sus datos.
    // En caso contrario, devuelve un error con una promesa.
    // .................................................................
    buscarAsignaturaPorCodigo( codigo ) {
        var textoSQL = "select * from Asignatura where codigo=$codigo";
        var valoresParaSQL = {$codigo: codigo}
        return new Promise((resolve, reject) => {
            this.laConexion.all(textoSQL, valoresParaSQL,(err, res) => {
                (err ? reject(err) : resolve(res) )
            })
        })
    }// ()

    // .................................................................
    // dni_estudiante:Texto, codigo_asignatura:Texto
    // -->
    // buscarMatricula() <--
    // <--
    // {dni_estudiante:Texto, codigo_asignatura:Texto}
    // 
    // Recibe el DNI del estudiante y el código de la asignatura y devuelve los datos de la matrícula si existe.
    // .................................................................
    buscarMatriculaPorClave(dni, codigo){
        var textoSQL = "select * from Matricula where dni=$dni and codigo=$codigo";
        var valoresParaSQL = {$dni: dni, $codigo: codigo}
        return new Promise((resolve, reject) => {
            this.laConexion.all(textoSQL, valoresParaSQL, (err, res) => {
                (err ? reject(err) : resolve(res))
            })
        })
    }//()

    // .................................................................
    // apellidos: Texto
    // -->
    // obtenerAsignaturas() <--
    // <--
    // codigos:[Texto]
    // 
    // Recibe los apellidos de una persona y devuelve un array con los códigos de todas las asignaturas en las que está matriculada esa persona.
    // .................................................................
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
      