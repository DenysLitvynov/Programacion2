//
// Archivo: Calculos.js
// Descripción: hacer una función que se le pase una lista de números y 
// nos calcule el máximo, mínimo, la media y la desviación típica.
// Fecha: 21/02/2024
// Nombre: Denys Litvynov
//

const array = new Array(1,2,3,4,5);

//
// Lista<R> -> calcularMaximo() -> R
//
function calcularMaximo(array){
    let max = array[0];
    for(let i=0;i<array.length;i++){
        if(max<array[i]){
            max=array[i];
        }
    }//for()
    return max;
}//()

// Prueba automática para la función 
function probarCalcularMaximo(){
    let res = calcularMaximo(array);
    if(res!=5){
        console.log("Esta mal 1");
    }
}//()

//--------------------------------------------
//--------------------------------------------

//
// Lista<R> -> calcularMinimo() -> R
//
function calcularMinimo(array){
    let min = array[0];
    for(let i=0;i<array.length;i++){
        if(min>array[i]){
            min=array[i];
        }
    }//for()
    return min;
}//()

// Prueba automática para la función 
function probarCalcularMinimo(){
    let res = calcularMinimo(array);
    if(res!=1){
        console.log("Esta mal 2");
    }
}//()

//--------------------------------------------
//--------------------------------------------

//
// Lista<R> -> calcularMedia() -> R
//
function calcularMedia(array){
    let suma=0;
    for(let i=0;i<array.length;i++){
        suma+=array[i];
    }//for()
    return suma/array.length;
}//()

// Prueba automática para la función 
function probarCalcularMedia(){
    let res = calcularMedia(array);
    if(res!=3){
        console.log("Esta mal 3");
    }
}//()

//--------------------------------------------
//--------------------------------------------

//
// Lista<R> -> calcularDesvTip() -> R
//
function calcularDesvTip(array){
    let desv=0, desvElem=0, variacion=0, desvtip=0;
    for(let i=0;i<array.length;i++){
        desvElem=(array[i]-calcularMedia(array))*(array[i]-calcularMedia(array));
        desv+=desvElem;
    }
    variacion=desv/array.length;
    desvtip=Math.sqrt(variacion);
    return desvtip.toFixed(2);
}//()

// Prueba automática para la función 
function probarCalcularDesvTip(){
    let resultado = calcularDesvTip(array);
    //console.log(resultado);
    if(resultado!=1.41){
        console.log("Esta mal 4")
    }
}//()

//--------------------------------------------
//--------------------------------------------

//
// Lista<R> -> hacerCalculos() -> Lista<R>
//
function hacerCalculos(array){
    let res = new Array();
    res[0] = calcularMaximo(array);
    res[1] = calcularMinimo(array);
    res[2] = calcularMedia(array);
    res[3] = calcularDesvTip(array);
    return res;
}

// Prueba automática para la función hacerCalculos()
function probarHacerCalculos(){
    let res = hacerCalculos(array);
    let arrPrueba = new Array(5,1,3,1.41);
    for(let i=0;i<res.length;i++){
        //console.log(res[i]);
        if(res[i]!=arrPrueba[i]){
            console.log("Esta mal");
        }
    }
}

//--------------------------------------------
// main()
//--------------------------------------------

probarCalcularMaximo();
probarCalcularMinimo();
probarCalcularMedia();
probarCalcularDesvTip();
probarHacerCalculos();

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------
