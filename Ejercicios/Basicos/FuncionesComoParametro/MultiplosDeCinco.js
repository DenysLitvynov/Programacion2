//
// hacer una función que imprima todos aquellos números comprendidos entre 5 y 105 que son múltiplos de 5
// imprimirMutiplos()
//
function imprimirMultiplos(callback){
    for(let i=5;i<105;i++){
        callback(i);
    } // for
} //()

//------------------------------
// main()
//------------------------------

// prueba automática
imprimirMultiplos(function(e){
    if(e%5==0){
        console.log(e);
    }
});

//------------------------------
//------------------------------
//------------------------------