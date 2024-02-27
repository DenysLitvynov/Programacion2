//
// Hacer una función que recorre una lista de números para comprobar si contiene un numero
// Lista<N> N -> contiene() -> V/F
//
function contiene(array,num){
    for(var i=0;i<array.length;i++){
        if(array[i]==num){
            return true;
        }
    }//for()
    return false;
}//()

//------------------------------
// main()
//------------------------------

var array = new Array(1,2,3,4,5);
var num = 3;
var res=contiene(array,num); // Llamada a la función

// Prueba automática para la función
if(res!=true){
    console.log("Esta mal");
}

//------------------------------
//------------------------------
//------------------------------