//Forma correcta de leer un fichero y sacar su contenido por pantalla
//mediante un callback para devolver el resultado

//la función leefichero recibe como parámetro un callback 
function leefichero(f){
  var fs = require( "fs" )
  //recordemos que readFile es una función asíncrona
  fs.readFile( "hola.txt", "utf8", function( err, contenido ) {
    //Si no hemos podido leer el fichero correctamente...	  
    if( err ) {
      console.log( "hubo un problema al leer de hola.txt" )
      return
    }
    //le pasamos lo que hemos leído al callback y que haga con ello lo que tenga programado
    f(contenido)
  })
}

//llamamos a la función leefichero con un callback
//como se ve el callback lo que hace es sacar el contenido de lo que se le pase por pantalla
leefichero(function(texto){
	console.log(texto)
})