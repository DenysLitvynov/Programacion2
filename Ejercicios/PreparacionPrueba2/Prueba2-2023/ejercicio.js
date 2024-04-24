//
// Archivo: ejercicio.js
// Descripción: ----
// Fecha: 23/04/2024
// Nombre: Denys Litvynov
//

//--------------------------------------------
// nombreFichero: Texto -> leerMediciones() -> 
// mediciones: {["id_sensor": texto, "medida": R, "cuando": N]}
//--------------------------------------------
function leerMediciones(nombreFichero, callback){
    var fs = require("fs");
    fs.readFile(nombreFichero, "utf8", function(err, contenido){
        if(err){
            callback(null, err);
        } else {
            callback(JSON.parse(contenido), null);
        }
    })
}// ()

//--------------------------------------------
//--------------------------------------------

//--------------------------------------------
// mediciones: {["id_sensor": texto, "medida": R, "cuando": N]} -> 
// listaSensores() -> sensores:[texto]
//--------------------------------------------
function listaSensores(mediciones){
    let nombres = mediciones.reduce(function(acum,elem){
        if(!acum.includes(elem.id_sensor)){
            acum.push(elem.id_sensor)
        }
        return acum;
    },[])
    return nombres;
}//()

// Prueba automática para la función 
function probarListaSensores(mediciones, esperada){
    const resultado = listaSensores(mediciones);
    for(let i = 0; i < resultado.length; i++){
        //console.log(resultado[i], " " , esperada[i])
        if(resultado[i] !== esperada[i]){
            console.log("listaSensores() esta mal")
            break;
        }
    }//for
}//()

//--------------------------------------------
//--------------------------------------------

//--------------------------------------------
// mediciones: {["id_sensor": texto, "medida": R, "cuando": N]}, id_sensor: texto ->
// ultimaMedidaSensor() -> ultimaMedida: N
//--------------------------------------------
function ultimaMedidaSensor(mediciones, id_sensor){
    let ultimaMedida = mediciones.reduce(function(acum,elem){
        if(elem.id_sensor === id_sensor && acum < elem.cuando){
            acum = elem.cuando;
        }
        return acum;
    }, 0)
    return ultimaMedida;
}// ()

// Prueba automática para la función 
function probarUltimaMedidaSensor(mediciones, id_sensor, esperado){
    const resultado = ultimaMedidaSensor(mediciones, id_sensor);
    if(resultado !== esperado){
        console.log("ultimaMedidaSensor() esta mal")
    }
}// ()

//--------------------------------------------
//--------------------------------------------

//--------------------------------------------
// sensores:[texto] -> ultimaMedidaCadaSensor() -> ultimaDeCada:[{id_sensor: texto, cuando: N}]
//--------------------------------------------
function ultimaMedidaCadaSensor(sensores){
    let ultimaDeCada = sensores.map(function(elem){
        elem = {id_sensor: elem.id_sensor, cuando: ultimaMedidaSensor(elem)}
        return elem;
    })
    return ultimaDeCada;
}// ()

// Prueba automática para la función 
function probarUltimaMedidaCadaSensor(sensores, esperadas){
    const resultado = ultimaMedidaCadaSensor(sensores);
    console.log(resultado);
    for(let i = 0; i<resultado.length; i++){
        if(resultado[i].id_sensor !== esperadas[i].id_sensor || resultado[i].medida !== esperadas[i].medida){
            console.log("ultimaMedidaCadaSensor() esta mal");
            break;
        }
    }
}

//--------------------------------------------
//--------------------------------------------

//--------------------------------------------
// main()
//--------------------------------------------

function main(){
    let esperada = [ 'sens1', 'sens2', 'sens3', 'sens4', 'sens5' ];
    let esperadas = 
    [
        {id_sensor: sens1, medida: 2.4},
        {id_sensor: sens2, medida: 2.7},
        {id_sensor: sens3, medida: 2.5},
        {id_sensor: sens4, medida: 2.2},
        {id_sensor: sens5, medida: -2.9}
    ]
    leerMediciones("mediciones.json", function(mediciones,err){
        if(err){
            console.log("Hubo un error")
        } else {
            probarListaSensores(mediciones, esperada);
            probarUltimaMedidaSensor(mediciones, "sens1", 2000);
            let sensores = listaSensores(mediciones);
            probarUltimaMedidaCadaSensor(sensores, esperadas);
        }
    })
}
main();

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------