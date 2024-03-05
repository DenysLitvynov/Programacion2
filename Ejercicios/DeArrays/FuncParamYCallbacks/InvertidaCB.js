//
// Archivo: InvertidaCB.js
// Descripción: Hacer una función para copiar los números 
// de una lista en otra en el orden invertido
// Fecha: 05/03/2024
// Nombre: Denys Litvynov
//

//
// Lista<R> -> invertir() -> Lista<R>
//
function invertir(array,cb){
    var array2 = new Array();
    for(var i=array.length-1;i>=0;i--){
        array2.push(array[i]);
    }//for()
    cb(array2);
}//()

//--------------------------------------------
//--------------------------------------------

// Prueba automática para la función 
function probarInvertir(arr,arrPrueba){
    let arr2;
    let res = invertir(arr, (arr2) => {
        for(var i=0;i<arr2.length;i++){
            //console.log(res[i]);
            if(arr2[i]!=arrPrueba[i]){
                console.log("Esta mal");
                break;
            }
        }// for
    });
}// ()

//--------------------------------------------
// main()
//--------------------------------------------

var array = [1,2,3,4,5];
var arrPrueba = [5,4,3,2,1];
probarInvertir(array,arrPrueba);

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------