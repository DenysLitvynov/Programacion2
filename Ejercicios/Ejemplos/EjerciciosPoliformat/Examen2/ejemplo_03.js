//Forma correcta de leer un fichero y sacarlo por pantalla
//mediante el uso correcto de una promesa

function leerFichero2(){
  //creamos la promesa
  var prom=new Promise(function(resolver,rechazar){
    var fs = require( "fs" )
    //recordemos que readFile es una función asíncrona
    fs.readFile( "hola.txt", "utf8", function( err, contenido ) {
      //Si no hemos podido leer el fichero correctamente...
      if( err ) {
        //dentro de rechazar ponemos lo que queremos lanzar cuando la promesa no termina de la forma deseada, esto lo podemos coger con un catch
        rechazar( "error de lectura, fichero: " + nombre )
      }
      //dentro de resolver ponemos lo que queremos lanzar cuando la promesa termina de la forma deseada, esto lo podemos coger con un then
      resolver(contenido)
    })
  })
  //importante, al final de la función devolvemos la promesa
  return prom
}

//llamamos a la función leeFichero2
//la variable p recoge la promesa
var p=leerFichero2()

//con el then le pasamos un callback y cuando la promesa termine de forma correcta
//se ejecutará el callback con lo que hemos puesto en la promesa dentro de resolver
p.then(function(leido){
  console.log(leido)	
})

//si le pongo que me imprima la promesa por pantalla me sale “Promise{ <pending> }” que es el estado de la promesa en este mismo momento.
//incluso si os fijáis este console.log salen antes que el anterior porque el anterior está esperando a que la promesa se resuelva satisfactoriamente (aún no ha terminado).
console.log(p)