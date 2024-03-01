//
// hacer una función que imprima todos aquellos números comprendidos entre 5 y 105 que son múltiplos de 5
// imprimirMutiplos()
//
function imprimirMultiplos(callback){
    var i = 5;
    while(i<=105){
        callback(i);
        i++;
    }// while
}// ()

//---------------------------------
// main()
//---------------------------------

// prueba automática
imprimirMultiplos(function(e){
    if(e%5==0){
        console.log(e);
    }
});

//---------------------------------
//---------------------------------
//---------------------------------