//
// Archivo: mainIntegral.js
// Descripción: Diseña, implementa y realiza pruebas automáticas para una función que calcule una integral
// Fecha: 29/02/2024
// Nombre: Denys Litvynov
//

//
// R R (R-> () ->R)-> calcularIntegral() -> R
//
function calcularIntegral(a, b, dx, f) {
    let suma = 0;
    for (let x = a; x < b; x += dx) {
        suma += f(x) * dx;
    }// for
    return parseFloat(suma.toFixed(2)); // gastamos toFixed para redondear solo a dos decimales
    
}// ()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarCalcularIntegral(){
    // llamada a la función integral con un callback que calcula el elvado de un numero
    var integral = calcularIntegral(1, 2, 0.001, function(e){
        var elev = e*e; 
        return elev;
    })
    //console.log(integral);
    if(integral!==2.34){
        console.log("Esta mal");
    }
}// ()

//--------------------------------------------
// main()
//--------------------------------------------

probarCalcularIntegral();

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------