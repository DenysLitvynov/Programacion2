//
// Archivo: Puntos.js
// Descripción: Hacer una función que reciba una lista de puntos y un punto, y devuelva otra lista de los k puntos más cercanos al suelto
// Fecha: 20/03/2024
// Nombre: Denys Litvynov 
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
    return distancia.toFixed(2);
}

//--------------------------------------------
//--------------------------------------------

//--------------------------------------------
// Lista<JSON{x: R , y: R}, punto{x: R, y: R} 
//        -> encontrarLosKVecinos() ->
// ListaMasCercanos<JSON{Punto:{x: R, y: R}, Distancia: R}
//--------------------------------------------
function encontrarLosKVecinos(puntos, puntoSuelto, k){
    let distanciasPuntos = puntos.reduce(function(acum,elem){
        let distancia = calcularDistancia(elem, puntoSuelto);
        acum.push({distancia: distancia, punto: elem});
        return acum;
    },[]);

    // ordenamos todos los puntos en el array segun su distancia hasta el punto suelto, de menor a mayor
    distanciasPuntos.sort((a, b) => a.distancia - b.distancia);
    // devolvemos los k puntos con menor distancia hacia el punto suelto, es decir, los más cercanos 
    let kVecinos = distanciasPuntos.slice(0, k);
    
    console.log(kVecinos);
    return kVecinos;
}

// Prueba automática para la función 
function probarEncontrarLosKVecinos(kVecinos,puntosEsperados){
    if (kVecinos.length !== puntosEsperados.length) {
        console.log("encontrarLosKVecinos() está mal, no coinciden los tamaños");
        return;
    }
    for (let i = 0; i < kVecinos.length; i++) {
        if (kVecinos[i].punto.x !== puntosEsperados[i].x || kVecinos[i].punto.y !== puntosEsperados[i].y) {
            console.log("encontrarLosKVecinos() está mal, no coinciden los puntos");
            return;
        }
    }// for
}// ()

//--------------------------------------------
// main()
//--------------------------------------------

function main(){
    const puntoSuelto = {x: 4, y:4};
    leerFicheroDeTexto("Puntos.json", function(puntos,err){
        if(err){
            console.log("ostie germa se mos a liat" + err);
        } else {
            const kVecinos = encontrarLosKVecinos(puntos,puntoSuelto,4);
            const puntosEsperados = [
                {x: 3, y:3},
                {x: 2, y:4},
                {x: 2, y:5},
                {x: 6, y:5}
            ];  
            probarEncontrarLosKVecinos(kVecinos,puntosEsperados);
        }
    });
}
main();

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------