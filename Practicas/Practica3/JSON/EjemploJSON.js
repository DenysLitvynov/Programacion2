//
// Archivo: EjemploJSON.js
// Descripción: Prueba los anteriores ejemplos.
// Fecha: 06/03/2024
// Nombre: Denys Litvynov
//

// aun no es un JSON, es un objeto que hemos de convertir a JSON
var unaPersona = {
    dni : "20123567R",
    nombre : "Juan",
    apellidos : "García Pérez",
    edad : 19,
    telefonos : [696234567, 676456123]
}

console.log(unaPersona); // mostramos el contenido del objeto

var texto = JSON.stringify( unaPersona ) // Convertir un objeto a texto JSON

console.log(texto); // tras convertir el objeto a JSON mostramos su contenido

var juan = JSON.parse( texto ) // Convertir un texto en formato JSON a un objeto

console.log(juan); // tras volver a convertir el texto a un objeto lo mostramos y vemos que es lo mismo que al principio


//--------------------------------------------
//--------------------------------------------
//--------------------------------------------