//
// Archivo: Ejemplo1.js
// Descripción: Ejemplo de una condición de carrera en Node.js
// Fecha: 16/04/2024
// Nombre: Denys Litvynov
//

var elAsiento = "nadie" 

//--------------------------------------------
// Texto -> cambiarNombre()
// Tras un intervalo, cambia el valor de la varibale global elAsiento
//--------------------------------------------
function cambiarNombre( nombre ) {
    setTimeout( function() {
        console.log( " *** elAsiento es para: " + nombre + "***" )
        elAsiento = nombre;
    }, 100)
}// ()

//--------------------------------------------
// Texto -> hacerReserva()
// Colateralmente, cambia la variable global 
//--------------------------------------------
function hacerReserva ( nombre ) {
    if( elAsiento == "nadie" ) {
        cambiarNombre ( nombre )
        return
    }
}// ()

//--------------------------------------------
// main()
//--------------------------------------------

console.log( "Intento reservar para juan." )
console.log( "Como es el primero en reservar, el asiento debería ser para él" )
hacerReserva( "juan" )

console.log( "Intento reservar para pepe." )
hacerReserva( "pepe" )

//
// Sin embargo, al final, que vale elAsiento ? 
//
setTimeout( ()=>console.log("elAsiento finalmente es para " + elAsiento), 1000)

// Finalmente el asiento es para pepe, ya que en el momento que se llama a la función hacerReserva tanto para juan como para pepe,
// la variable global elAsiento es igual a "nadie" , por tanto en ambos casos se asigna el nombre, pero el que se queda finalmente es pepe
// ya que el último tiene preferencia sobre el primero 

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------