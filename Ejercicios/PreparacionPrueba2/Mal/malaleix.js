const fs = require('fs').promises; 
  
async function leerMediciones(rutaArchivo) {    
     try {                 
        const data = await fs.readFile(rutaArchivo, 'utf8');                 
        return JSON.parse(data);     
    } catch (error) {                 
        console.error("Error al leer el archivo:", error);         
        throw error;       
    } 
} 
          
async function main() {     
    try {         
        var datos = await leerMediciones("mediciones.json");         
        console.log(datos);     
    } catch (error) {         
        console.error("Error al leer el fichero:", error);     
    } 
}   
main();