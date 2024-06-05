// ----------------------------------------------
// scripts.js
// ----------------------------------------------
import LogicaFake from './LogicaFake.js';
//const LogicaFake = require("LogicaFake.js");

document.addEventListener('DOMContentLoaded', () => {
    const logicaFake = new LogicaFake();

    // Función para mostrar un toast
    const showToast = (message) => {
        const toast = document.getElementById('toast');
        toast.innerText = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000); // Oculta el toast después de 3 segundos
    };

    // ----------------------------------------------
    //
    // ----------------------------------------------
    document.getElementById('btn_borrar').addEventListener('click', async (event) => {
        event.preventDefault();
        const tablaBorrar = document.getElementById('tablaBorrar').value;
        try {
            await logicaFake.borrarFilasDe(tablaBorrar);
            showToast(`Las filas de la tabla ${tablaBorrar} han sido borradas con éxito.`);
        } catch (error) {
            console.error("Error al borrar los datos:", error);
            showToast(`Hubo un error al borrar las filas de la tabla ${tablaBorrar}.`);
        }
    });

    // ----------------------------------------------
    //
    // ----------------------------------------------
    document.getElementById('btn_borrar_todas').addEventListener('click', async (event) => {
        event.preventDefault();
        try {
            await logicaFake.borrarFilasDeTodasLasTablas();
            showToast("Todas las filas de todas las tablas han sido borradas con éxito.");
        } catch (error) {
            console.error("Error al borrar todas las filas:", error);
            showToast("Hubo un error al borrar todas las filas de todas las tablas.");
        }
    });

    // ----------------------------------------------
    //
    // ----------------------------------------------
    document.getElementById('btn_buscar_pers').addEventListener('click', async (event) => {
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

    document.getElementById('btn_buscar_asig').addEventListener('click', async (event) => {
        event.preventDefault();
        const codigo = document.getElementById('codigoBuscar').value;
        const resultadoDiv = document.getElementById('resultadoBuscarAsignatura');
        resultadoDiv.innerHTML = "Resultado: "; 
        try {
            const asignatura = await logicaFake.buscarAsignaturaPorCodigo(codigo);
            resultadoDiv.innerHTML = `Código: ${asignatura.codigo}<br>Nombre: ${asignatura.nombre}`;
            document.getElementById('codigoBuscar').style.borderColor = "";
        } catch (error) {
            console.error("Error al buscar la asignatura:", error);
            document.getElementById('codigoBuscar').style.borderColor = "red";
            alert("El código introducido no se encuentra en la base de datos.");
        }
    });

    // ----------------------------------------------
    //
    // ----------------------------------------------
    document.getElementById('btn_insertar_pers').addEventListener('click', async (event) => {
        event.preventDefault();
        const dni = document.getElementById('dni').value;
        const nombre = document.getElementById('nombre').value;
        const apellidos = document.getElementById('apellidos').value;
        
        try {
            await logicaFake.insertarPersona({ dni, nombre, apellidos });
            showToast("Persona insertada con éxito.");
        } catch (error) {
            console.error("Error al insertar la persona:", error);
            showToast("Hubo un error al insertar la persona.");
        }
    });

    // ----------------------------------------------
    //
    // ----------------------------------------------
    document.getElementById('btn_insertar_asig').addEventListener('click', async (event) => {
        event.preventDefault();
        const codigo = document.getElementById('codigo').value;
        const nombre = document.getElementById('nombreAsignatura').value;

        try {
            await logicaFake.insertarAsignatura({codigo, nombre});
            showToast("Asignatura insertada con éxito.");
        } catch (error) {
            console.error("Error al insertar la asignatura:" , error);
            showToast("Hubo un error al  insertar la asignatura.");
        }
    })

    // ----------------------------------------------
    //
    // ----------------------------------------------
    document.getElementById('btn_insertar_mat').addEventListener('click', async (event) => {
        event.preventDefault();
        const dni = document.getElementById('dniMatricula').value;
        const codigo = document.getElementById('codigoMatricula').value;

        try {
            await logicaFake.realizarMatricula({ dni, codigo });
            showToast("Matrícula insertada con éxito.");
        } catch (error) {
            console.error("Error al insertar la matrícula:", error);
            showToast("Hubo un error al insertar la matrícula.");
        }
    });

    // ----------------------------------------------
    //
    // ----------------------------------------------
    document.getElementById('btn_obtener_asig').addEventListener('click', async (event) => {
        event.preventDefault();
        const apellidosBuscar = document.getElementById('apellidosBuscar').value;
        const resultadoDiv = document.getElementById('resultadoObtenerAsignaturas');
        resultadoDiv.innerHTML = "Resultado: ";
        try {
            const codigos = await logicaFake.obtenerAsignaturasPorApellidos(apellidosBuscar);
            if (codigos.length > 0) {
                resultadoDiv.innerHTML = `Asignaturas: ${codigos.join(', ')}`;
                document.getElementById('apellidosBuscar').style.borderColor = "";
            } else {
                resultadoDiv.innerHTML = "No se encontraron asignaturas para los apellidos proporcionados.";
                document.getElementById('apellidosBuscar').style.borderColor = "red";
            }
        } catch (error) {
            console.error("Error al obtener asignaturas:", error);
            document.getElementById('apellidosBuscar').style.borderColor = "red";
            alert("Error al obtener asignaturas.");
        }
    });
});
