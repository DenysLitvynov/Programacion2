//
// Archivo: pregunta3ConPromise.js
// Descripción: -------
// Fecha: 24/04/2024
// Nombre: Denys Litvynov
//

//--------------------------------------------
// nombreFichero: Texto -> leerFichero() -> articulos: {[codigo: N, categoria: texto, precio: R]}
//--------------------------------------------
function leerFichero(nombreFichero){
    var fs = require("fs")
    return new Promise(function(resolve, reject){
        fs.readFile(nombreFichero, "utf8", function(err, contenido){
            if(err){
                reject("hubo un error" + err)
            } else {
                resolve(JSON.parse(contenido))
            }
        })
    })
}//()

//--------------------------------------------
//--------------------------------------------

//--------------------------------------------
// nombreFichero: Texto, contenido:  articulos: {[codigo: N, categoria: texto, precio: R]}
//  -> escribirTexto() -> 0|Error
//--------------------------------------------
function escribirFichero(nombreFichero, contenido){
    var fs = require("fs")
    return new Promise(function (resolve, reject){
        fs.writeFile(nombreFichero, JSON.stringify(contenido), function(err){
            if(err){
                reject("Hubo un error" + err)
            } else {
                resolve("Archivo guardado exitosamente" + nombreFichero)
            }
        })
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

async function main(){
    try{
        let articulos = await leerFichero("articulos.json");
        probarTotalCategoria(articulos, "lápiz", 3.25);
        let resultado = totalCategoria(articulos);
        await escribirFichero("resultado.json", resultado);
    } catch(error) {
        console.log("hubo un error" + error)
    }
}
main();

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------



//--------------------------------------------
//--------------------------------------------
//--------------------------------------------