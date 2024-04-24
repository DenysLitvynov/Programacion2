//
// Archivo: horarioConPromise.js
// Descripción: -----
// Fecha: 24/04/2024 
// Nombre: Denys Litvynov
//

//--------------------------------------------
// nombreFichero: Texto -> leerFichero() -> horario:{dia:[{asignatura: texto, horaDeInicio: texto}]}
//--------------------------------------------
function leerFichero(nombreFichero){
    var fs = require("fs");
    return new Promise(function(resolve, reject){
        fs.readFile(nombreFichero, "utf8", function(err, contenido){
            if(err){
                reject("Hubo un error" + err)
            } else {
                resolve(JSON.parse(contenido));
            }
        })
    })
}// ()

//--------------------------------------------
//--------------------------------------------

//--------------------------------------------
// nombreFichero: Texto, contenido: Texto -> escribirTexto() -> 0 | Error
//--------------------------------------------
function escribirFichero(nombreFichero, contenido){
    var fs = require("fs")
    return new Promise(function (resolve, reject){
        fs.writeFile(nombreFichero, contenido, function(err){
            if(err){
                reject("Hubo un error" + err)
            } else {
                resolve("Archivo guardado exitosamente: " + nombreFichero)
            }
        })
    })
}

//--------------------------------------------
//--------------------------------------------

//--------------------------------------------
// horario:{dia:[{asignatura: texto, horaDeInicio: texto}]}, asignatura: texto 
// -> obtenerHorarioAsignatura() -> horarioAsignatura: {[dia: texto, hora: texto]}
//--------------------------------------------
function obtenerHorarioAsignatura(horario, asignatura){
    let horarioAsignatura = [];
    for(let dia in horario){
        let asignaturasDia = horario[dia];
        let asignaturasValidas = asignaturasDia.filter(function(elem){
            if(elem.asignatura === asignatura){
                return true;
            }
            return false;
        });
        for(let horas of asignaturasValidas){
            horarioAsignatura.push({dia: dia, horaDeInicio: horas.horaDeInicio})
        }// for of
    }// for in
    return horarioAsignatura;
}// ()

// Prueba automática para la función 
function probarObtenerHorarioAsignatura(horario, asignatura, esperado){
    let resultado = obtenerHorarioAsignatura(horario,asignatura);
    for(let i = 0; i<resultado.length; i++){
        if(resultado[i].dia !== esperado[i].dia){
            console.log("Esta mal")
        }
        if(resultado[i].horaDeInicio !== esperado[i].horaDeInicio){
            console.log("Esta mal 2")
        }
    }
    return JSON.stringify(resultado)
}

//--------------------------------------------
// main()
//--------------------------------------------

async function main(){
    var esperado = [{"dia":"martes","horaDeInicio":"8:30"},{"dia":"viernes","horaDeInicio":"8:30"}]
    try {
        var horario = await leerFichero("horario.json");
        var res = probarObtenerHorarioAsignatura(horario, "programación", esperado);
        await escribirFichero("horarioProg.json", res);
    }
    catch (err) {
        console.log(err + " sa liat prim ")
    }
}   
main();

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------