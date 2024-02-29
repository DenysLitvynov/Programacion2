//
// Archivo: mainPorTres3.js
// Descripción: Escribe una versión del diseño de la función porTres() en la que ésta tarde tres segundos 
// en devolver el resultado. Escribe una prueba automática para esta versión de la función.
// Fecha: 29/02/2024
// Nombre: Denys Litvynov
//

//
// R -> porTres() -> R
//
function porTres(num,cb){
    var res = num*3;
    setTimeout(() => { cb(res); }, 3000);
}


//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarPorTres(){
    var res = porTres(3,(res) => { 
        if(res!=9){
            console.log("Esta mal")
        }
    });
}

//--------------------------------------------
// main()
//--------------------------------------------

probarPorTres();

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------