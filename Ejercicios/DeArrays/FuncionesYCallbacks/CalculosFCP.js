//
// Archivo: CalculosFCP.js
// Descripción: hacer una función que se le pase una lista de números y 
// nos calcule el máximo, mínimo, la media y la desviación típica.
// Fecha: 04/03/2024
// Nombre: Denys Litvynov
//

//
// Lista<R> (R N R->()->V/F) -> calcularMaximo() -> R
//
function calcularMaximo(array,condicion){
    let res = array[0];
    for(let i=0; i<array.length; i++){
        if(condicion(array,i,res)){
            res = array[i];
        }
    }// for
    return res;
}// ()

//--------------------------------------------
//--------------------------------------------

//
// Lista<R> (R N R->()->V/F) -> calcularMinimo() -> R
//
function calcularMinimo(array,condicion){
    let res = array[0];
    for(let i=0; i<array.length; i++){
        if(condicion(array,i,res)){
            res = array[i];
        }
    }// for
    return res;
}// ()

//--------------------------------------------
//--------------------------------------------

//
// Lista<T1> T2 T2,T1->()->T2 -> calcularMedia() -> T2
//
function calcularMedia(array,operacion){
    let suma = 0;
    for(let i = 0; i<array.length; i++){
        suma = operacion(array,suma,i);
    }// for
    let res = suma/array.length;
    return res;
}// ()

//--------------------------------------------
//--------------------------------------------
/*
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
*/
//--------------------------------------------
//--------------------------------------------

//
// Lista<R> -> hacerCalculos() -> Lista<R>
//
function hacerCalculos(array){
    let res = [];
    res[0] = calcularMaximo(array,function(arr,i,r){
        if(arr[i]>r){
            return true;
        }
        return false;
    });
    res[1] = calcularMinimo(array,function(arr,i,r){
        if(r>arr[i]){
            return true;
        }
        return false;
    });
    res[2] = calcularMedia(array, function(arr,result,i){
        result += arr[i];
        return result;
    });
    //res[3] = calcularDesvTip(array);
    return res;
}

// Prueba automática para la función hacerCalculos()
function probarHacerCalculos(){
    let res = hacerCalculos(array);
    let arrPrueba = [5,1,3]; //(5,1,3,1.41);
    for(let i=0;i<res.length;i++){
        //console.log(res[i]);
        if(res[i]!=arrPrueba[i]){
            console.log("Esta mal");
        }
    }// for
}// ()

//--------------------------------------------
// main()
//--------------------------------------------

var array = [1,2,3,4,5];
probarHacerCalculos(array);

//--------------------------------------------
//--------------------------------------------
//--------------------------------------------