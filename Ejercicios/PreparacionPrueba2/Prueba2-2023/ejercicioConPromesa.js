//
// Archivo: ejercicioConPromesa.js
// Descripción: ----
// Fecha: 24/04/2024
// Nombre: Denys Litvynov
//

//--------------------------------------------
// nombreFichero: Texto -> leerMediciones() -> 
// mediciones: {["id_sensor": texto, "medida": R, "cuando": N]}
//--------------------------------------------
function leerMediciones(nombreFichero){
    var fs = require("fs");
    return new Promise(function(resolve, reject){
        fs.readFile(nombreFichero, "utf8", function(err, contenido){
            if(err){
                reject("Hubo un error" + err);
            } else {
                resolve(contenido);
            }
        })
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
function ultimaMedidaCadaSensor(mediciones){
    let sensores = listaSensores(mediciones);
    let ultimaDeCada = sensores.map(function(elem){
        return {
            "id_sensor": elem,
            "cuando": ultimaMedidaSensor(mediciones, elem)
        }
    })
    return ultimaDeCada;
}// ()

// Prueba automática para la función 
function probarUltimaMedidaCadaSensor(mediciones, esperadas){
    const resultado = ultimaMedidaCadaSensor(mediciones);
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
    let esperadas = [
        {id_sensor: "sens1", cuando: 2000},
        {id_sensor: "sens2", cuando: 4000},
        {id_sensor: "sens3", cuando: 5000},
        {id_sensor: "sens4", cuando: 7000},
        {id_sensor: "sens5", cuando: 8000}
    ]
    try{
        let mediciones = leerMediciones("mediciones.json");
        probarListaSensores(mediciones, esperada);
        probarUltimaMedidaSensor(mediciones, "sens1", 2000);
        probarUltimaMedidaCadaSensor(mediciones, esperadas);
    } catch (error) {
        console.log(error)
        return error
    }
}
main();

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------