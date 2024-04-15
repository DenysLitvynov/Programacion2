//
// Archivo: Ejercicio2.js
// Descripción: Diseña una función que reciba una lista de xs numeros reales y un polinomio y devuelva el valor del polinomio 
// para cada numero xs. Implementa la función utilizando mapear(). Escribe una prueba automática para tu función.
// Fecha: 26/03/2024
// Nombre: Denys Litvynov
//

//--------------------------------------------
// xs:[R] polinomio:(R -> () -> R) -> hacerCalculos() -> resultado:[R]
//--------------------------------------------
function hacerCalculos(xs, func){
    return xs.map(func);
}// ()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función
function probarHacerCalculos(xs,polinomio,arrayEsp){
    let res = hacerCalculos(xs, function(elem){
        let resultado = 0;
        for (let i = 0; i < polinomio.length; i++) {
            resultado += polinomio[i] * Math.pow(elem, i);
        }
        return resultado;
    });
    for(let i = 0; i<res.length; i++){
        console.log(res[i]);
        if(res[i] !== arrayEsp[i]){
            console.log("Está mal");
        }
    }// for
}// ()

//--------------------------------------------
// main()
//--------------------------------------------

const xs = [4,2,1]; // coeficientes
const polinomio = [3,2,1]; // Polinomio: 3x^2 + 2x + 1
const arrayEsp = [27,11,6]; // resultados
probarHacerCalculos(xs,polinomio,arrayEsp);

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------