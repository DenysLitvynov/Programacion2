//
// Archivo: horario.js
// Descripción: Diseña e implementa una función que reciba un objeto como el del anterior ejercicio, y un nombre
// de asignatura; y devuelva una lista con los días y las horas en que se imparte dicha asignatura
// Fecha: 20/04/2024
// Nombre: Denys Litvynov
//

//--------------------------------------------
// nombreFicheroTexto: Texto -> leerFciheroDeTexto() -> objeto: JSON{[{}]}
//--------------------------------------------
function leerFicheroDeTexto(nombreFicheroTexto, callback){
    var fs = require("fs");
    fs.readFile(nombreFicheroTexto, "utf8", function(err, contenido){
        if(err){
            callback(null, err);
        } else {
            callback(JSON.parse(contenido), null);
        }
    })
}// ()

//--------------------------------------------
// Horario: JSON{[asignatura: texto , horaDeIncio: texto]}, asignatura: texto -> 
// obtenerHorarioAsignatura() -> HorarioAsignatura: JSON{[dia: texto, hora: texto]}
//--------------------------------------------


//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función


//--------------------------------------------
// nem a asciurer el resultat en un archiu avorer si va 
//--------------------------------------------


//--------------------------------------------
// main()
//--------------------------------------------



//--------------------------------------------
//--------------------------------------------
//--------------------------------------------