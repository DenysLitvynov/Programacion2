//
// Hacer una función para copiar los números 
// de una lista en otra en el orden invertido
// Lista<R> -> invertir() -> Lista<R>
//
function invertir(array){
    var array2 = new Array();
    for(var i=array.length-1;i>=0;i--){
        array2.push(array[i]);
    }//for()
    return array2;
}//()

//------------------------------
// main()
//------------------------------

var array = new Array(1,2,3,4,5);
var arrPrueba = new Array(5,4,3,2,1);
var res = invertir(array);// Llamada a la función

// Prueba automática para la función
for(var i=0;i<res.length;i++){
    //console.log(res[i]);
    if(res[i]!=arrPrueba[i]){
        console.log("Esta mal");
        break;
    }
}

//------------------------------
//------------------------------
//------------------------------