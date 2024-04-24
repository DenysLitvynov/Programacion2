//
// Archivo: dividir.js
// Descripción: ----
// Fecha: 24/04/2024
// Nombre: Denys Litvynov
//

//--------------------------------------------
// R, R -> dividir() -> R | Error
//--------------------------------------------
function dividir(dividendo, divisor){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(divisor == 0){
                reject("Division por cero")
            } else {
                resolve( dividendo / divisor)
            }
        }, 500)
    })
}// ()


//--------------------------------------------
// main()
//--------------------------------------------

async function main(){
    try {
        var r = await dividir(10,2);
        console.log("el resultado es " + r)
        r = await dividir(10,0);
        console.log("el resultado es " + r)
    } catch( error ) {
        console.log("hubo un error: " + error)
    } 
}//()
main();

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------