//
// Archivo: SumaConPromesa.js
// Descripción: Suma asincrónica:
/*Crea una función sumaAsync(a, b) que tome dos números como argumentos.
Dentro de la función, utiliza una promesa para simular una suma asincrónica de los dos números.
Devuelve una promesa que resuelva con el resultado de la suma si la operación es exitosa, y se rechace si hay algún error.
Usa .then() para manejar la suma exitosa y mostrar el resultado.
Usa .catch() para manejar cualquier error en la operación.*/
// Fecha: 19/04/2024
// Nombre: Denys Litvynov
//

//--------------------------------------------
// a:R b:R -> sumar() -> R
//--------------------------------------------
function sumar(a,b){
    var prom = new Promise( function(resolve , reject){
        setTimeout( function() {
            resolve(a + b)
        }, 1000)
    })
    return prom;
} // ()

//--------------------------------------------
// main()
//--------------------------------------------

sumar(2,2)
    .then(function(resultado){
        console.log(resultado);
    })
    .catch(function(error){
        console.log(error)
    })

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------