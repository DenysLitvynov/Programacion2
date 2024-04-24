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
function probarObtenerHorarioAsignatura(horario, asignatura){
    let resultado = obtenerHorarioAsignatura(horario,asignatura);
    console.log(resultado);
}

//--------------------------------------------
// main()
//--------------------------------------------

async function main(){
    var horario = await leerFichero("horario.json");
    probarObtenerHorarioAsignatura(horario, "programación");
}   
main();

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------