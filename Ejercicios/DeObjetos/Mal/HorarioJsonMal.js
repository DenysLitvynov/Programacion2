//
// Archivo: Horario.js
// Descripción:  Diseña e implementa una estructura con objetos de JavaScript para representar tu horario de clases.
// Fecha: 
// Nombre: 
//

//
// Objeto Horario
//
const Horario = {
    lunes : [
        {asignatura: "física", horaDeInicio: "8:30"},
        {asignatura: "matemáticas", horaDeInicio: "10:15"},
        {asignatura: "inglés", horaDeInicio: "12:00"},
    ],
    martes : [
        {asignatura: "programación", horaDeInicio: "8:30"},
        {asignatura: "matemáticas", horaDeInicio: "10:15"},
    ],
    miercoles: [
        {asignatura: "inglés", horaDeInicio: "8:30"},
        {asignatura: "física", horaDeInicio: "10:15"},
    ],
    jueves : [
        {asignatura: "física", horaDeInicio: "8:30"},
        {asignatura: "matemáticas", horaDeInicio: "10:15"},
        {asignatura: "inglés", horaDeInicio: "12:00"},
    ],
    viernes : [
        {asignatura: "programación", horaDeInicio: "8:30"},
        {asignatura: "matemáticas", horaDeInicio: "10:15"},
    ]
}// obj

//--------------------------------------------
//--------------------------------------------

//
// horario:Obj/JSON asignatura:string -> obtenerHorario() -> horas:[string]
//
function obtenerHorario(horario,asignatura){
    const horarioAsignatura = [];
    for(let dia in horario){
        const asignaturasDia = horario[dia];
        for(let asignaturaDia of asignaturasDia){
            if(asignaturaDia.asignatura === asignatura){
                horarioAsignatura.push(`${dia} - ${asignaturaDia.horaDeInicio}`);
            }
        }// for of
    }// for in
    return horarioAsignatura;
}// ()

//--------------------------------------------
// main()
//--------------------------------------------

var texto = JSON.stringify(Horario); // pasamos el objeto a JSON
console.log(texto); // lo mostramos por pantalla

var horas = obtenerHorario(Horario,"programación");
var horarioProg = JSON.stringify(horas);
console.log(horarioProg);


//--------------------------------------------
//--------------------------------------------
//--------------------------------------------