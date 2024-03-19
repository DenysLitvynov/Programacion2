//
// Archivo: Pregunta2.js
// Descripción: Diseñar e implementar una función fallasEnCategoria() que reciba un 
// array y devuelva otro con los datos de las fallas de una determinada categoria
// Fecha: 18/03/2024
// Nombre: Denys Litvynov
//

//--------------------------------------------
// nombreFicheroTexto: Texto -> leerJSONComoObjeto() -> objetoRes: JSON{falla:T ciutat:T categoria:T}
//--------------------------------------------
function leerJSONComoObjeto(nombreFicheroTexto,callback){
    var fs = require("fs");
    fs.readFile(nombreFicheroTexto, "utf8", function(err,contenido){
        if(err){
            callback(null, err)
        }
        else{
            callback(JSON.parse(contenido),null);
        }
    })
}// ()

//--------------------------------------------
//--------------------------------------------

//--------------------------------------------
// categoriaIn: Texto, arrayFallas: Lista<JSON{nombre: T, ciutat: T, categoria: T}> 
//                      -> fallasEnCategoria() -> 
// arrayFallasEnCategoria: Lista<JSON{nombre: T, ciutat: T, categoria: T}> 
//--------------------------------------------
function fallasEnCategoria(arrayFallas, categoriaIn){
    let arrayFallasEnCategoria = arrayFallas.filter(function(elem){
        if(elem.categoria === categoriaIn){
            return true;
        }
        return false;
    })
    return arrayFallasEnCategoria;
}

// Prueba automática para la función 
function probarFallasEnCategoria(){
    leerJSONComoObjeto("falles.json", function(objetoInJSON, err){
        if(err){
            console.log("Ha habido un error" + err);
        }
        else{
            //console.log(objetoInJSON)
            const arrayRes = fallasEnCategoria(objetoInJSON, "segunda");
            console.log(arrayRes);
            const arrayPrueba = [{ falla: "Consertori", ciudad: "Gandia", categoria: "segunda" }];
            if(arrayRes[0].falla != arrayPrueba[0].falla){
                console.log("Esta mal")
            }
            if(arrayRes[0].ciudad != arrayPrueba[0].ciudad){
                console.log("Esta mal")
            }
            if(arrayRes[0].categoria != arrayPrueba[0].categoria){
                console.log("Esta mal")
            }
        }
    })
}

//--------------------------------------------
// main()
//--------------------------------------------

probarFallasEnCategoria();

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------