//
// hacer una función que calcule la suma de los primeros 20 números positivos, e imprima ésta por pantalla.
// primerosVeinte() -> N
//
function primerosVeinte(){
    var suma=0; i=1
    while(i<=20){
        suma+=i;
        i++;
    }
    return suma;
}//()

//---------------------------------
// main()
//---------------------------------

// prueba automática
console.log(primerosVeinte());

//---------------------------------
//---------------------------------
//---------------------------------