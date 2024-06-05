// ----------------------------------------------
// LogicaFake.js
// ----------------------------------------------
//import axios from 'axios';

class LogicaFake {

    // ----------------------------------------------
    // constructor() -->
    // ----------------------------------------------
    constructor() {
        this.baseURL = 'http://localhost:8080';
    }//()

    // ----------------------------------------------
    // nombreTabla: Texto
    // --> 
    // borrarFilasDe() -->
    // ----------------------------------------------
    async borrarFilasDe(tabla) {
        try {
            const response = await axios.delete(`${this.baseURL}/borrar/${tabla}`);
            return response.data;
        } catch (error) {
            console.error("Error al borrar las filas:", error);
            throw error;
        }
    }//()

    // ----------------------------------------------
    // borrarFilasDeTodasLasTablas() -->
    // ----------------------------------------------
    async borrarFilasDeTodasLasTablas() {
        try {
            await this.borrarFilasDe("Matricula");
            await this.borrarFilasDe("Asignatura");
            await this.borrarFilasDe("Persona");
        } catch (error) {
            console.error("Error al borrar todas las filas:", error);
            throw error;
        }
    }//()
    
    // ----------------------------------------------
    // datos:{dni:Texto, nombre:Texto: apellidos: Texto}
    // -->
    // insertarPersona() 
    // ----------------------------------------------
    async insertarPersona(datos) {
        try {
            const response = await axios.post(`${this.baseURL}/persona`, datos);
            return response.data;
        } catch (error) {
            console.error("Error al insertar persona:", error);
            throw error;
        }
    }//()

    // .................................................................
    // asignatura:{codigo:Texto, nombre:Texto}
    // -->
    // insertarAsignatura() -->
    // .................................................................
    async insertarAsignatura(asignatura){
        try {
            const response = await axios.post(`${this.baseURL}/asignatura`, asignatura);
            return response.data;
        } catch (error) {
            console.error("Error al insertar asignatura:", error);
            throw error;
        }
    }//()

    // .................................................................
    // matricula:{dni:Texto, codigo:Texto}
    // -->
    // realizarMatricula() -->
    // .................................................................
    async realizarMatricula(matricula){
        try {
            const response = await axios.post(`${this.baseURL}/matricula`, matricula);
            return response.data;
        } catch (error) {
            console.error("Error al insertar matrícula:", error);
            throw error;
        }
    }//()

    // ----------------------------------------------
    // dni:Texto
    // -->
    // buscarPersonaPorDNI() <--
    // <--
    // {dni:Texto, nombre:Texto: apellidos:Texto}
    // ----------------------------------------------
    async buscarPersonaConDNI(dni) {
        try {
            const response = await axios.get(`${this.baseURL}/persona/${dni}`);
            return response.data;
        } catch (error) {
            console.error("Error al buscar la persona:", error);
            throw error;
        }
    }//()

    // ----------------------------------------------
    // codigo:Texto
    // -->
    // buscarAsignaturaPorCodigo() <--
    // <--
    // {codigo:Texto, nombre:Texto}
    // ----------------------------------------------
    async buscarAsignaturaPorCodigo( codigo ) {
        try {
            const response = await axios.get(`${this.baseURL}/asignatura/${codigo}`);
            return response.data;
        } catch (error) {
            console.error("Error al buscar la asignatura:", error);
            throw error;
        }
    }// ()

    // ----------------------------------------------
    // apellidos: Texto
    // -->
    // obtenerAsignaturas() <--
    async obtenerAsignaturasPorApellidos(apellidos) {
        try {
            const response = await axios.get(`${this.baseURL}/asignaturas/${apellidos}`);
            return response.data;
        } catch (error) {
            console.error("Error al obtener asignaturas:", error);
            throw error;
        }
    }

}// class

// ----------------------------------------------
// ----------------------------------------------
export default LogicaFake;
// ----------------------------------------------
// ----------------------------------------------
