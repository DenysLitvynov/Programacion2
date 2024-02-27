//
// Hacer una función que reciba una lista de números y los ordena de menor a mayor
// Lista<R> -> ordenar() -> Lista<R>
//
function ordenar(array){
    var elem = 0;
    for(var i=0;i<array.length;i++){
        for(var j=0;j<array.length;j++){
            if(array[j]>array[j+1]){ // intercambiamos dos elementos de lugar
                elem = array[j];
                array[j] = array[j+1];
                array[j+1] = elem;
            }
        }//for.interior()
    }//for.exterior()
    return array;
}//()

//------------------------------
// main()
//------------------------------

var array = new Array(4,5,2,1,3);
var arrPrueba = new Array(1,2,3,4,5);
var res = ordenar(array);// Llamada a la función

// Prueba automática para la función
for(var i=0;i<res.length;i++){
    //console.log(res[i]);
    if(res[i]!=arrPrueba[i]){
        console.log("Esta mal");
        break;
    }
}//for()

//------------------------------
//------------------------------
//------------------------------