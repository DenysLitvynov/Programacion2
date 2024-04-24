//
// Archivo: pregunta2.js
// Descripción: -----
// Fecha: 22/04/2024
// Nombre: Denys Litvynov
//

//--------------------------------------------
// xs:[R], (R -> () -> R) -> hacerCalculos() -> resultado:[R]
//--------------------------------------------
function hacerCalculos(xs, func){
    let resultado = xs.map(function(elem){
        return func(elem);
    })
    return resultado;
}// ()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarHacerCalculos(xs, polinomio, esperados){
    let res = hacerCalculos(xs, function(elem){
        let resultado = 0;
        for (let i = 0; i < polinomio.length; i++) {
            resultado += polinomio[i] * Math.pow(elem, i);
        }
        return resultado;
    });
    for(let i = 0; i<res.length; i++){
        console.log(res[i]);
        if(res[i] !== esperados[i]){
            console.log("Está mal");
        }
    }// for
}//()

//--------------------------------------------
// main()
//--------------------------------------------

const xs = [0,1,2,3,4];
const polinomio = [-1,2,3]; 
const esperados = [-1,4,15,32,55];
probarHacerCalculos(xs,polinomio,esperados);

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------