//
// Archivo: Horario.js
// Descripción: Diseña e implementa una estructura con objetos de JavaScript para representar tu horario de clases.
// Fecha: 07/03/2024
// Nombre: Denys Litvynov 
//

//
// Definimos un objeto horario que dentro contiene otra lista de objetos,
// dias de semana que dentro contienen los nombres y las horas
//
var miHorario = {
    lunes : [ 
        {asignatura : "física", horaInicio : "8:00" },
        {asignatura : "matemáticas", horaInicio : "10:00" },
        {asignatura : "ingles", horaInicio : "12:00" },
    ],
    martes : [
        {asignatura : "programación", horaInicio : "8:00" },
        {asignatura : "matemáticas", horaInicio : "10:00" },
    ],
    miercoles : [
        {asignatura : "ingles", horaInicio : "8:00" },
        {asignatura : "física", horaInicio : "10:00" },
    ],
    jueves : [ 
        {asignatura : "física", horaInicio : "8:00" },
        {asignatura : "matemáticas", horaInicio : "10:00" },
        {asignatura : "ingles", horaInicio : "12:00" },
    ],
    viernes : [
        {asignatura : "programación", horaInicio : "8:00" },
        {asignatura : "matemáticas", horaInicio : "10:00" },
    ]
}// Obj

var horario = JSON.stringify(miHorario);
console.log(horario);

//--------------------------------------------
//--------------------------------------------

function obtenerHorario(horario, asignatura) {
    const horarioAsignatura = [];
    for (const dia in horario) {
        const asignaturasDia = horario[dia];
        for (const asignaturaDia of asignaturasDia) {
            if (asignaturaDia.asignatura === asignatura) {
                horarioAsignatura.push(`${dia} - ${asignaturaDia.horaInicio}`);
            }
        }// for of
    }// for in
    return horarioAsignatura;
}// ()

//--------------------------------------------
// main()
//--------------------------------------------

const res = obtenerHorario(miHorario, "programación");
console.log(res);

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------