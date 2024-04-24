//
// Archivo: puntos.js
// Descripción: ----
// Fecha: 24/04/2024
// Nombre: Denys Litvynov
//

//--------------------------------------------
// nombreFichero: Texto -> leerFichero() -> puntos:[{x: Z, y: Z}]
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
// Punto1:{x: R, y: R}, Punto2:{x: R, y: R}
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
// puntos:[{x: Z, y: Z}], punto:{x: Z, y: Z}
//      -> encontrarLosKVecinos() -> 
// masCercanos[punto:{x: Z, y: Z}, distancia: R]
//--------------------------------------------
function encontrarLosKVecinos(puntos, puntoSuelto, k){
    let distanciasPuntos = puntos.reduce(function(acum,elem){
        let distancia = calcularDistancia(elem, puntoSuelto);
        acum.push({distancia: distancia, punto: elem});
        return acum;
    }, []);
    // ordenamos todos los puntos en el array segun su distancia hasta el punto suelto, de menor a mayor
    distanciasPuntos.sort((a, b) => a.distancia - b.distancia);
    // devolvemos los k puntos con menor distancia hacia el punto suelto, es decir, los más cercanos 
    let kVecinos = distanciasPuntos.slice(0, k);

    console.log(kVecinos);
    return kVecinos;
}//()

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

async function main(){
    const puntoSuelto = {x: 4, y: 4};
    const puntosEsperados = [
        {x: 3, y:3},
        {x: 2, y:4},
        {x: 2, y:5},
        {x: 6, y:5}
    ];  

    try {
        let puntos = await leerFichero("puntos.json");
        const kVecinos = encontrarLosKVecinos(puntos,puntoSuelto,4);
        probarEncontrarLosKVecinos(kVecinos,puntosEsperados);
    } catch(error) {
        console.log("Hubo un error" + err);
    }
}//()
main();

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------