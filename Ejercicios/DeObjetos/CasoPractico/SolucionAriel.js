/*=================================================================================
Nombre: Ariel Bejaran
Programacion 2
Practica 3

Diseña e implementa un programa que a partir de la información guardada en el fichero "datos.txt" calcule
la media de las temperaturas guardadas y cuál es la máxima y la mínima temperatura registrada y las horas
en que se produjeron.
Este programa debe tener una función distinta para realizar cada cálculo: calcular la media, encontrar la
temperatura máxima y su hora; y encontrar la temperatura mínima y su hora.
==================================================================================*/
function reducir(lista, funcionAcumuladora, valorInicial) {
    // Inicializamos la variable acumulado con el valor inicial proporcionado
    let acumulado = valorInicial;
  
    // Iteramos sobre cada elemento del array lista
    for (let elemento of lista) { // Recorremos cada elemento de la lista
        // Llamamos a la función acumuladora con el valor acumulado y el elemento actual,
        // y actualizamos el valor acumulado con el resultado
        acumulado = funcionAcumuladora(acumulado, elemento);
    }
  
    // Devolvemos el valor acumulado final
    return acumulado;
  }
  //==============================================================================s
var fs=require("fs");
//const { json } = require("stream/consumers");

  function leer_datos(callback){
    fs.readFile( "datos.txt", "utf8", function( err, contenido ) {//fs.readFile( filename, encoding, callback_function )

    if( err ) {
    console.log("Hubo un problema al leer datos.txt")
    console.log(err);  // Imprime el error
    return;
    }
    const datos_objeto=JSON.parse(contenido);
    callback(datos_objeto);
    })
    }



//**********************/

// Lista<JSON{hora:N, temperatura:R} -> calcular_la_media_temperatura() -> media:R

//**********************/
function calcular_la_media_temperatura(medidas){
    
    if (medidas.length===0) {
        return 0;
    }
    let res= reducir(medidas,(acumulado, elemento) => acumulado + elemento.temperatura,0);
    let media= res/medidas.length;

    return media.toFixed(2);
}

//**********************/

// Lista<JSON{hora:N, temperatura:R} -> encontrar_temperatura_maxima() -> {horaMaxima: N, temperaturaMaxima: R}

//**********************/
function encontrar_temperatura_maxima(medidas) {
    if (medidas.length==0) {
        return 0;
    }
    let temperatura_maxima = medidas[0].temperatura;
    let horaMaxima = medidas[0].hora;

    for (let index = 0; index < medidas.length; index++) {
        if (medidas[index].temperatura > temperatura_maxima) {
            temperatura_maxima = medidas[index].temperatura;
            horaMaxima = medidas[index].hora;
        }
    }

    return { hora: horaMaxima, temperatura: temperatura_maxima };
}

//**********************/

// Lista<JSON{hora:N, temperatura:R}> -> encontrar_temperatura_minima() {horaMinima: N, temperaturaMinima: R}

//**********************/s
function encontrar_temperatura_minima(medidas){
    if (medidas.length==0) {
        return 0;
    }
        let temperatura_minima = medidas[0].temperatura;
        let hora_minima = medidas[0].hora;
    
        for (let index = 0; index < medidas.length; index++) {
            if (medidas[index].temperatura < temperatura_minima) {
                temperatura_minima = medidas[index].temperatura;
                hora_minima = medidas[index].hora;
            }
        }
    
        return { hora: hora_minima, temperatura: temperatura_minima };
    }

//==============================================================================S
//PRUEBAS AUTOMATICAS
function probar_media_Temperatura(){
    leer_datos(function(medidas) {
        const media = calcular_la_media_temperatura(medidas);
        if (media!=17.57) {
            console.log("1.) Probar media va mal");
        }
    });
}

function probar_Maxima_Temperaturas(){
    leer_datos(function(medidas) {
        let objeto_esperado= {hora:"12:22:21 p. m.",temperatura:20}
        const maxima = encontrar_temperatura_maxima(medidas);
        
        if (JSON.stringify(maxima)!=JSON.stringify(objeto_esperado)) {
            console.log("2. Maxima tempertura no va")
        }
    });
}

function probar_Minima_Temperaturas(){
    leer_datos(function(medidas) {
        let objeto_esperado={hora:"12:22:18 p. m.",temperatura:15}
        const minima = encontrar_temperatura_minima(medidas);

        if (JSON.stringify(minima)!=JSON.stringify(objeto_esperado)) {
            console.log("3. Minima tempertura no va")
        }
    });
}
//==============================================================================

//---------------------------------------------------------
//MAIN
//---------------------------------------------------------

//NOTA: FUNCIONA BIEN PERO PROBANDO ALGO EN MEDIR TEMPERATURA HA CAMBIADO LOS DATOS
leer_datos(function(medidas){
    console.log(medidas);
    probar_media_Temperatura();
    probar_Maxima_Temperaturas();
    probar_Minima_Temperaturas();
})