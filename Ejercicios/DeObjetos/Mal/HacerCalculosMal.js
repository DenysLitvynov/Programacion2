//
// Archivo: HacerCalculos.js
// Descripción: escribir un programa que abra el fichero con las temperaturas guardasa y calcule
// la media de temperaturas y en que instante se produjo la maxima y la minima
// Fecha: 18/03/2024
// Nombre: Denys Litvynov
//

//
// Leemos el contendio del archivo de texto y lo convertimos en un objeto de JS.
// devolvemos el resultado con callback
//
var fs = require("fs");

function leerDatos(callback){
    fs.readFile("datos.txt","utf8", function(err, datos){
        if(err){
            console.log("hubo un problema al leer de datos.txt")
            return;
        }
        const mediciones = JSON.parse(datos);
        callback(mediciones);
    })
}

//--------------------------------------------
// Lista<JSON{hora:N, temperatura:R} -> calcularMedia() -> Media:R
//--------------------------------------------
function calcularMedia(mediciones){
    // verificiamos si el array tiene elementos si no , esta vacio
    if(mediciones.length === 0){
        return 0;
    }
    // iteramos sobre cada elemeno del array y acomulamos la suma 
    const sumaTemperaturas = mediciones.reduce(function(suma,medicion){
        // nos aseguramos que la temperatura sea un número y no un string
        const temperatura = parseFloat(medicion.temperatura);
        if(!isNaN(temperatura)){
            return suma + temperatura;
        }
        return suma;
    }, 0); // le pasamos un 0 porque es necesario pasar el valor inicial del acomulador
    const media = sumaTemperaturas / mediciones.length;
    return media.toFixed(2);
}

// Prueba automática para la función 
function probarCalcularMedia(){
    leerDatos(function(mediciones){
        let media = calcularMedia(mediciones);
        //console.log(media);
        if(media!=17.05){
            console.log("calcularMedia() está mal")
        }
    })
}

//--------------------------------------------
//--------------------------------------------

//--------------------------------------------
// Lista<JSON{hora:N, temperatura:R} -> calcularMaximo() -> temperaturaMaxima: R horaMaxima: N
//--------------------------------------------
function calcularMaximo(mediciones){
    // verificiamos si el array tiene elementos si no , esta vacio
    if(mediciones.length === 0){
        return 0;
    }
    // definimos las variables suponiendo que el primer valor es el más grande
    let temperaturaMaxima = mediciones[0].temperatura;
    let horaMaxima = mediciones[0].hora;
    // iteramos sobre todas las mediciones y si es mayor que la actual maxima, cambiamos el valor
    mediciones.forEach(function(medicion){
        if(medicion.temperatura > temperaturaMaxima){
            temperaturaMaxima = medicion.temperatura;
            horaMaxima = medicion.hora;
        }
    });
    return {temperaturaMaxima: temperaturaMaxima, horaMaxima: horaMaxima};
}

// Prueba automática para la función 
function probarCalcularMaximo(){
    leerDatos(function(mediciones){
        let maximo = calcularMaximo(mediciones);
        //console.log(maximo);
        if(maximo.temperaturaMaxima != '18.96' || maximo.horaMaxima != '8:47:54'){
            console.log("calcularMaximo() está mal")
        }
    });
}

//--------------------------------------------
//--------------------------------------------

//--------------------------------------------
// Lista<JSON{hora:N, temperatura:R}> -> calcularMinimo() -> temperaturaMinima: R horaMinima: N
//--------------------------------------------
function calcularMinimo(mediciones){
    // si el tamaño de mediciones es 0 devolvemos null ya que esta vacio
    if(mediciones.length === 0){
        return null;
    }
    // definimos las variables suponiendo que el primer valor es el minimo
    let temperaturaMinima = mediciones[0].temperatura;
    let horaMinima = mediciones[0].hora;
    // iteramos sobre todas las mediciones y si es menor que la actual minima, cambiamos el valor
    mediciones.forEach(function(medicion){
        if(medicion.temperatura<temperaturaMinima){
            temperaturaMinima = medicion.temperatura;
            horaMinima = medicion.hora;
        }
    })
    return {temperaturaMinima: temperaturaMinima, horaMinima: horaMinima};
}

// Prueba automática para la función
function probarCalcularMinimo(){
    leerDatos(function(mediciones){
        let minimo = calcularMinimo(mediciones);
        //console.log(minimo);
        if(minimo.temperaturaMinima != '15.72' || minimo.horaMinima != '8:47:50'){
            console.log("calcularMinimo() está mal");
        }
    });
} 

//--------------------------------------------
// main()
//--------------------------------------------

probarCalcularMedia();
probarCalcularMaximo();
probarCalcularMinimo();

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------