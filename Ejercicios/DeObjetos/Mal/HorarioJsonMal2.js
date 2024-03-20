//
// Archivo: HorarioJson.js
// Descripción: Diseña e implementa una función que reciba un objeto como el del anterior ejercicio, 
// y un nombre de asignatura; y devuelva una lista con los días y las horas en que se imparte dicha asignatura.
// Fecha: 19/03/2024
// Nombre: Denys Litvynov
//

//--------------------------------------------
// 1. Diseña e implementa una función para leer el fichero y 
// devolver su contenido como un array de objetos de JavaScript 
//
// nombreFicheroTexto: Texto -> leerJSONComoObjeto() -> 
// -> objetoRes: JSON{dia[{asginatura: texto, horaDeInicio: texto}]}
//--------------------------------------------
function leerJSONComoObjeto(nombreFicheroTexto,callback){
    var fs = require("fs");
    fs.readFile(nombreFicheroTexto, "utf8", function(err, contenido){
        if(err){
            callback(null, err);
        }
        else{
            callback(JSON.parse(contenido),null);
        }
    })
}// ()

//--------------------------------------------
// horario:JSON{dia[{asginatura: texto, horaDeInicio: texto}]} asignatura: texto ->
// -> obtenerHorario() -> horarioAsignatura: Lista<JSON[{asginatura: texto, horaDeInicio: texto}]>
//--------------------------------------------
function obtenerHorario(horario, asignatura){
    const horarioAsignatura = [];
    for(let dia in horario){
        const asignaturasDia = horario[dia];
        let asignaturas = asignaturasDia.filter(function(elem){
            if(elem.asignatura === asignatura){
                return true;
            }
            return false;
        });
        if(asignaturas.length>0){
            asignaturas.forEach(function(elem){
                horarioAsignatura.push({ dia: dia, horaDeInicio: elem.horaDeInicio})
            });
        }
    }
    return horarioAsignatura;
}// ()

// Prueba automática para la función
function probarObtenerHorario(callback){
    leerJSONComoObjeto("Horario.json", function(objetoInJSON, err){
        if(err){
            console.log("Ha habido un error" + err);
        }else{
            const arrayRes = obtenerHorario(objetoInJSON, "programación");
            console.log(arrayRes);
            callback(arrayRes);
        }
    })
}// ()

//--------------------------------------------
// Función para escribir un objeto como JSON en un archivo de texto
//
// objeto: JSON -> escribirObjetoComoJSONenArchivo() ->  /(error: Error)
//--------------------------------------------
function escribirObjetoComoJSONenArchivo(nombreFicheroTexto, objeto, callback){
    const objetoJSON = JSON.stringify(objeto);
    var fs = require("fs");
    fs.writeFile(nombreFicheroTexto, objetoJSON, function(err){
        if(err){
            callback(err);
        }else{
            callback(null);
        }
    })
}// ()

//--------------------------------------------
// main()
//--------------------------------------------

// Llamada a la función para obtener el horario y luego escribirlo en un archivo
probarObtenerHorario(function(horarioAsig) {
    escribirObjetoComoJSONenArchivo("HorarioAsingatura.json", horarioAsig, function(err){
        if(err){
            console.log("Ha habido un error" + err);
        }else{
            console.log("El objeto se ha escrito como JSON en el archivo HorarioAsingatura.json");
        }
    });
});

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------