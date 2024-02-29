//
// Hacer una función donde le pasemos una lista de números enteros y dos números y nos devuelva otra 
// lista donde se cambien todos las apariciones del primer número por el segundo (manteniendo su posición)
// Lista<N> N1 N2 -> substituir() -> Lista<N>
//
function substituir(array,num1,num2){
    for(var i=0;i<array.length;i++){
        if(array[i]==num1){ //si es igual a num1 cambiamos por num2
            array[i]=num2;
        }
    }//for()
    return array;
}//()

//------------------------------
// main()
//------------------------------

var array = new Array(1,2,2,2,4,5);
var arrPrueba = new Array(1,3,3,3,4,5);
var res = substituir(array,2,3);// Llamada a la función

// Prueba automática para la función
for(var i=0;i<res.length;i++){
    //console.log(res[i]);
    if(res[i]!=arrPrueba[i]){
        console.log("Esta mal");
    }
}//for()

//------------------------------
//------------------------------
//------------------------------