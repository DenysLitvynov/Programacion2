//
// Hacer una función que convierte todos los números de una lista en positivos
// Lista<N> -> aPositivo() -> Lista<N>
//
function aPositivo(array){
    for(var i=0;i<array.length;i++){ 
        if(array[i]<0){ // si es menor que cero multiplicamos por -1
            array[i]*=-1;
        }
    }//for()
    return array;
}//()

//------------------------------
// main()
//------------------------------

var array = new Array(-1,2,-3,4,-5);
var res = aPositivo(array);// Llamada a la función
var prueba = new Array(1,2,3,4,5);// Declaramos el array de prueba

// Prueba automática para la función
for(var i=0;i<res.length;i++){
    //console.log(res[i]);
    if(res[i]!=prueba[i]){
        console.log("Esta mal");
        break;
    }
}

//------------------------------
//------------------------------
//------------------------------