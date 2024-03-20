//
// Archivo: Horario.js
// Descripción: Diseña e implementa una función que reciba un objeto como el del anterior ejercicio, y un nombre
// de asignatura; y devuelva una lista con los días y las horas en que se imparte dicha asignatura
// Fecha: 20/03/2024
// Nombre: Denys Litvynov
//

//--------------------------------------------
// nombreFicheroTexto: Texto -> leerJSONComoObjeto() -> objetoRes: JSON{dia: Texto, hora: Texto}
//--------------------------------------------
function leerJSONComoObjeto(nombreFicheroTexto, callback){
    var fs = require("fs");
    fs.readFile(nombreFicheroTexto, "utf8", function(err,contenido){
        if(err){
            callback(null, err)
        }else{
            callback(JSON.parse(contenido),null);
        }
    })
}// ()

//--------------------------------------------
// Horario: JSON{[asignatura: Texto, hora: Texto]} , asignatura: Texto 
// -> obtenerHorarioAsignatura() -> horarioAsignatura: JSON{dia: Texto, hora: Texto}
//--------------------------------------------
function obtenerHorarioAsignatura(horario, asignatura){
    let horarioAsignatura = [];
    for(let dia in horario){
        let asignaturasDia = horario[dia];
        let asignaturas = asignaturasDia.filter(function(elem){
            if(elem.asignatura === asignatura){
                return true;
            }
            return false;
        });
        if(asignaturas.length>0){
            asignaturas.forEach(function(elem){
                horarioAsignatura.push({dia: dia, horaDeInicio: elem.horaDeInicio})
            });
        }
    }// for
    return horarioAsignatura;
}// ()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función
function probarObtenerHorarioAsignatura(){
    leerJSONComoObjeto("Horario.json", function(objetoInJSON,err){
        if(err){
            console.log("Ha habido un error" + err);
        }else{
            const resultado = obtenerHorarioAsignatura(objetoInJSON, "programación");
            console.log(resultado)
        }
    })
}// ()

//--------------------------------------------
// main()
//--------------------------------------------

probarObtenerHorarioAsignatura();

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------