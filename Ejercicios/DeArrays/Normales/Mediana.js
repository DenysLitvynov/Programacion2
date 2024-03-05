//
// Hacer una función que se le pase una lista de números y nos calcule la mediana
// Lista<R> -> calcularMediana() -> R
//
function calcularMediana(array){
    array.sort((a, b) => a - b);// para ordenar la lista en orden ascendente
    const tam = array.length;
    if(tam===0){
        return;
    }
    if (tam % 2 !== 0) {
        return array[Math.floor(tam / 2)];
    } else {
        const medio = tam / 2;
        const value1 = array[medio - 1];
        const value2 = array[medio];
        return (value1 + value2) / 2;
    }
}

// Prueba automática para la función
function probarCalcularMediana(array){
    var res = calcularMediana(array);
    if(res!=3){
        console.log("Esta mal");
    }
}

//------------------------------
// main()
//------------------------------

var array = [1,2,3,4,5];
probarCalcularMediana(array);

//------------------------------
//------------------------------
//------------------------------