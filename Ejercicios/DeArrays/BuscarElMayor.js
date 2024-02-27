//
// Hacer una función que recorre los elementos de una lista de números reales para encontrar el mayor de ellos
// Lista<R> -> buscarElMayor() -> R
//
function buscarElMayor(array){
    var res=-1000;// incializamos con un valor super pequeño para asegurarnos de que haya alguno mayor
    for(var i=0;i<array.length;i++){
        if(array[i]>res){ // si es mayor lo almacenamos
            res=array[i];
        }
    }//for()
    return res;
}//()

//------------------------------
// main()
//------------------------------

var array = new Array(-5,12,634,1,-999);
var res=buscarElMayor(array); // Llamada a la función

// Prueba automática para la función
if(res!=634){
    console.log("Esta mal");
}

//------------------------------
//------------------------------
//------------------------------