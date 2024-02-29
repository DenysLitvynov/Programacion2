//
// Archivo: mainSumar.js
// Descripción: Analizar, probar y responder a las preguntas
// Fecha: 29/02/2024
// Nombre: Denys Litvynov
//

//
// incio: N fin: N condicion: (N-> () ->V/F) ->  sumar () -> N
//
function sumar( inicio, fin, condicion){
    var total = 0;
    for(var i=inicio; i<=fin; i++){
        if ( condicion(i)) {
            total = total + i;
        }
    } // for
    return total
} // ()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 

//--------------------------------------------
// main()
//--------------------------------------------

var s = sumar(1, 10, function(e) {
    if( e % 3 == 0){
        return true;
    }
    return false;
})

console.log(s)

/* -------------------------------------------------------------------------------------
• ¿Qué hace la función sumar()?
    - Suma los números que son divisibles por 3 

• ¿Es asíncrona la función sumar()?
    -No, es sincrona porque todo se ejecuta inmediatamente

• ¿Es la función function(e) { ... un callback?
    -No, porque se llama inmediatamente, no tras pasar un tiempo

• ¿Cuál es el diseño de la función sumar()?
    - incio: N fin: N condicion: (N-> () ->V/F) ->  sumar () -> N

• ¿Por qué cuando una función recibe un callback, éste no aparece en el diseño?
    - Porque de normal un callback no afecta al calculo de una función, sin embargo 
    en este caso ni es un callback y si que afecta, por tanto aparece en el diseño. 
    Ademas, un callback suele funcionar como un return
------------------------------------------------------------------------------------- */

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------