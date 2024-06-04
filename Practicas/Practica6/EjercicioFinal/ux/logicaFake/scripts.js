// ----------------------------------------------
// scripts.js
// ----------------------------------------------
import LogicaFake from './LogicaFake.js';
//const LogicaFake = require("LogicaFake.js");

document.addEventListener('DOMContentLoaded', () => {
    const logicaFake = new LogicaFake();

    document.getElementById('btn_borrar').addEventListener('click', async (event) => {
        event.preventDefault();
        const tablaBorrar = document.getElementById('tablaBorrar').value;
        try {
            const result = await logicaFake.borrarFilasDe(tablaBorrar);
            console.log("Datos borrados:", result);
            // Actualiza la interfaz con el resultado
        } catch (error) {
            console.error("Error al borrar los datos:", error);
        }
    });

    document.getElementById('btn_buscar').addEventListener('click', async (event) => {
        event.preventDefault();
        const dni = document.getElementById('dniBuscar');
        const resultadoDiv = document.getElementById('resultadoBuscarPersona');
        resultadoDiv.innerHTML = "Resultado: "; // vacía la sección de resultados
        try {
            const persona = await logicaFake.buscarPersonaConDNI(dni.value);
            resultadoDiv.innerHTML = `Nombre: ${persona.nombre}<br>Apellidos: ${persona.apellidos}<br>DNI: ${persona.dni}`;
            dni.style.borderColor = ""; // resetea el color del borde
        } catch (error) {
            console.error("Error al buscar la persona:", error);
            dni.style.borderColor = "red"; // cambia el color del borde a rojo
            alert("El DNI introducido no se encuentra en la base de datos."); // muestra un mensaje de error
        }
    });    
    
});
