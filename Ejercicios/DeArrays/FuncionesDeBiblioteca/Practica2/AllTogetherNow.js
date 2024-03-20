//
// Archivo: AllTogetherNow.js
// Descripción: escribe trozos de código que, a partir de esta lista de palabras
// Fecha: 19/03/2024
// Nombre: Denys Litvynov
//

//--------------------------------------------
// 1. obtenga una nueva lista con cada palabra escrita del revés
// Lista<Palabras> -> escribirDelReves() -> Lista<PalabrasInvertidas>
//--------------------------------------------
function escribirDelReves(palabras){
    return palabras.map(function(elem){
        return elem.split("").reverse().join("");
    })
}

// Prueba automática para la función 
function probarEscribirDelReves(palabras,esperadas){
    const resultado = escribirDelReves(palabras);
    for(let i=0; i<resultado.length; i++){
        if(resultado[i] != esperadas[i]){
            console.log("escribirDelReves() esta mal");
            break;
        }
    }// for
}// ()

//--------------------------------------------
//--------------------------------------------

//--------------------------------------------
// 2. calcule el total de caracteres de la frase completa
// Lista<Palabras> -> calcularCaracteres() -> caracteres: N
//--------------------------------------------
function calcularCaracteres(palabras){
    const longitudPalabras = palabras.map(function(elem){
        return elem.length;
    })
    return longitudPalabras.reduce(function(acum,elem){
        return acum + elem;
    },0);
}// ()

// Prueba automática para la función 
function probarCalcularCaracteres(palabras,cantidadEsperada){
    const resultado = calcularCaracteres(palabras);
    if(resultado != cantidadEsperada){
        console.log("calcularCaracteres() está mal");
    }
}// ()

//--------------------------------------------
//--------------------------------------------

//--------------------------------------------
// 3. calcule cuántas palabras tienen más de 5 letras
// Lista<Palabras> -> filtrarMasLargasDeCinco() -> Lista<PalabrasMayores>
//--------------------------------------------
function filtrarMasLargasDeCinco(palabras){
    return palabras.filter(function(elem){
        if(elem.length > 5){
            return elem;
        }
    })
}// ()

// Prueba automática para la función 
function probarFiltrarMasLargasDeCinco(palabras,esperadas){
    const resultado = filtrarMasLargasDeCinco(palabras);
    for(let i=0; i<resultado.length; i++){
        if(resultado[i] != esperadas[i]){
            console.log("filtrarMasLargasDeCinco() esta mal");
            break;
        }
    }// for
}// ()

//--------------------------------------------
//--------------------------------------------

//--------------------------------------------
// 4. obtenta una palabra que sea la concatenación de aquéllas con 3 letras o menos.
// Lista<Palabras> -> concatenarMasCortasDeTres() -> concatenadas: texto
//--------------------------------------------
function concatenarMasCortasDeTres(palabras){
    return palabras.reduce(function(acum,elem){
        if(elem.length <= 3){
            return acum + elem;
        }
        return acum;
    }, "");
}// ()

// Prueba automática para la función 
function probarConcatenarMasCortasDeTres(palabras, esperada){
    const resultado = concatenarMasCortasDeTres(palabras);
    if(resultado != esperada){
        console.log("concatenarMasCortasDeTres() esta mal");
    }
}// ()

//--------------------------------------------
//--------------------------------------------

//--------------------------------------------
// main()
//--------------------------------------------

function main(){
    var palabras = ["Es", "ahora", "tu", "oportunidad", "para", "aprovechar", "este", "día"]
    var esperadas1 = ["sE", "aroha", "ut", "dadinutropo", "arap", "rahcevorpa", "etse", "aíd"]
    var esperadas3 = ["oportunidad","aprovechar"];
    probarEscribirDelReves(palabras,esperadas1);
    probarCalcularCaracteres(palabras,41);
    probarFiltrarMasLargasDeCinco(palabras,esperadas3);
    probarConcatenarMasCortasDeTres(palabras,"Estudía");
}
main();

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------