//
// Archivo: EjemploJson.js
// Descripción: Prueba los anteriores ejemplos.
// Fecha: 14/03/2024
// Nombre: Denys Litvynov
//

// un objeto normal y corriente 
var unaPersona = {
    dni : "20123567R",
    nombre : "Juan",
    apellidos : "García Pérez",
    edad : 19,
    telefonos : [696234567, 676456123]
}

var texto = JSON.stringify( unaPersona ); // para convertir texto a JSON

var juan = JSON.parse( texto ); // para convertir de JSON a texto otra vez, es decir a objeto normal
