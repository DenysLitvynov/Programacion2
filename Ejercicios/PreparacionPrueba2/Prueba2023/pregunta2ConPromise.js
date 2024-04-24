//
// Archivo: pregunta2.js
// Descripción: ----
// Fecha: 21/04/2024
// Nombre: Denys Litvynov
//

//--------------------------------------------
// nombreFichero: Texto -> leerFichero() -> contenidoFichero: JSON{[]}
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
    console.log(fallasCorresp);
    return fallasCorresp;
}// ()

// Prueba automática para la función 
function probarFallasEnCategoria(fallas,categoria){
    const resultado = fallasEnCategoria(fallas,categoria);
    for(let falles of resultado){
        console.log(falles);
        if(falles.categoria !== categoria){
            console.log("Esta mal")
        }
    }
}//()

//--------------------------------------------
// main()
//--------------------------------------------

async function main(){
    let fallas = await leerFichero("falles.json");
    probarFallasEnCategoria(fallas, "primera");
}

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------