//
// Archivo: horario.js
// Descripción: Diseña e implementa una función que reciba un objeto como el del ejercicio anterior y un nombre
// de asignatura, y devuelva una lista con los dias y las horas en las que se imparte dicha asignatura.
// Fecha: 21/04/2024
// Nombre: Denys Litvynov
//

//--------------------------------------------
// nombreFichero: Texto -> leerFichero() -> contenidoFichero: JSON{[]}
//--------------------------------------------
function leerFichero(nombreFichero, callback){
    var fs = require("fs");
    fs.readFile(nombreFichero, "utf8", function(err, contenido){
        if(err){
            callback(null, err)
        } else {
            callback(JSON.parse(contenido), null)
        }
    })
}// ()

//--------------------------------------------
//--------------------------------------------

//--------------------------------------------
// horario: JSON{[asignatura: texto, horaDeInicio: texto]}, asignatura: texto
//                  -> obtenerHorarioAsignatura() -> 
// horarioAsignatura: JSON{[dia: texto, hora: texto]}
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
function probarObtenerHorarioAsignatura(){
    leerFichero("horario.json", function(ObjetoInJSON, err){
        if(err){
            console.log("error")
        } else {
            let resultado = obtenerHorarioAsignatura(ObjetoInJSON, "física");
            console.log(resultado);
        }
    })
}

//--------------------------------------------
// main()
//--------------------------------------------

probarObtenerHorarioAsignatura();

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------