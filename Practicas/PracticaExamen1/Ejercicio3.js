//
// Archivo: Ejercicio3.js
// Descripción: Teniendo el fichero Articulos.json: diseña una función para leer el fichero y devolver su contenido como un array 
// de objetos de JavaScript. Implementa la función anterior. Diseña una función totalCategoria() que reciba un array como el 
// anterior y devuelva el subtotal(la suma de precios) para los productos de una misma categoria. Implementa utilizando filtrar y reducir. 
// Escribe una prueba automática para la función
// Fecha: 26/03/2024
// Nombre: Denys Litvynov
//

//--------------------------------------------
// nombreFihceroTexto: Texto -> leerFicheroDeTexto() -> objeto: JSON[{}]
//--------------------------------------------
function leerFicheroDeTexto(nombreFicheroTexto,callback){
    var fs = require("fs");
    fs.readFile(nombreFicheroTexto, "utf8", function(err,contenido){
        if(err){
            callback(null,err);
        } else {
            callback(JSON.parse(contenido),null);
        }
    });
}// ()

//--------------------------------------------
//--------------------------------------------

//--------------------------------------------
// articulos: JSON[{codigo: Texto,categoria: Texto, precio: Texto}], categoria: Texto -> totalCategoria() -> subtotal: R
//--------------------------------------------
function totalCategoria(articulos, categoria){
    let articulosDeCategoria = articulos.filter(function(elem){
        if(elem.categoria === categoria){
            return true;
        }
        return false;
    })
    let subtotal = articulosDeCategoria.reduce(function(acum,elem){
        return acum + parseFloat(elem.precio);
    }, 0);
    return subtotal;
}// ()

// Prueba automática para la función 
function probarTotalCategoria(){
    leerFicheroDeTexto("Articulos.json", function(articulos, err){
        if(err){
            console.log("ha habido un error" + err);
        }
        else {
            const subtotal = totalCategoria(articulos, "lápiz");
            if(subtotal !== 3.25){
                console.log("totalCategoria() esta mal")
            }
        }
    })
}//()

//--------------------------------------------
// main()
//--------------------------------------------

probarTotalCategoria();

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------