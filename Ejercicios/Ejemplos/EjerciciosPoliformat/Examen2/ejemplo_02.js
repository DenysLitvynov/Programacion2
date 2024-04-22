//Forma incorrecta de leer un fichero y sacar su contenido por pantalla
//esto es lo que me habéis hecho muchas veces y os he explicado porque no funciona

//la función leefichero no recibe argumentos
function leefichero(){
  var fs = require( "fs" )
  //recordemos que readFile es una función asíncrona
  fs.readFile( "hola.txt", "utf8", function( err, contenido ) {
    //Si no hemos podido leer el fichero correctamente...	  
    if( err ) {
      console.log( "hubo un problema al leer de hola.txt" )
    return
  }
  //aquí intentamos devolver resultado de lo que hemos leido 
  return contenido
  })
}

//llamamos a la función leefichero
//pero al utilizar la función asíncrona readFile se crean dos puntos de ejecución
//un punto de ejecución está leyendo el fichero, el segundo (al mismo tiempo) está cogiendo el resultado de la lectura del fichero
//y sacándolo por pantalla, como el segundo pide el resultado a la función antes que termine el primero
//resultado obtiene el valor de “undefined” que es lo que nos sale por pantalla
var resultado=leefichero()
console.log(resultado)