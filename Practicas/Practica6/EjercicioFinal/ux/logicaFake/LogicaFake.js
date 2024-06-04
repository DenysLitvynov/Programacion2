// ----------------------------------------------
// LogicaFake.js
// ----------------------------------------------
//import axios from 'axios';
//const axios = require("axios");

class LogicaFake {

    // ----------------------------------------------
    // 
    // ----------------------------------------------
    constructor() {
        this.baseURL = 'http://localhost:8080';
    }//()

    // ----------------------------------------------
    // 
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
    // 
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
}// class

export default LogicaFake;
