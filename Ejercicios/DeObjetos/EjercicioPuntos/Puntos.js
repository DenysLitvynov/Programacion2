//
// Archivo: 
// Descripción: 
// Fecha: 
// Nombre: 
//

//--------------------------------------------
// nombreFicheroTexto: Texto -> leerFicheroDeTexto() -> objeto: JSON[{}]
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
// Punto1:{x: R , y: R} Punto2:{x: R , y: R}
// -> calcularDistancia() -> distancia: R
//--------------------------------------------
function calcularDistancia(punto1, punto2){
    const deltaX = punto2.x - punto1.x;
    const deltaY = punto2.y - punto1.y;
    const distancia = Math.sqrt(deltaX ** 2 + deltaY ** 2);
    return distancia;
}

//--------------------------------------------
//--------------------------------------------

//--------------------------------------------
// Lista<JSON{x: R , y: R}, punto{x: R, y: R} 
//        -> encontrarLosKVecinos() ->
// ListaMasCercanos<JSON{Punto:{x: R, y: R}, Distancia: R}
//--------------------------------------------


// Prueba automática para la función 


//--------------------------------------------
// main()
//--------------------------------------------



//--------------------------------------------
//--------------------------------------------
//--------------------------------------------