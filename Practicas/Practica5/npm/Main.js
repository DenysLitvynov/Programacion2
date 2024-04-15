//
// Archivo: Main.js
// Descripción: Copia el siguiente fichero en el directorio de trabajo. (Léelo y trata de entender qué hace.
// Fecha: 15/04/2024
// Nombre: Denys Litvynov
//

// requires
const express = require( "express" )

// ––––––––––––––––––––––––––––
// main()
// ––––––––––––––––––––––––––––
// creo un servidor
const servidor = express()
// cuando llegue GET /hola
servidor.get("/hola", function( peticion, respuesta ) {
    respuesta.send( "Hola a todos")
})
// cuando llegue GET /adios
servidor.get("/adios", function( peticion, respuesta ) {
    respuesta.send( "Hasta pronto")
})
// arranco el servicio en el puerto 8080
servidor.listen( 8080, function() {
    console.log( "Escuchando en el puerto 8080")
    console.log( "Conéctate a localhost:8080/hola" )
})
    
/* 
Se instalan las dependencias que son express para el servidor basado en node.js con el comando npm install

Todo a partir del package.json escrito previamente

Si ejecutas npm run ayuda, hay una script en el package.json que te indica que hagas npm run main, te lo muestra en la consola

Cuando ejecutas en la línea de comandos npm run main, se crea el servidor en el puerto 8080

Si el servidor recibe por GET /hola, va a responder "Hola a todos". Es decir cuando entras a localhost:8080/hola. Le haces esa petición

Si el servidor recibe por GET /adios, va a responder "Hasta pronto". Es decir cuando entras a localhost:8080/adios

Nada más se arranca el servidor, se muestra en la consola: "Escuchando en el puerto 8080" y "Conéctate a localhost:8080/hola"
*/

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------