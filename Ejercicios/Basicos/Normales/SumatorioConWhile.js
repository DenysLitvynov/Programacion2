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

// prueba automática para sumatorio()
function probarSumatorio(){
    if(sumatorio(3)!=6){
        console.log("Esta mal con bucle");
    }
}//()

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

// prueba automática para sumatorioPares()
function probarSumatorioPares(){
    if(sumatorioPares(6)!=12){
        console.log("Esta mal con bucle");
    }
}//()

//---------------------------------
// main()
//---------------------------------

probarSumatorio();
probarSumatorioPares();

//---------------------------------
//---------------------------------
//---------------------------------