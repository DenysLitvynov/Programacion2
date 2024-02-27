// declaramos nuestro array
var array = new Array("Elixir","Sintaxis","Hola","Cinco","Matrix");

//
// Función que filtra una lista de elementos utilizando una condición
// Lista<T> T->V/F -> filtrar() -> Lista<T>
//
function filtrar(array, condicion){
    var otroArray = new Array();
    for(var i=0;i<array.length;i++){
        if(condicion(array,i)){
            otroArray.push(array[i]);
        }
    } // for()
    return otroArray;
} //()

//-------------------------------------
// main()
//-------------------------------------

// llamada a la función filtrar()
var res = filtrar(array,function(array,e){
    if(array[e].includes("x")){
        return true;
    }
    return false;
}) //()

// array para probar 
var arrayPrueba = new Array("Elixir","Sintaxis","Matrix");

// prueba automática para la función filtrar()
for(var i=0;i<res.length;i++){
    console.log(res[i]);
    if(res[i]!=arrayPrueba[i]){
        console.log("Esta mal");
        break;
    }
} //for()

//-------------------------------------
//-------------------------------------
//-------------------------------------