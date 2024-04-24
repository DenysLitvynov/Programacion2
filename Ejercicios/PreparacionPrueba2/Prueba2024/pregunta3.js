//
// Archivo: pregunta3.js
// Descripción: -------
// Fecha: 23/04/2024
// Nombre: Denys Litvynov
//

//--------------------------------------------
// nombreFichero: Texto -> leerFichero() -> articulos: {[codigo: N, categoria: texto, precio: R]}
//--------------------------------------------
function leerFichero(nombreFichero, callback){
    var fs = require("fs");
    fs.readFile(nombreFichero, "utf8", function(err, contenido){
        if(err){
            callback(null,err)
        } else {
            callback(JSON.parse(contenido), null)
        }
    })
}//()

//--------------------------------------------
//--------------------------------------------

//--------------------------------------------
// articulos:{[codigo: N, categoria: texto, precio: R]}, categoria: texto -> 
//      totalCategoria() -> subtotal: R 
//--------------------------------------------
function totalCategoria(articulos, categoria){
    let deCategoria = articulos.filter(function(elem){
        if(elem.categoria === categoria){
            return true;
        }
        return false;
    })
    let subtotal = deCategoria.reduce(function(acum, elem){
        acum += elem.precio;
        return acum;
    }, 0)
    return subtotal;
}//()

// Prueba automática para la función 
function probarTotalCategoria(articulos, categoria, esperado){
    const resultado = totalCategoria(articulos, categoria);
    console.log(resultado);
    if(resultado !== esperado){
        console.log("totalCategoria() esta mal")
    }
}// ()

//--------------------------------------------
// main()
//--------------------------------------------

leerFichero("articulos.json", function(articulos, err){
    if(err){
        console.log("Ha surgido un error")
    } else {
        probarTotalCategoria(articulos, "lápiz", 3.25);
    }
})

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------