//
// Archivo: alltogethernow.js
// Descripción: Utilizando las anteriores funciones filtrar(), mapear() y reducir(); escribe trozos de código que, a partir de esta lista de palabras
// Fecha: 20/03/2024
// Nombre: Denys Litvynov
//

//--------------------------------------------
// 1. obtenga una nueva lista con cada palabra escrita del revés 
// Lista<Palabras> -> escribirDelReves() -> Lista<Invertidas>
//--------------------------------------------
function invertirPalabaras(palabras){
    return palabras.map(function(elem){
        return elem.split("").reverse().join("");
    })
}//()

// Prueba automática para la función 
function probarInvertirPalabaras(palabras,esperadas){
    const resultado = invertirPalabaras(palabras);
    for(let i = 0; i<resultado.length; i++){
        if(resultado[i] != esperadas[i]){
            console.log("invertirPalabras() esta mal")
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
function calcularTotal(palabras){
    const longitudes = palabras.map(function(elem){
        return elem.length;
    })
    const total = longitudes.reduce(function(acum,elem){
        acum += elem;
        return acum;
    },0)
    return total;
}// ()

// Prueba automática para la función 
function probarCalcularTotal(palabras, caracteresEsp){
    const resultado = calcularTotal(palabras);
    if(resultado != caracteresEsp){
        console.log("calcularTotal() esta mal")
    }
}// ()

//--------------------------------------------
//--------------------------------------------

//--------------------------------------------
// 3. calcule cuántas palabras tienen más de 5 letras
// Lista<Palabras> -> calcularMasDeCinco() -> Lista<PalabrasMayores>
//--------------------------------------------
function calcularMasDeCinco(palabras){
    return palabras.filter(function(elem){
        if(elem.length>5){
            return elem;
        }
    })
}//()

// Prueba automática para la función 
function probarCalcularMasDeCinco(palabras,esperadas){
    const resultado = calcularMasDeCinco(palabras);
    for(let i = 0; i<resultado.length; i++){
        if(resultado[i] != esperadas[i]){
            console.log("calcularMasDeCinco() esta mal")
            break;
        }
    }// for
}//()

//--------------------------------------------
//--------------------------------------------

//--------------------------------------------
// 4. obtenta una palabra que sea la concatenación de aquéllas con 3 letras o menos. 
// Lista<Palabras> -> concatenar() -> concatenadas: texto
//--------------------------------------------
function concatenar(palabras){
    return palabras.reduce(function(acum,elem){
        if(elem.length <= 3){
            return acum + elem;
        }
        return acum;
    }, "");
}// ()

// Prueba automática para la función 
function probarConcatenar(palabras,esperada){
    const resultado = concatenar(palabras);
    if(resultado != esperada){
        console.log("concatenar() esta mal");
    }
}// ()

//--------------------------------------------
// main()
//--------------------------------------------

function main(){
    var palabras = ["Es", "ahora", "tu", "oportunidad", "para", "aprovechar", "este", "día"];
    var esperadas1 = ["sE", "aroha", "ut", "dadinutropo", "arap", "rahcevorpa", "etse", "aíd"]
    var esperadas3 = ["oportunidad","aprovechar"];
    probarInvertirPalabaras(palabras, esperadas1);
    probarCalcularTotal(palabras, 41);
    probarCalcularMasDeCinco(palabras, esperadas3);
    probarConcatenar(palabras, "Estudía");
}
main();

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------