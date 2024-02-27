// declaramos nuestro array
var array = new Array(1,2,3,4,5);

//
// Función que reduce los valores de un array en uno
// Lista<T1> T2 T2,T1->T2 -> reducir() -> T2
//
function reducir(array,operacion){
    var res = 0;
    for(var i=0;i<array.length;i++){
        res=operacion(array,res,i);
    } //for()
    return res;
} //()

//-------------------------------------
// main()
//-------------------------------------

// llamada a la función reducir()
var res = reducir(array,function(arrayP,result,i){
    result+=arrayP[i];
    return result;
}) //()

// prueba automática para la función reducir()
if(res!=15){
    console.log("Esta mal")
}

//-------------------------------------
//-------------------------------------
//-------------------------------------