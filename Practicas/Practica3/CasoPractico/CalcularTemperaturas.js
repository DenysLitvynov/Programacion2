//
// Archivo: CalcularTemperaturas.js
// Descripción: Diseña e implementa un programa que a partir de la información guardada en el fichero "datos.txt" calcule
// la media de las temperaturas guardadas y cuál es la máxima y la mínima temperatura registrada y las horas en que se produjeron.
// Este programa debe tener una función distinta para realizar cada cálculo: calcular la media, encontrar la
// temperatura máxima y su hora; y encontrar la temperatura mínima y su hora.
// Fecha: 07/03/2024
// Nombre: Denys Litvynov
//

//
// Leemos el contenido del archivo de texto y lo convertimos en un objeto de JS. devolvemos el resultado con un callabck
//
var fs = require( "fs" );

function leerDatos(callback){
    fs.readFile( "datos.txt", "utf8" , function(err, datos){
        if( err ){
            console.log( "hubo un problema al leer de datos.txt" );
            return;
        }
        const mediciones = JSON.parse(datos);
        callback(mediciones);
    });
}

//--------------------------------------------
// Lista<JSON{hora:N, temperatura:R}> -> calcularMedia() -> Media: R
//--------------------------------------------
function calcularMedia(mediciones){
    // verificamos si el array tiene elementos, si no, esta vacio y devolvemos un 0
    if(mediciones.length === 0){
        return 0;
    }
    // iteramos sobre cada elemento del array y acomulamos la suma
    const sumaTemperaturas = mediciones.reduce((suma, medicion) => {
        // nos aseguramos que la temperatura sea un número y no un string
        const temperatura = parseFloat(medicion.temperatura);
        if (!isNaN(temperatura)) {
            return suma + temperatura;
        }
    }, 0); // le pasamos un 0 porque es necesario pasar el valor inicial del acomulador
    const media = sumaTemperaturas / mediciones.length;
    return media.toFixed(2);
}// ()

// Prueba automática para la función calcularMedia()
function probarCalcularMedia(){
    leerDatos((mediciones) => {
        let media = calcularMedia(mediciones);
        console.log(media);
        if(media!=18.11){
            console.log("calcularMedia() está mal")
        }
    });
}// ()

//--------------------------------------------
//--------------------------------------------

//--------------------------------------------
// Lista<JSON{hora:N, temperatura:R}> -> calcularMaximo() -> temperaturaMaxima: R horaMaxima: N
//--------------------------------------------
function calcularMaximo(mediciones){
    // si el tamaño de mediciones es 0 devolvemos null ya que esta vacio
    if(mediciones.length === 0){
        return null;
    } 
    // definimos las variables suponiendo que el primer valor es el maximo
    let temperaturaMaxima = mediciones[0].temperatura;
    let horaMaxima = mediciones[0].hora;
    // iteramos sobre todas las mediciones y si es mayor que la actual maxima, cambiamos el valor
    mediciones.forEach(medicion => {
        if(medicion.temperatura > temperaturaMaxima){
            temperaturaMaxima = medicion.temperatura;
            horaMaxima = medicion.hora;
        }
    });
    return {temperaturaMaxima: temperaturaMaxima, horaMaxima: horaMaxima};
}

// Prueba automática para la función calcularMaximo()
function probarCalcularMaximo(){
    leerDatos((mediciones) => {
        let maximo = calcularMaximo(mediciones);
        console.log(maximo);
        if(maximo.temperaturaMaxima != '19.11' || maximo.horaMaxima != '10:19:48'){
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
    mediciones.forEach(medicion => {
        if(medicion.temperatura < temperaturaMinima){
            temperaturaMinima = medicion.temperatura;
            horaMinima = medicion.hora;
        }
    })
    return {temperaturaMinima: temperaturaMinima, horaMinima: horaMinima};
}

// Prueba automática para la función calcularMinimo()
function probarCalcularMinimo(){
    leerDatos((mediciones) => {
        let minimo = calcularMinimo(mediciones);
        console.log(minimo);
        if(minimo.temperaturaMinima != '16.48' || minimo.horaMinima != '10:19:45'){
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