//
// Archivo: ejercicio.js
// Descripción: Segundo parcial curso 2023 - 2024
// Fecha: 02/05/2024
// Nombre: Denys Litvynov
//

// Se tiene un fichero JOSN con la siguiente información: 
// --- "recorrido.json"
// Se pretende averiguar las velocidades parciales (en cada tramo - de un punto al siguiente), 
// del recorrido. Los puntos en el fichero puede que no estén ordenados por tiemp. Para ello:

//--------------------------------------------
// Diseña e impelementa una función que lea el fichero en un objeto y se use de esta forma:
// var recorrido = await leer_recorrido("recorrido.json")
//
// nombreFichero: Texto -> leer_recorrido() -> puntosConTiempo: [{punto:{x: Z, y: Z}, t: N}]
//--------------------------------------------
function leer_recorrido(nombreFichero){
    var fs = require("fs");
    return new Promise(function(resolve, reject){
        fs.readFile(nombreFichero, "utf8", function(err, contenido){
            if(err){
                reject("Hubo un error" + err);
            } else {
                try {
                    const recorrido = JSON.parse(contenido);
                    resolve(recorrido);
                } catch (error) {
                    reject("Error al parsear el contenido JSON: " + error);
                }
            }
        })
    })
}//()

//--------------------------------------------
//--------------------------------------------

//--------------------------------------------
// Diseña e implementa (usando reduce()) una función siguiente_a() que devuelva, 
// a partir de un array de puntos con tiempo (como en el fichero), el punto siguiente
// a un tiempo de referencia tmin dado. Ejemplo: Si tmin = 1008 entonces {punto:{x: 5.0, y:3.0}, t: 1010}
//
// puntosConTiempo: [{punto:{x: Z, y: Z}, t: N}], tiempo: N 
// -> siguiente_a() -> puntoSiguiente: {punto:{x: Z, y: Z}, t: N}
//--------------------------------------------
function siguiente_a(puntosConTiempo, tiempo){
    let puntoSiguiente = puntosConTiempo.reduce(function(acum, elem){
        if(elem.t > tiempo && elem.t < acum.t){
            acum.punto = elem.punto;
            acum.t = elem.t;
        }
        return acum;
    },{punto:{x:0, y:0}, t: Infinity});
    return puntoSiguiente;
}//()

//--------------------------------------------
//--------------------------------------------

//--------------------------------------------
// Diseña e implementa una función ordenar_por_tiempo() que ordene un array 
// de objetos punto + tiempo según el campo t de menor a mayor. 
//
// puntosConTiempo: [{punto:{x: Z, y: Z}, t: N}] -> ordenar_por_tiempo() ->
// -> puntosConTiempoOrdenados: [{punto:{x: Z, y: Z}, t: N}]
//--------------------------------------------
function ordenar_por_tiempo(puntosConTiempo){
    // solución con reduce
    let referencia = 0;
    let puntosConTiempoOrdenados = puntosConTiempo.reduce(function(acum){
        let siguiente = siguiente_a(puntosConTiempo, referencia);
        referencia = siguiente.t;
        acum.push(siguiente);
        return acum;
    },[])
    return puntosConTiempoOrdenados;

    // posible solución con map
    /*
    let referencia = 0;
    let puntosConTiempoOrdenados = puntosConTiempo.map(function(){
        let siguiente = siguiente_a(puntosConTiempo, referencia);
        referencia = siguiente.t;
        return siguiente;
    });
    return puntosConTiempoOrdenados;
    */
}//()

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
// Diseña e implementa (usando reduce()) una función velocidades_parciales() 
// que calcule las velocidades en cada tramo de un recorrido. para realizar este
// cálculo , los puntos deben estar ordenados temporalmente. Puedes suponer que 
// existe una función distancia() que devuelve la distancia entre dos puntos. 
//
// puntosConTiempo: [{punto:{x: Z, y: Z}, t: N}] -> velocidades_parciales() -> velocidades: [R]
//--------------------------------------------
function velocidades_parciales(puntosConTiempo){
    let puntosOrdenados = ordenar_por_tiempo(puntosConTiempo);
    let velocidades = puntosOrdenados.reduce(function(acum,elem,index){
        if(index !== puntosOrdenados.length - 1){
            let puntoActual = elem.punto;
            let puntoSiguiente = puntosOrdenados[index + 1].punto;
            let distancia = calcularDistancia(puntoActual,puntoSiguiente);
            let tiempo = puntosOrdenados[index + 1].t - elem.t;
            let velocidad = distancia / tiempo; // Calculamos la velocidad en metros por segundo
            acum.push(velocidad.toFixed(2)); // Redondeamos a dos decimales
        }
        return acum;
    },[])
    return velocidades;
}//()

//--------------------------------------------
// Suponiendo que hay un fichero llamado recorrido.json con la información 
// descrita al principio, escribe una prueba automática sencilla que compruebe
// que la funciín velocidades_parciales() es correcta. 
//--------------------------------------------
function probar_velocidades_parciales(puntosConTiempo, esperadas){
    let resultado = velocidades_parciales(puntosConTiempo);
    for(let i = 0; i<resultado.length; i++){
        if(resultado[i] !== esperadas[i]){
            console.log("velocidades_parciales() esta mal")
            break;
        }
    }//for
}//()

//--------------------------------------------
// main()
//--------------------------------------------

async function main(){
    let esperadas = [ '2.24', '1.77', '1.00', '1.20', '0.18' ];
    try{
        let recorrido = await leer_recorrido("recorrido.json");
        let puntoSiguiente = siguiente_a(recorrido, 1008);
        console.log(puntoSiguiente);
        let puntosConTiempoOrdenados = ordenar_por_tiempo(recorrido);
        console.log(puntosConTiempoOrdenados);
        let velocidades = velocidades_parciales(recorrido);
        console.log(velocidades);
        probar_velocidades_parciales(recorrido, esperadas);
    } catch(error) {    
        console.log(error);
    }
}//()
main();

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------