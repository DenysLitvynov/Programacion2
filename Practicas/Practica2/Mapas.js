// declaramos nuestro array
var array = new Array("Elixir","Sintaxis","Hola","Cinco","Matrix");

//
// Función que aplica una transformación a cada elemento de una lista para obtener una nueva lista
// Lista<T1> T1->T2 -> mapear() -> Lista<T2>
//
function mapear(array1,transformar){
    var array2 = new Array();
    for(var i=0;i<array1.length;i++){
        transformar(array1,array2,i);
    } //for()
    return array2;
} //()

//-------------------------------------
// main()
//-------------------------------------

// llamada a la función mapear()
var res = mapear(array,function(a,a2,e){
    a2[e]=a[e].length;
    return a2;
});

// array para probar
var arrayPrueba = new Array(6,8,4,5,6);

// prueba automática para la función mapear()
for(var i=0;i<res.length;i++){
    if(res[i]!=arrayPrueba[i]){
        console.log("Esta mal");
        break;
    }
} //for()

//-------------------------------------
//-------------------------------------
//-------------------------------------