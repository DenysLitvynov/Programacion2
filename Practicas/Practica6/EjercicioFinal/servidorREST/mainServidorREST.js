// ----------------------------------------------
// mainServidorREST.js
// ----------------------------------------------
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Importar el módulo 'path' de Node.js
const Logica = require("../logica/Logica.js");

// ----------------------------------------------
// ----------------------------------------------

// Función para cargar la lógica desde el archivo de base de datos
async function cargarLogica(fichero) {
    return new Promise((resolve, reject) => {
        var laLogica = new Logica(fichero, function(err) {
            if (err) {
                reject(err);
            } else {
                resolve(laLogica);
            }
        });
    });
}

// ----------------------------------------------
// ----------------------------------------------

// Función principal para iniciar el servidor
async function main() {
    // Cargar la lógica desde la base de datos
    var laLogica = await cargarLogica("../bd/datos.bd");
    // Crear una instancia de Express
    var app = express();
    // Configurar el middleware para analizar cuerpos de solicitud JSON
    app.use(bodyParser.text({ type: 'application/json' }));
    // Servir archivos estáticos desde la carpeta 'ux'
    app.use(express.static(path.join(__dirname, '..', 'ux')));
    // Cargar las reglas REST
    var reglas = require("./ReglasREST.js");
    reglas.cargar(app, laLogica);
    // Iniciar el servidor en el puerto 8080
    var servicio = app.listen(8080, function() {
        console.log("Servidor REST escuchando en el puerto 8080");
    });
    // Manejar la señal SIGINT para cerrar el servidor ordenadamente
    process.on('SIGINT', function() {
        console.log("Terminando");
        servicio.close();
    });
}
// ----------------------------------------------
// ----------------------------------------------
main();
// ----------------------------------------------
// ----------------------------------------------
