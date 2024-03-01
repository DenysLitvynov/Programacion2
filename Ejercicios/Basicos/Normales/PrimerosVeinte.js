//
// hacer una función que calcule la suma de los primeros 20 números positivos, e imprima ésta por pantalla.
// primerosVeinte() -> N
//
function primerosVeinte(){
    let suma=0;
    for(let i=1;i<=20;i++){
        suma+=i;
    }
    return suma;
}// ()

//------------------------------
// main()
//------------------------------

// prueba automática
console.log(primerosVeinte());

//------------------------------
//------------------------------
//------------------------------