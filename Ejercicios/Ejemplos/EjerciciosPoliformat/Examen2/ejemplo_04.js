//Forma correcta de leer un fichero y sacarlo por pantalla
//mediante el uso correcto de una promesa y de una función asíncrona

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

//creamos una función asíncrona para utilizar la promesa, para ello utilizamos la palabra async delante de la función
async function main(){
  //llamamos a la función leeFichero2 pero antes le ponemos un await para que se espere a que esta termine
  var texto = await leerFichero2()
  //como nos hemos esperado ahora lo que contiene la variable texto es correcto y se mostrará en el console.log 
  console.log(texto)
}

//llamamos a la función asíncrona que hemos creado para que se ejecute el programa
main()