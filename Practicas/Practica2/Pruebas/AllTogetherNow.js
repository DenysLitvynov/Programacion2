// lista de palabras a modificar
var palabras = ["Es", "ahora", "tu", "oportunidad", "para", "aprovechar", "este", "día"];

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
//-------------------------------------

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
//-------------------------------------

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

//-------------------------------------
// PRUEBA PARA EL EJERCICIO 1
//-------------------------------------

// llamada a la función mapear()
var res = mapear(palabras,function(a,a2,e){
    a2[e]=a[e].split("").reverse().join("");;
    return a2;
});

// array para probar
var arrayPrueba1 = new Array("sE", "aroha", "ut", "dadinutropo", "arap", "rahcevorpa", "etse", "aíd");

// prueba automática para la función mapear()
for(var i=0;i<res.length;i++){
    if(res[i]!=arrayPrueba1[i]){
        console.log("Ejercicio 1 está mal");
        break;
    }
} //for()

//-------------------------------------
// PRUEBA PARA EL EJERCICIO 2
//-------------------------------------

// llamada a la función mapear()
var cantidadDeCaracteres = mapear(palabras,function(a,a2,e){
    a2[e]=a[e].length;
    return a2;
});

// llamada a la función reducir()
var res = reducir(cantidadDeCaracteres,function(arrayP,result,i){
    result+=arrayP[i];
    return result;
}) //()

// prueba automática para la función reducir()
if(res!=41){
    console.log("Ejercicio 2 está mal")
}

//-------------------------------------
// PRUEBA PARA EL EJERCICIO 3
//-------------------------------------

// llamada a la función filtrar()
var res2 = filtrar(palabras,function(array,e){
    if(array[e].length>5){
        return true;
    }
    return false;
}) //()

// prueba automática para la función filtrar()
if(res2.length!=2){
    console.log("Ejercicio 3 está mal");
}

//-------------------------------------
// PRUEBA PARA EL EJERCICIO 4
//-------------------------------------

// llamada a la función filtrar()
var res3 = filtrar(palabras,function(array,e){
    if(array[e].length<=3){
        return true;
    }
    return false;
}) //()

// llamada a la función reducir()
var res4 = reducir(res3,function(arrayP,result,i){
    if (i === 0) {
        result = arrayP[i];
    } else {
        result += arrayP[i];
    }
    return result;
}) //()

// prueba automática para la función 
console.log(res4);
if(res4!=prueba){
    console.log("Esta mal");
}

//-------------------------------------
//-------------------------------------
//-------------------------------------