//
// Archivo: Horario.js
// Descripción: Diseña e implementa una función que reciba un objeto como el del anterior ejercicio, y un nombre
// de asignatura; y devuelva una lista con los días y las horas en que se imparte dicha asignatura
// Fecha: 20/03/2024
// Nombre: Denys Litvynov
//

//--------------------------------------------
// nombreFicheroTexto: Texto -> leerFciheroDeTexto() -> objeto: JSON{[{}]}
//--------------------------------------------
function leerFicheroDeTexto(nombreFicheroTexto, callback){
    var fs = require("fs");
    fs.readFile(nombreFicheroTexto, "utf8", function(err,contenido){
        if(err){
            callback(null, err);
        } 
        else {
            callback(JSON.parse(contenido), null);
        }
    });
}// ()

//--------------------------------------------
// Horario: JSON{[asignatura: texto , horaDeIncio: texto]}, asignatura: texto -> 
// obtenerHorarioAsignatura() -> HorarioAsignatura: JSON{[dia: texto, hora: texto]}
//--------------------------------------------
function obtenerHorarioAsignatura(horario, asignatura){
    let horarioAsignatura = [];
    for(let dia in horario){
        let asignaturasDia = horario[dia];
        let validas = asignaturasDia.filter(function(elem){
            if(elem.asignatura === asignatura){
                return true;
            }
            return false;
        });
        for(let horas of validas){
            horarioAsignatura.push({dia: dia, horaDeInicio: horas.horaDeInicio})
        }// for of
    }// for in
    return horarioAsignatura;
}// ()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función
function probarObtenerHorarioAsignatura(callback){
    leerFicheroDeTexto("Horario.json", function(ObjetoInJSON, err){
        if(err){
            console.log("Ha habut un problema al llegir larchiu" + err);
        } else {
            let resultado = obtenerHorarioAsignatura(ObjetoInJSON,"programación");
            console.log(resultado);
            callback(resultado);
        }
    })
}// ()

//--------------------------------------------
// nem a asciurer el resultat en un archiu avorer si va 
//--------------------------------------------
function escribirObjetoComoJSONenArchivo(nombreFicheroTexto, objeto, callback){
    const objetoJSON = JSON.stringify(objeto);
    var fs = require("fs");
    fs.writeFile(nombreFicheroTexto, objetoJSON, function(err){
        if(err){
            callback(err);
        } else {
            callback(null);
        }
    })
}// ()

//--------------------------------------------
// main()
//--------------------------------------------

probarObtenerHorarioAsignatura(function(resultado){
    escribirObjetoComoJSONenArchivo("horarioAsignatura.json", resultado, function(err){
        if(err){
            console.log("a sorgit un problemeta" + err);
        }else{
            console.log("felicidades tio")
        }
    })
});


//--------------------------------------------
//--------------------------------------------
//--------------------------------------------