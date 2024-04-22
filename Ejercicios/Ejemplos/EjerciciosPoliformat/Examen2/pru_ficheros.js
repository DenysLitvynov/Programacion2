//Para ejecutar esto preparar un fichero antes llamado hola.txt que tenga algo escrito dentro

function leefichero(){
var fs = require( "fs" )
fs.readFile( "hola.txt", "utf8", function( err, contenido ) {
if( err ) {
console.log( "hubo un problema al leer de hola.txt" )
return
}
return contenido
})
}

function main1(){
console.log(leefichero())
}


function leerFichero2(){
  var prom=new Promise(function(resolver,rechazar){
    var fs = require( "fs" )
    fs.readFile( "hola.txt", "utf8", function( err, contenido ) {
      if( err ) {
        rechazar( "error de lectura, fichero: " + nombre )
      }
 
      resolver(contenido)
    })
  })
  return prom
}

async function main2(){
var texto = await leerFichero2()
console.log(texto)
}

console.log("llamo directamente a leerfichero sin promesa\n")
var mal=leefichero()
console.log(mal)

console.log("llamo directamente a leerfichero con promesa pero sin then ni await\n")
var mal2= leerFichero2()
console.log(mal2)

console.log("llamo directamente a leerfichero con promesa utilizando un then\n")
var p=leerFichero2()
p.then(function(leido){
console.log(leido)	
})

console.log("llamo a la funcion que lee el fichero sin promesa\n")
main1()

console.log("llamo a la funcion que lee el fichero con promesa y utiliza un wait\n")
main2()

