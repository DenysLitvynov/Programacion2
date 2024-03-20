//
// Archivo: Pregunta2.js
// Descripción: Diseña e implementa (usando filter) una función "fallasEnCategoria()" que reciba un array 
// de objetos como el anterior y devuelva otro con los datos de las fallas de una determinada categoria.
// Fecha: 20/03/2024
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
// fallas:JSON[{falla: Texto,ciudad: Texto,categoria: Texto}], categoria: Texto->
// fallasEnCategoria() -> fallasCorrespondientes: JSON[{falla: Texto,ciudad: Texto,categoria: Texto}]
//--------------------------------------------
function fallasEnCategoria(fallas,categoria){
    let fallasCorrespondientes = fallas.filter(function(elem){
        if(elem.categoria === categoria){
            return true;
        }   
        return false;
    });
    return fallasCorrespondientes;
}// ()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarFallasEnCategoria(){
    leerFicheroDeTexto("falles.json", function(fallas,err){
        if(err){
            console.log("ostie prim , se mos a liat la coso" + err);
        } else {
            const resultado = fallasEnCategoria(fallas, "segunda");
            if(resultado.falla !== "Consertori"){
                console.log("Esta mal 1");
            } 
            if(resultado.ciudad !== "Gandia"){
                console.log("Esta mal 2");
            }
            if(resultado.categoria !== "segunda"){
                console.log("Esta mal 3");
            }
        }
    })
}// ()

//--------------------------------------------
// main()
//--------------------------------------------

probarFallasEnCategoria();

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------