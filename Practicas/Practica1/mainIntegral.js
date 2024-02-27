//
// Función que calcula una integral definida
// R R -> calcularIntegral() -> R
//
function calcularIntegral(a,b,elevado){
    var res = (elevado(b)/3) - (elevado(a)/3);
    return res.toFixed(2);;
}//()

//--------------------------------------
// main()
//--------------------------------------

// llamada a la función integral con un callback que calcula el elvado de un numero
var integral = calcularIntegral(1,2, function(e){var elev = e*e*e; return elev;})
// prueba automática
if(integral!=2.33){
    console.log("Esta mal");
}//()

//----------------------------------------
//----------------------------------------
//----------------------------------------