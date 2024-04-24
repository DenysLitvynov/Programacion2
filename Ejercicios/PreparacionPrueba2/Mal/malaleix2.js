function leerTexto(nombreArchivo) {      
    var obj = {}       
    var promesa = new Promise(function (resolver, rechazar) {         
        fs.readFile(nombreArchivo, "utf8", function (error, contenido) {             
            if (error) {                 
                rechazar("hubo un problema al leer de datos.txt")                 
                return             
            }               
            obj = JSON.parse(contenido)               
            resolver(obj)         
        })     
    })       
    return promesa 
} 

async function main() {     
    try {         
        var datos = await leerMediciones("mediciones.json");         
        console.log(datos);     
    } catch (error) {         
        console.error("Error al leer el fichero:", error);     
    } 
}  
main()