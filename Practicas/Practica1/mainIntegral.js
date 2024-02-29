//
// Archivo: mainIntegral.js
// Descripción: Diseña, implementa y realiza pruebas automáticas para una función que calcule una integral
// Fecha: 29/02/2024
// Nombre: Denys Litvynov
//

//
// R R (R-> () ->R)-> calcularIntegral() -> R
//
function calcularIntegral(a,b,elevado){
    var res = (elevado(b)/3) - (elevado(a)/3);
    return res.toFixed(2); // gastamos toFixed para redondear solo a dos decimales
}// ()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarCalcularIntegral(){
    // llamada a la función integral con un callback que calcula el elvado de un numero
    var integral = calcularIntegral(1,2, function(e){
        var elev = e*e*e; 
        return elev;
    })

    if(integral!=2.33){
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