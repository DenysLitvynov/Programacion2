//
// Hacer una función que reciba una lista de números y los ordena de menor a mayor
// Lista<R> -> ordenar() -> Lista<R>
//
function ordenar(array){
    var pos = 0, elem = 0;
    for(var i=0;i<array.length;i++){
        pos = i;
        elem = array[i];
        while((pos>0)&&(array[pos-1]>elem)){
            array[pos]=array[pos-1];
            pos--;
        }//while()
        array[pos]=elem;
    }//for()
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