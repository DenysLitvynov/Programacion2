//
// Archivo: pregunta2.js
// Descripción: ----
// Fecha: 21/04/2024
// Nombre: Denys Litvynov
//

//--------------------------------------------
// nombreFichero: Texto -> leerFichero() -> 
// contenidoFichero: [{falla: texto, ciudad: texto, categoria: texto}]
//--------------------------------------------
function leerFichero(nombreFichero){
    var fs = require("fs");
    return new Promise(function(resolve, reject){
        fs.readFile(nombreFichero, "utf8", function(err, contenido){
            if(err){
                reject("Hubo un error" + err)
            } else {
                resolve(JSON.parse(contenido))
            }
        })
    })
}// ()

//--------------------------------------------
//--------------------------------------------

//--------------------------------------------
// nombreFichero: Texto, contenido:  [{falla: texto, ciudad: texto, categoria: texto}]
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
// fallas:JSON[{falla: texto, ciudad: texto, categoria: texto}], categoria: texto -> 
// fallasEnCategoria() -> fallasCorresp:JSON[{falla: texto, ciudad: texto, categoria: texto}]
//--------------------------------------------
function fallasEnCategoria(fallas, categoria){
    let fallasCorresp = fallas.filter(function(elem){
        if(elem.categoria === categoria){
            return true;
        }
        return false;
    })
    //console.log(fallasCorresp);
    return fallasCorresp;
}// ()

// Prueba automática para la función 
function probarFallasEnCategoria(fallas,categoria){
    const resultado = fallasEnCategoria(fallas,categoria);
    for(let falles of resultado){
        //console.log(falles);
        if(falles.categoria !== categoria){
            console.log("Esta mal")
        }
    }
}//()

//--------------------------------------------
// main()
//--------------------------------------------

async function main(){
    try{
        let fallas = await leerFichero("falles.json");
        probarFallasEnCategoria(fallas, "primera");
        let res = fallasEnCategoria(fallas, "primera");
        await escribirFichero("resultado.json", res)
    } catch(error) {
        console.log(error);
    }
}
main();

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------