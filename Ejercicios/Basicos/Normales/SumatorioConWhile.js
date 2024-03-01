//
// Función que recibe un número y calcula el sumatorio hasta ese numero (sin bucle)
// N -> sumatorioSinBucle() -> N
//
function sumatorio(num){
    var res=0, i=1;
    while(i<=num){
        res+=i;
        i++;
    } // while
    return res;
} //()

//---------------------------------
//---------------------------------

//
// Función que recibe un número y calcula el sumatorio hasta ese numero (con bucle)
// N -> sumatorioConBucle() -> N
//
function sumatorioPares(num){
    var res=0, i=0;
    while(i<=num){
        res+=i;
        i+=2;
    } // while
    return res;
} //()

//---------------------------------
// main()
//---------------------------------

// prueba automática para sumatorio()
if(sumatorio(3)!=6){
    console.log("Esta mal ");
}

// prueba automática para sumatorioPares()
if(sumatorioPares(6)!=12){
    console.log("Esta mal pares");
}

//---------------------------------
//---------------------------------
//---------------------------------