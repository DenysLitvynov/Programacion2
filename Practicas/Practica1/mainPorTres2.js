//
// Archivo: mainPorTres2.js
// Descripción:  implementa el diseño de la función porTres() utilizando un callback para devolver el resultado
// Fecha: 29/02/2024
// Nombre: Denys Litvynov
//

//
// R -> porTres() -> R
//
function porTres(num,cb){
    var res = num*3;
    cb(res);
}


//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarPorTres(){
    var res = porTres(3,function(res){ 
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